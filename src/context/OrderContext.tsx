import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Product } from '@/data/products';

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
  addOrder: (order: Omit<Order, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => void;
  getOrder: (orderId: string) => Order | undefined;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
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

  const addOrder = (orderData: Omit<Order, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => {
    if (!user) return;

    const newOrder: Order = {
      ...orderData,
      id: `ORD${Date.now()}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setOrders(prevOrders => [...prevOrders, newOrder]);
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