'use client';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  // 1. Fetching (GET)
  useEffect(() => {
    fetch('/api/product')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 10)))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  // 2. Form Validation & Creation (POST)
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!title || price <= 0) {
      return alert('Validation Error: Title is required and price must be greater than 0.');
    }

    const res = await fetch('/api/product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, price: Number(price), description: 'New', categoryId: 1, images: ['https://placeimg.com/640/480/any'] })
    });

    if (res.ok) {
      const newProduct = await res.json();
      setProducts([newProduct, ...products]); // Dynamic UI Update
      setTitle('');
      setPrice('');
    }
  };

  // 3. Deletion (DELETE)
  const handleDelete = async (id) => {
    const res = await fetch(`/api/product/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // 4. Update (PUT)
  const handleUpdate = async (id) => {
    const newPrice = prompt('Enter new price:');
    if (!newPrice || isNaN(newPrice)) return alert('Invalid price');

    const res = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: Number(newPrice) })
    });

    if (res.ok) {
      const updated = await res.json();
      setProducts(products.map(p => p.id === id ? updated : p));
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      {/* Form Validation */}
      <form onSubmit={handleAddProduct} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h3>Add New Product</h3>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ marginRight: '1rem' }} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required min="1" style={{ marginRight: '1rem' }} />
        <button type="submit">Add Product</button>
      </form>

      <table style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>
                <button onClick={() => handleUpdate(product.id)} style={{ marginRight: '1rem', cursor: 'pointer' }}>Edit Price</button>
                <button onClick={() => handleDelete(product.id)} style={{ color: 'white', background: 'red', cursor: 'pointer', border: 'none', padding: '4px 8px' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}