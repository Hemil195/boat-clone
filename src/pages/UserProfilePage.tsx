import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

interface UserProfile {
  _id: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  city: string;
  state: string;
  postalCode: string;
  totalOrders: number;
}

const UserProfilePage: React.FC = () => {
  const { user, login } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:10000'; // Changed to use environment variable

  useEffect(() => {
    if (user && user.token) {
      fetchProfile();
    } else {
      setLoading(false);
      toast({
        title: "Authentication Required",
        description: "Please log in to view your profile.",
        variant: "destructive",
      });
    }
  }, [user]);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.get<UserProfile>(`${backendUrl}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      setProfile(response.data);
      setFormData({
        name: response.data.name,
        email: response.data.email,
        address: response.data.address || '',
        phoneNumber: response.data.phoneNumber || '',
        city: response.data.city || '',
        state: response.data.state || '',
        postalCode: response.data.postalCode || '',
      });
    } catch (error: any) {
      toast({
        title: "Error fetching profile",
        description: error.response?.data?.message || 'Could not load profile.',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put<UserProfile>(`${backendUrl}/api/users/profile`, formData, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      setProfile(response.data);
      // Update the user context with new data
      if (user) {
        login({ 
          ...user,
          name: response.data.name,
          email: response.data.email,
          address: response.data.address,
          phoneNumber: response.data.phoneNumber,
          city: response.data.city,
          state: response.data.state,
          postalCode: response.data.postalCode,
        });
      }
      toast({
        title: "Profile Updated",
        description: "Your profile details have been successfully updated.",
      });
      setEditing(false);
    } catch (error: any) {
      toast({
        title: "Error updating profile",
        description: error.response?.data?.message || 'Could not update profile.',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-boat-red" />
        <p className="ml-2 text-gray-700">Loading profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Profile not found or not logged in.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">User Profile</CardTitle>
          <CardDescription className="text-center">View and edit your personal details.</CardDescription>
        </CardHeader>
        <CardContent>
          {!editing ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Full Name:</p>
                <p className="text-lg text-gray-700">{profile.name}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Email:</p>
                <p className="text-lg text-gray-700">{profile.email}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Address:</p>
                <p className="text-lg text-gray-700">{profile.address || 'Not set'}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Phone Number:</p>
                <p className="text-lg text-gray-700">{profile.phoneNumber || 'Not set'}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">City:</p>
                <p className="text-lg text-gray-700">{profile.city || 'Not set'}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">State:</p>
                <p className="text-lg text-gray-700">{profile.state || 'Not set'}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Postal Code:</p>
                <p className="text-lg text-gray-700">{profile.postalCode || 'Not set'}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Total Orders:</p>
                <p className="text-lg text-gray-700">{profile.totalOrders}</p>
              </div>
              <Button onClick={() => setEditing(true)} className="w-full bg-boat-red hover:bg-boat-red-dark">
                Edit Profile
              </Button>
            </div>
          ) : (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    type="text"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
              <div className="flex space-x-4">
                <Button type="submit" disabled={loading} className="w-full bg-boat-red hover:bg-boat-red-dark">
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Save Changes'}
                </Button>
                <Button type="button" variant="outline" onClick={() => setEditing(false)} className="w-full">
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfilePage; 