import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('john@mail.com'); // Platzi test email
  const [password, setPassword] = useState('changeme'); // Platzi test password
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      // Store token in cookies so Middleware can read it
      document.cookie = `token=${data.access_token}; path=/`;
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