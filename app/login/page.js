'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('john@mail.com'); // Platzi default test email
  const [password, setPassword] = useState('changeme'); // Platzi default test password
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // 1. bagian untuk panggil API Route lokal, bukan API Platzi langsung
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/checkout');
    } else {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Login to Checkout</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" style={{ padding: '1rem', background: '#1a1a1a', color: 'white' }}>Login</button>
    </form>
  );
}