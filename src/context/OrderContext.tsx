import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Product } from '@/data/products';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';

interface OrderItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phone: string;
  };
  paymentMethod: {
    type: 'card' | 'upi' | 'netbanking';
    details: {
      cardNumber?: string;
      cardName?: string;
      expiryDate?: string;
      cvv?: string;
      upiId?: string;
      bankName?: string;
      accountNumber?: string;
      ifscCode?: string;
    };
  };
  orderNotes?: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (orderData: any) => Promise<void>;
  getOrders: () => Promise<void>;
  getOrder: (orderId: string) => Order | undefined;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, login } = useAuth();
  const { toast } = useToast();
  const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:10000';
  const [orders, setOrders] = useState<Order[]>(() => {
    if (!user) return [];
    const savedOrders = localStorage.getItem(`orders_${user.id}`);
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Update orders when user changes
  useEffect(() => {
    if (user) {
      const savedOrders = localStorage.getItem(`orders_${user.id}`);
      setOrders(savedOrders ? JSON.parse(savedOrders) : []);
    } else {
      setOrders([]);
    }
  }, [user]);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    if (user) {
      localStorage.setItem(`orders_${user.id}`, JSON.stringify(orders));
    }
  }, [orders, user]);

  const addOrder = async (orderData: any) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/orders`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      // Update the user context with the new totalOrders count
      if (response.data.user) {
        login({
          ...user,
          ...response.data.user,
        });
      }

      setOrders(prevOrders => [response.data.order, ...prevOrders]);
      toast({
        title: "Order Placed Successfully",
        description: "Your order has been placed and is being processed.",
      });
    } catch (error: any) {
      toast({
        title: "Error Placing Order",
        description: error.response?.data?.message || 'Failed to place order. Please try again.',
        variant: "destructive",
      });
      throw error;
    }
  };

  const getOrders = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/orders`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      setOrders(response.data);
    } catch (error: any) {
      toast({
        title: "Error Fetching Orders",
        description: error.response?.data?.message || 'Failed to fetch orders. Please try again.',
        variant: "destructive",
      });
    }
  };

  const getOrder = (orderId: string) => {
    return orders.find(order => order.id === orderId);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId
          ? { ...order, status, updatedAt: new Date().toISOString() }
          : order
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        getOrders,
        getOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}; 