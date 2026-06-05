import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

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