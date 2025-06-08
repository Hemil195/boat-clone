import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '@/context/CheckoutContext';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useOrder } from '@/context/OrderContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, CreditCard, IndianRupee, Package } from 'lucide-react';
import axios from 'axios';

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
  token?: string;
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart, getTotalPrice, clearCart } = useCart();
  const { addOrder } = useOrder();
  const { toast: showToast } = useToast();
  const {
    checkoutState,
    setShippingAddress,
    setPaymentMethod,
    setOrderNotes,
    nextStep,
    prevStep,
    resetCheckout,
    isStepValid,
  } = useCheckout();

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
    phone: '',
    paymentType: 'card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
  });

  const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:10000';

  useEffect(() => {
    if (user && user.token) {
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get<UserProfile>(`${backendUrl}/api/users/profile`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const profileData = response.data;
          setFormData(prev => ({
            ...prev,
            fullName: profileData.name || '',
            address: profileData.address || '',
            city: profileData.city || '',
            state: profileData.state || '',
            postalCode: profileData.postalCode || '',
            phone: profileData.phoneNumber || '',
          }));
        } catch (error: any) {
          showToast({
            title: "Error loading profile for checkout",
            description: error.response?.data?.message || 'Could not pre-fill checkout details.',
            variant: "destructive",
          });
        }
      };
      fetchUserProfile();
    }
  }, [user]);

  if (!user) {
    navigate('/login');
    return null;
  }

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const address = {
      fullName: formData.fullName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      postalCode: formData.postalCode,
      country: formData.country,
      phone: formData.phone,
    };
    setShippingAddress(address);
    nextStep();
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let paymentMethod;

    switch (formData.paymentType) {
      case 'card':
        paymentMethod = {
          type: 'card' as const,
          details: {
            cardNumber: formData.cardNumber,
            cardName: formData.cardName,
            expiryDate: formData.expiryDate,
            cvv: formData.cvv,
          },
        };
        break;
      case 'upi':
        paymentMethod = {
          type: 'upi' as const,
          details: {
            upiId: formData.upiId,
          },
        };
        break;
      case 'netbanking':
        paymentMethod = {
          type: 'netbanking' as const,
          details: {
            bankName: formData.bankName,
            accountNumber: formData.accountNumber,
            ifscCode: formData.ifscCode,
          },
        };
        break;
      default:
        showToast({
          title: "Payment Method Error",
          description: 'Please select a valid payment method',
          variant: "destructive",
        });
        return;
    }

    setPaymentMethod(paymentMethod);
    nextStep();
  };

  const handlePlaceOrder = async () => {
    if (!user) {
      showToast({
        title: "Authentication Required",
        description: 'Please login to place an order',
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    if (!checkoutState.shippingAddress || !checkoutState.paymentMethod) {
      showToast({
        title: "Checkout Incomplete",
        description: 'Please complete all checkout steps',
        variant: "destructive",
      });
      return;
    }

    const orderData = {
      userId: user.id,
      items: cart.map(cartItem => ({
        productId: cartItem.product.id,
        name: cartItem.product.name,
        quantity: cartItem.quantity,
        price: cartItem.product.price,
      })),
      totalAmount: getTotalPrice(),
      shippingAddress: checkoutState.shippingAddress,
      paymentMethod: checkoutState.paymentMethod,
      orderNotes: checkoutState.orderNotes,
    };

    try {
      await addOrder(orderData);
      showToast({
        title: "Order Placed Successfully!",
        description: 'Your order has been placed successfully.',
      });
      clearCart();
      resetCheckout();
      navigate('/orders');
    } catch (error) {
      // The addOrder function in OrderContext already handles toast for errors
      console.error("Error placing order in CheckoutPage:", error);
    }
  };

  const renderStepIndicator = () => {
    const steps = ['Shipping', 'Payment', 'Review'];
    return (
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex items-center ${
              index + 1 === checkoutState.step ? 'text-boat-red' : 'text-gray-400'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                index + 1 === checkoutState.step
                  ? 'border-boat-red bg-boat-red text-white'
                  : 'border-gray-300'
              }`}
            >
              {index + 1}
            </div>
            <span className="ml-2">{step}</span>
            {index < steps.length - 1 && (
              <div className="w-16 h-0.5 bg-gray-300 mx-4" />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderShippingStep = () => (
    <form onSubmit={handleShippingSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        <Input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <Input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <Input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
        <Input
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleInputChange}
          required
        />
        <Input
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleInputChange}
          required
        />
        <Input
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleInputChange}
          required
          disabled
        />
      </div>
      <Textarea
        name="orderNotes"
        placeholder="Order Notes (optional)"
        value={checkoutState.orderNotes}
        onChange={handleInputChange}
      />
      <Button type="submit" className="w-full bg-boat-red hover:bg-boat-red-dark">
        Continue to Payment
      </Button>
    </form>
  );

  const renderPaymentStep = () => (
    <form onSubmit={handlePaymentSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
      <RadioGroup
        value={formData.paymentType}
        onValueChange={(value: string) => setFormData(prev => ({ ...prev, paymentType: value }))}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2 border p-3 rounded-md">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card" className="flex items-center space-x-2 text-lg font-medium">
            <CreditCard className="h-5 w-5" />
            <span>Credit / Debit Card</span>
          </Label>
        </div>
        {formData.paymentType === 'card' && (
          <Card className="ml-6">
            <CardContent className="pt-4 space-y-3">
              <Input
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
              <Input
                name="cardName"
                placeholder="Name on Card"
                value={formData.cardName}
                onChange={handleInputChange}
                required
              />
              <div className="grid grid-cols-2 gap-3">
                <Input
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex items-center space-x-2 border p-3 rounded-md">
          <RadioGroupItem value="upi" id="upi" />
          <Label htmlFor="upi" className="flex items-center space-x-2 text-lg font-medium">
            <IndianRupee className="h-5 w-5" />
            <span>UPI</span>
          </Label>
        </div>
        {formData.paymentType === 'upi' && (
          <Card className="ml-6">
            <CardContent className="pt-4 space-y-3">
              <Input
                name="upiId"
                placeholder="Your UPI ID (e.g. example@bank)"
                value={formData.upiId}
                onChange={handleInputChange}
                required
              />
            </CardContent>
          </Card>
        )}

        <div className="flex items-center space-x-2 border p-3 rounded-md">
          <RadioGroupItem value="netbanking" id="netbanking" />
          <Label htmlFor="netbanking" className="flex items-center space-x-2 text-lg font-medium">
            <Package className="h-5 w-5" />
            <span>Net Banking</span>
          </Label>
        </div>
        {formData.paymentType === 'netbanking' && (
          <Card className="ml-6">
            <CardContent className="pt-4 space-y-3">
              <Input
                name="bankName"
                placeholder="Bank Name"
                value={formData.bankName}
                onChange={handleInputChange}
                required
              />
              <Input
                name="accountNumber"
                placeholder="Account Number"
                value={formData.accountNumber}
                onChange={handleInputChange}
                required
              />
              <Input
                name="ifscCode"
                placeholder="IFSC Code"
                value={formData.ifscCode}
                onChange={handleInputChange}
                required
              />
            </CardContent>
          </Card>
        )}
      </RadioGroup>

      <div className="flex justify-between mt-6">
        <Button type="button" onClick={prevStep} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shipping
        </Button>
        <Button type="submit" className="bg-boat-red hover:bg-boat-red-dark">
          Continue to Review <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );

  const renderReviewStep = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <Card>
        <CardHeader>
          <CardTitle>Shipping Address</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{checkoutState.shippingAddress?.fullName}</p>
          <p>{checkoutState.shippingAddress?.address}</p>
          <p>{checkoutState.shippingAddress?.city}, {checkoutState.shippingAddress?.state} - {checkoutState.shippingAddress?.postalCode}</p>
          <p>{checkoutState.shippingAddress?.country}</p>
          <p>Phone: {checkoutState.shippingAddress?.phone}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Type: {checkoutState.paymentMethod?.type}</p>
          {checkoutState.paymentMethod?.type === 'card' && (
            <p>Card Number: **** **** **** {checkoutState.paymentMethod.details.cardNumber.slice(-4)}</p>
          )}
          {checkoutState.paymentMethod?.type === 'upi' && (
            <p>UPI ID: {checkoutState.paymentMethod.details.upiId}</p>
          )}
          {checkoutState.paymentMethod?.type === 'netbanking' && (
            <p>Bank: {checkoutState.paymentMethod.details.bankName}</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Items in Cart</CardTitle>
        </CardHeader>
        <CardContent>
          {cart.map(item => (
            <div key={item.product.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <p>{item.product.name} x {item.quantity}</p>
              <p>₹{(item.product.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="flex justify-between items-center font-bold mt-4">
            <p>Total:</p>
            <p>₹{getTotalPrice().toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>

      {checkoutState.orderNotes && (
        <Card>
          <CardHeader>
            <CardTitle>Order Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{checkoutState.orderNotes}</p>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between mt-6">
        <Button type="button" onClick={prevStep} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Payment
        </Button>
        <Button onClick={handlePlaceOrder} className="bg-boat-red hover:bg-boat-red-dark">
          Place Order
        </Button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-24">
      {renderStepIndicator()}

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          {checkoutState.step === 1 && renderShippingStep()}
          {checkoutState.step === 2 && renderPaymentStep()}
          {checkoutState.step === 3 && renderReviewStep()}
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage; 