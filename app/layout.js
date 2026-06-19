import { AppProvider } from '../context/AppContext';
import Link from 'next/link';
import '../styles/globals.css';

export const metadata = {
  title: 'RevoShop',
  description: 'A modern e-commerce built with Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#1a1a1a', color: 'white' }}>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>
              RevoShop
            </Link>
            <nav style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/">Home</Link>
              <Link href="/admin">Admin</Link>
              <Link href="/checkout">Checkout</Link>
            </nav>
          </header>
          <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}