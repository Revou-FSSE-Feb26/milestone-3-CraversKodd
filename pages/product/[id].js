import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { products } from '../../data/products';

export default function ProductDetail({ addToCart }) {
  // Requirement: Correctly handles route parameters in dynamic pages
  const router = useRouter();
  const { id } = router.query; 

  const [product, setProduct] = useState(null);

  // Requirement: Manages component state using useEffect
  useEffect(() => {
    if (id) {
      // Simulate fetching data based on the route parameter
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <img src={product.image} alt={product.name} style={{ maxWidth: '400px', borderRadius: '8px' }} />
      <div>
        <h2>{product.name}</h2>
        <p style={{ color: '#2ed573', fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button 
          onClick={() => addToCart(product)}
          style={{ background: '#1a1a1a', color: 'white', padding: '1rem 2rem', border: 'none', cursor: 'pointer', marginTop: '1rem' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}