import { useState } from 'react';
import Layout from '../components/Layout';
import '../css/global.css';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import '../css/global.css';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  // Load cart from LocalStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('revo_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('revo_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.title} added!`);
  };

  return (
    <Layout cartCount={cart.length}>
      <Component {...pageProps} cart={cart} addToCart={addToCart} />
    </Layout>
  );
}

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <Layout cartCount={cart.length}>
      <Component {...pageProps} addToCart={addToCart} />
    </Layout>
  );
}