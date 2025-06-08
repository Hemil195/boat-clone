import React, { useEffect } from 'react';
import { useOrder } from '@/context/OrderContext';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IndianRupee, Package, Truck, CheckCircle, XCircle } from 'lucide-react';
import { format } from 'date-fns';

const OrdersPage = () => {
  const { orders, getOrders } = useOrder();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    getOrders();
  }, [user]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Package className="h-5 w-5 text-yellow-500" />;
      case 'processing':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      
      {orders.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-gray-500">You haven't placed any orders yet.</p>
            <Button 
              onClick={() => navigate('/')} 
              className="mt-4 bg-boat-red hover:bg-boat-red-dark"
            >
              Start Shopping
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id || Math.random().toString()} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg">
                      Order #{order.id ? order.id.slice(-6).toUpperCase() : 'N/A'}
                    </CardTitle>
                    <p className="text-sm text-gray-500">
                      Placed on {order.createdAt ? format(new Date(order.createdAt), 'PPP') : 'N/A'}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full flex items-center space-x-2 ${getStatusColor(order.status || 'pending')}`}>
                    {getStatusIcon(order.status || 'pending')}
                    <span className="capitalize">{order.status || 'pending'}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-2">
                    {order.items?.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-medium">
                          <IndianRupee className="inline h-4 w-4" />
                          {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-bold">
                      <p>Total Amount:</p>
                      <p className="text-lg">
                        <IndianRupee className="inline h-5 w-5" />
                        {order.totalAmount?.toFixed(2) || '0.00'}
                      </p>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  {order.shippingAddress && (
                    <div className="border-t pt-4">
                      <h3 className="font-medium mb-2">Shipping Address:</h3>
                      <p>{order.shippingAddress.fullName}</p>
                      <p>{order.shippingAddress.address}</p>
                      <p>
                        {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.postalCode}
                      </p>
                      <p>{order.shippingAddress.country}</p>
                      <p>Phone: {order.shippingAddress.phone}</p>
                    </div>
                  )}

                  {/* Payment Method */}
                  {order.paymentMethod && (
                    <div className="border-t pt-4">
                      <h3 className="font-medium mb-2">Payment Method:</h3>
                      <p className="capitalize">{order.paymentMethod.type}</p>
                      {order.paymentMethod.type === 'card' && order.paymentMethod.details?.cardNumber && (
                        <p>Card ending in {order.paymentMethod.details.cardNumber.slice(-4)}</p>
                      )}
                      {order.paymentMethod.type === 'upi' && order.paymentMethod.details?.upiId && (
                        <p>UPI ID: {order.paymentMethod.details.upiId}</p>
                      )}
                      {order.paymentMethod.type === 'netbanking' && order.paymentMethod.details?.bankName && (
                        <p>Bank: {order.paymentMethod.details.bankName}</p>
                      )}
                    </div>
                  )}

                  {/* Order Notes */}
                  {order.orderNotes && (
                    <div className="border-t pt-4">
                      <h3 className="font-medium mb-2">Order Notes:</h3>
                      <p className="text-gray-600">{order.orderNotes}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage; 