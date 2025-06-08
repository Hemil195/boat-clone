import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, User, Settings, ShoppingBag, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserMenu = ({ isOpen, onClose }: UserMenuProps) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const isLoggedIn = !!user;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    onClose();
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-72 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
      {isLoggedIn ? (
        <>
          {/* Profile Header */}
          <div className="p-4 bg-gradient-to-r from-boat-red to-boat-red-dark">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-boat-red font-bold text-xl">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="text-white">
                <p className="font-semibold text-lg">{user.name}</p>
                <p className="text-sm opacity-90">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <button
              onClick={() => {
                onClose();
                navigate('/profile');
              }}
              className="w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors"
            >
              <User className="w-5 h-5 text-gray-500" />
              <span>My Profile</span>
            </button>

            <button
              onClick={() => {
                onClose();
                navigate('/orders');
              }}
              className="w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-gray-500" />
              <span>My Orders</span>
            </button>

            <button
              onClick={() => {
                onClose();
                navigate('/wishlist');
              }}
              className="w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors"
            >
              <Heart className="w-5 h-5 text-gray-500" />
              <span>Wishlist</span>
            </button>

            <button
              onClick={() => {
                onClose();
                navigate('/settings');
              }}
              className="w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3 transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-500" />
              <span>Settings</span>
            </button>

            <Separator className="my-2" />

            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign out</span>
            </button>
          </div>
        </>
      ) : (
        <div className="p-4">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Welcome to BOAT</h3>
            <p className="text-sm text-gray-500 mt-1">Sign in to access your account</p>
          </div>
          <Button
            onClick={() => {
              onClose();
              navigate('/login');
            }}
            className="w-full bg-boat-red hover:bg-boat-red-dark text-white"
          >
            Sign in
          </Button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{' '}
            <button
              onClick={() => {
                onClose();
                navigate('/signup');
              }}
              className="text-boat-red hover:text-boat-red-dark font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default UserMenu; 