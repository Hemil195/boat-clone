import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products';
import { useAuth } from '@/context/AuthContext'; // Import the auth context

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth(); // Get the current user
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    if (!user) return [];
    const savedWishlist = localStorage.getItem(`wishlist_${user.id}`);
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Update wishlist when user changes
  useEffect(() => {
    if (user) {
      const savedWishlist = localStorage.getItem(`wishlist_${user.id}`);
      setWishlist(savedWishlist ? JSON.parse(savedWishlist) : []);
    } else {
      setWishlist([]); // Clear wishlist when user logs out
    }
  }, [user]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  const addToWishlist = (product: Product) => {
    if (!user) {
      // You might want to show a toast or redirect to login
      return;
    }
    setWishlist(prev => [...prev, product]);
  };

  const removeFromWishlist = (productId: number) => {
    if (!user) return;
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: number) => {
    if (!user) return false;
    return wishlist.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}; 