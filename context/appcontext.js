"use client";

import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('revo_cart');
    if (savedCart) setCart(JSON.parse(savedCart));

    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (token) setUser({ isAuthenticated: true });
    setIsLoaded(true);  
  }, []);

  useEffect(() => {
    if (!isLoaded) return;  
    localStorage.setItem('revo_cart', JSON.stringify(cart));
  }, [cart, isLoaded]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        // untuk saat roduk sudah ada = naikkan quantity
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item );
      }

      // Untuk roduk baru = tambahkan dengan quantity (1)
      return [...prev, { ...product, quantity: 1 }];
    });
  };


  //Kurangi quantity (hapus jika quantity mencapai 0)
  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev
        .map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)           // ← hapus otomatis jika qty = 0
    );
  };


  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };
  
  return (
    <AppContext.Provider value={{ cart, user, addToCart, decreaseQuantity, removeFromCart, clearCart }}>
      {children}
    </AppContext.Provider>
  );
}