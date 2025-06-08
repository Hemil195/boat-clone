import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '@/context/CheckoutContext';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useOrder } from '@/context/OrderContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, CreditCard, IndianRupee, Package } from 'lucide-react';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart, getTotalPrice, clearCart } = useCart();
  const { addOrder } = useOrder();
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
        toast.error('Please select a valid payment method');
        return;
    }

    setPaymentMethod(paymentMethod);
    nextStep();
  };

  const handlePlaceOrder = () => {
    if (!user) {
      toast.error('Please login to place an order');
      navigate('/login');
      return;
    }

    if (!checkoutState.shippingAddress || !checkoutState.paymentMethod) {
      toast.error('Please complete all checkout steps');
      return;
    }

    const orderData = {
      userId: user.id,
      items: cart,
      totalAmount: getTotalPrice(),
      shippingAddress: checkoutState.shippingAddress,
      paymentMethod: checkoutState.paymentMethod,
      orderNotes: checkoutState.orderNotes,
    };

    addOrder(orderData);
    toast.success('Order placed successfully!');
    clearCart();
    resetCheckout();
    navigate('/orders');
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
      </div>
      <Button type="submit" className="w-full">
        Continue to Payment
      </Button>
    </form>
  );

  const renderPaymentStep = () => (
    <form onSubmit={handlePaymentSubmit} className="space-y-6">
      <RadioGroup 
        value={formData.paymentType}
        onValueChange={(value) => setFormData(prev => ({ ...prev, paymentType: value }))}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card">Credit/Debit Card</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upi" id="upi" />
          <Label htmlFor="upi">UPI</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="netbanking" id="netbanking" />
          <Label htmlFor="netbanking">Net Banking</Label>
        </div>
      </RadioGroup>

      {formData.paymentType === 'card' && (
        <div className="space-y-4">
          <Input
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
            maxLength={16}
            pattern="[0-9]*"
          />
          <Input
            name="cardName"
            placeholder="Name on Card"
            value={formData.cardName}
            onChange={handleInputChange}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
              maxLength={5}
              pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
            />
            <Input
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleInputChange}
              required
              maxLength={3}
              pattern="[0-9]*"
            />
          </div>
        </div>
      )}

      {formData.paymentType === 'upi' && (
        <div className="space-y-4">
          <Input
            name="upiId"
            placeholder="UPI ID (e.g., name@bank)"
            value={formData.upiId}
            onChange={handleInputChange}
            required
            pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+"
          />
        </div>
      )}

      {formData.paymentType === 'netbanking' && (
        <div className="space-y-4">
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
            pattern="[0-9]*"
          />
          <Input
            name="ifscCode"
            placeholder="IFSC Code"
            value={formData.ifscCode}
            onChange={handleInputChange}
            required
            pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
          />
        </div>
      )}

      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button type="submit" className="flex-1">
          Continue to Review
        </Button>
      </div>
    </form>
  );

  const renderReviewStep = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Shipping Address</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{checkoutState.shippingAddress?.fullName}</p>
          <p>{checkoutState.shippingAddress?.address}</p>
          <p>
            {checkoutState.shippingAddress?.city}, {checkoutState.shippingAddress?.state}{' '}
            {checkoutState.shippingAddress?.postalCode}
          </p>
          <p>{checkoutState.shippingAddress?.country}</p>
          <p>{checkoutState.shippingAddress?.phone}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          {checkoutState.paymentMethod?.type === 'card' && (
            <>
              <p>Card ending in {checkoutState.paymentMethod.details.cardNumber?.slice(-4)}</p>
              <p>{checkoutState.paymentMethod.details.cardName}</p>
              <p>Expires: {checkoutState.paymentMethod.details.expiryDate}</p>
            </>
          )}
          {checkoutState.paymentMethod?.type === 'upi' && (
            <p>UPI ID: {checkoutState.paymentMethod.details.upiId}</p>
          )}
          {checkoutState.paymentMethod?.type === 'netbanking' && (
            <>
              <p>Bank: {checkoutState.paymentMethod.details.bankName}</p>
              <p>Account ending in {checkoutState.paymentMethod.details.accountNumber?.slice(-4)}</p>
              <p>IFSC: {checkoutState.paymentMethod.details.ifscCode}</p>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          {cart.map(item => (
            <div key={item.product.id} className="flex justify-between py-2">
              <span>{item.product.name}</span>
              <span>₹{item.product.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{getTotalPrice()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Textarea
        placeholder="Add order notes (optional)"
        value={checkoutState.orderNotes}
        onChange={e => setOrderNotes(e.target.value)}
      />

      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handlePlaceOrder} className="flex-1">
          Place Order
        </Button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      {renderStepIndicator()}
      <div className="max-w-2xl mx-auto">
        {checkoutState.step === 1 && renderShippingStep()}
        {checkoutState.step === 2 && renderPaymentStep()}
        {checkoutState.step === 3 && renderReviewStep()}
      </div>
    </div>
  );
};

export default CheckoutPage; 