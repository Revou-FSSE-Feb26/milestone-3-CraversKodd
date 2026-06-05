import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/global.css'; // Assuming you put the CSS here

export default function App({ Component, pageProps }) {
  // Requirement: Manages state using useState
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