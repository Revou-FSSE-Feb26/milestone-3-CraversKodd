import AddToCartButton from './AddToCartButton'; // You should extract the button to a Client Component

export default async function ProductDetail({ params }) {
  const { id } = await params;
  // `params.id` is automatically passed based on the folder name [id]
try { 
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
   if (!res.ok) {
      // Kalau produk tidak ditemukan (404) atau server error (500)
      return (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'red' }}>
          <h2>Produk tidak ditemukan</h2>
          <p>Produk dengan ID {id} tidak tersedia.</p>
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
        <h2>Terjadi Kesalahan</h2>
        <p>Tidak bisa memuat detail produk. Coba lagi nanti.</p>
      </div>
    );
  }
}