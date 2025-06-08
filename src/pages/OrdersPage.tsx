import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useOrder } from '@/context/OrderContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Truck, CheckCircle, XCircle } from 'lucide-react';

const OrdersPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { orders } = useOrder();

  if (!user) {
    navigate('/login');
    return null;
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Package className="w-5 h-5 text-yellow-500" />;
      case 'processing':
        return <Package className="w-5 h-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">My Orders</h1>
      {orders.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">You haven't placed any orders yet.</p>
          <Button onClick={() => navigate('/products')} className="mt-4">
            Start Shopping
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Order #{order.id}</CardTitle>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(order.status)}
                    <span className="capitalize">{order.status}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Placed on {formatDate(order.createdAt)}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Items</h3>
                    {order.items.map(item => (
                      <div key={item.product.id} className="flex justify-between py-2">
                        <span>{item.product.name}</span>
                        <span>₹{item.product.price * item.quantity}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>₹{order.totalAmount}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Shipping Address</h3>
                    <p>{order.shippingAddress.fullName}</p>
                    <p>{order.shippingAddress.address}</p>
                    <p>
                      {order.shippingAddress.city}, {order.shippingAddress.state}{' '}
                      {order.shippingAddress.postalCode}
                    </p>
                    <p>{order.shippingAddress.country}</p>
                    <p>{order.shippingAddress.phone}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Payment Method</h3>
                    {order.paymentMethod.type === 'card' && (
                      <>
                        <p>Card ending in {order.paymentMethod.details.cardNumber?.slice(-4)}</p>
                        <p>{order.paymentMethod.details.cardName}</p>
                      </>
                    )}
                    {order.paymentMethod.type === 'upi' && (
                      <p>UPI ID: {order.paymentMethod.details.upiId}</p>
                    )}
                    {order.paymentMethod.type === 'netbanking' && (
                      <>
                        <p>Bank: {order.paymentMethod.details.bankName}</p>
                        <p>Account ending in {order.paymentMethod.details.accountNumber?.slice(-4)}</p>
                      </>
                    )}
                  </div>

                  {order.orderNotes && (
                    <div>
                      <h3 className="font-semibold mb-2">Order Notes</h3>
                      <p>{order.orderNotes}</p>
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