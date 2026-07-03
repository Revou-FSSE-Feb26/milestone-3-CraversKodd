export default function Checkout({ cart }) {
  const total = cart?.reduce((sum, item) => sum + item.price, 0) || 0;

  return (
    <div>
      <h1>Checkout Securely</h1>
      {cart?.length === 0 ? <p>Your cart is empty.</p> : (
        <div>
          <ul>
            {cart.map((item, idx) => <li key={idx}>{item.title} - ${item.price}</li>)}
          </ul>
          <h2>Total: ${total}</h2>
          <button style={{ background: '#2ed573', padding: '1rem', border:'none', color:'white' }}>Pay Now</button>
        </div>
      )}
    </div>
  );
}