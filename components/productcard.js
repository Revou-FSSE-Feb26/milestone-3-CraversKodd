import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p style={{ color: '#2ed573', fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
      <Link href={`/product/${product.id}`}>
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>View Details</button>
      </Link>
    </div>
  );
}