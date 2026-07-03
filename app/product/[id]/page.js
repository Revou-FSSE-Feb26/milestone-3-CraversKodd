import AddToCartButton from './AddToCartButton';

export default async function ProductDetail({ params }) {
  const { id } = await params;

try { 
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
   if (!res.ok) {
      // untuk return 404 atau 500
      return (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'red' }}>
          <h2>Product not Found</h2>
          <p>Product with ID {id} not found.</p>
        </div>
      );
    }

  const product = await res.json();
   return (
      <div style={{ display: 'flex', gap: '2rem' }}>
        <img src={product.images?.[0]} alt={product.title} style={{ maxWidth: '400px', borderRadius: '8px' }} />
        <div>
          <h2>{product.title}</h2>
          <p style={{ color: '#2ed573', fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</p>
          <p>{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    );
} catch (err) {
 return (
      <div style={{ textAlign: 'center', padding: '4rem', color: 'red' }}>
        <h2>An error has occur</h2>
        <p>Cannot load product. Please try again later...</p>
      </div>
    );
  }
}