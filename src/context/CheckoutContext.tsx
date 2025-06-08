import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface Address {
  fullName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface PaymentMethod {
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
}

interface CheckoutState {
  step: number;
  shippingAddress: Address | null;
  paymentMethod: PaymentMethod | null;
  orderNotes: string;
}

interface CheckoutContextType {
  checkoutState: CheckoutState;
  setShippingAddress: (address: Address) => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  setOrderNotes: (notes: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetCheckout: () => void;
  isStepValid: (step: number) => boolean;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [checkoutState, setCheckoutState] = useState<CheckoutState>({
    step: 1,
    shippingAddress: null,
    paymentMethod: null,
    orderNotes: '',
  });

  // Load saved checkout state from localStorage
  useEffect(() => {
    if (user) {
      const savedState = localStorage.getItem(`checkout_${user.id}`);
      if (savedState) {
        setCheckoutState(JSON.parse(savedState));
      }
    }
  }, [user]);

  // Save checkout state to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(`checkout_${user.id}`, JSON.stringify(checkoutState));
    }
  }, [checkoutState, user]);

  const setShippingAddress = (address: Address) => {
    setCheckoutState(prev => ({ ...prev, shippingAddress: address }));
  };

  const setPaymentMethod = (method: PaymentMethod) => {
    setCheckoutState(prev => ({ ...prev, paymentMethod: method }));
  };

  const setOrderNotes = (notes: string) => {
    setCheckoutState(prev => ({ ...prev, orderNotes: notes }));
  };

  const nextStep = () => {
    setCheckoutState(prev => ({ ...prev, step: prev.step + 1 }));
  };

  const prevStep = () => {
    setCheckoutState(prev => ({ ...prev, step: prev.step - 1 }));
  };

  const resetCheckout = () => {
    setCheckoutState({
      step: 1,
      shippingAddress: null,
      paymentMethod: null,
      orderNotes: '',
    });
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!checkoutState.shippingAddress;
      case 2:
        return !!checkoutState.paymentMethod;
      case 3:
        return true; // Review step is always valid
      default:
        return false;
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        checkoutState,
        setShippingAddress,
        setPaymentMethod,
        setOrderNotes,
        nextStep,
        prevStep,
        resetCheckout,
        isStepValid,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
} 