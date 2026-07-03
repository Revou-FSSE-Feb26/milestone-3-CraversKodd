// This is a Server Component! It fetches data on the server before sending HTML to the client.
import ProductCard from '../components/ProductCard';

export default async function Home() {
  // Fetching directly in the component
  const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12', {
    cache: 'no-store' // Ensures fresh data
  });
  
  if (!res.ok) return <h2 style={{ color: 'red' }}>Failed to load products.</h2>;
  
  const products = await res.json();

  return (
    <div>
      <h1>Latest Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}