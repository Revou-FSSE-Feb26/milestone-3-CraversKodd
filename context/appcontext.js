"use client";

import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('revo_cart');
    if (savedCart) setCart(JSON.parse(savedCart));

    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (token) setUser({ isAuthenticated: true });
  }, []);

  useEffect(() => {
    localStorage.setItem('revo_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <AppContext.Provider value={{ cart, addToCart, user }}>
      {children}
    </AppContext.Provider>
  );
}