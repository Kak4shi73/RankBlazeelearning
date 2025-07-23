import React, { createContext, useContext, useEffect, useState } from 'react';
import { Course } from '../types';
import { featuredCourses } from '../data/courses';

interface CartItem extends Course {
  addedAt: Date;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (courseId: string) => void;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  isInCart: (courseId: string) => boolean;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('rankblaze_cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart.map((item: CartItem) => ({
          ...item,
          addedAt: new Date(item.addedAt)
        })));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('rankblaze_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (courseId: string) => {
    const course = featuredCourses.find(c => c.id === courseId);
    if (course && !isInCart(courseId)) {
      const cartItem: CartItem = {
        ...course,
        addedAt: new Date()
      };
      setCartItems(prev => [...prev, cartItem]);
    }
  };

  const removeFromCart = (courseId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== courseId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (courseId: string) => {
    return cartItems.some(item => item.id === courseId);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
  const cartCount = cartItems.length;

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
    cartTotal,
    cartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};