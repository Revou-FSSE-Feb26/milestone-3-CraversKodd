'use client';

import { useContext } from 'react';
import { AppContext } from '../../context/appcontext';

export default function Checkout() {
  const { cart, removeFromCart, clearCart } = useContext(AppContext);
  const total = cart?.reduce((sum, item) => sum + item.price, 0) || 0;

 if (cart.length === 0) return <p>your cart is empty.</p>;

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span>{item.title}</span>
            <span>x{item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', cursor: 'pointer' }}>
              Clear
            </button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button
        style={{ background: '#2ed573', padding: '1rem', border: 'none', color: 'white', cursor: 'pointer' }}
        onClick={() => {
          clearCart();           // ← kosongkan cart setelah bayar
          alert('payment successful!');
        }}
      > Pay Now </button>
    </div>
  );
}