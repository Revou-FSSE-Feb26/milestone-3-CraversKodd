import Link from 'next/link';

// Requirement: Passes and handles props (cartCount)
export default function Layout({ children, cartCount }) {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#1a1a1a', color: 'white' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>
          RevoShop
        </Link>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          {/* Requirement: Uses Link from next/link for client-side navigation */}
          <Link href="/">Home</Link>
          <Link href="/promotions">Promotions</Link>
          <Link href="/faq">FAQ</Link>
          <button style={{ background: '#ff4757', border: 'none', color: 'white', padding: '0.5rem', borderRadius: '4px' }}>
            Cart ({cartCount})
          </button>
        </nav>
      </header>
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {children}
      </main>
    </div>
  );
}