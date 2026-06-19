import AddToCartButton from './AddToCartButton';

export default async function ProductDetail({ params }) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`);
  const product = await res.json();

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <img src={product.images[0]} alt={product.title} style={{ maxWidth: '400px', borderRadius: '8px' }} />
      <div>
        <h2>{product.title}</h2>
        <p style={{ color: '#2ed573', fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</p>
        <p>{product.description}</p>
        
        {}
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}