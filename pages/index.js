import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div>
      <h1>Latest Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}