export default function Loading() {
  return (
    <div>
      <h1>Latest Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{
            border: '1px solid #eee',
            borderRadius: '8px',
            overflow: 'hidden',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}>
            {/* Bayangan gambar */}
            <div style={{ width: '100%', height: '200px', background: '#e0e0e0' }} />
            {/* Bayangan teks */}
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ height: '16px', background: '#e0e0e0', borderRadius: '4px', width: '80%' }} />
              <div style={{ height: '14px', background: '#e0e0e0', borderRadius: '4px', width: '50%' }} />
              <div style={{ height: '32px', background: '#e0e0e0', borderRadius: '4px', width: '40%', marginTop: '8px' }} />
            </div>
          </div>
        ))}
      </div>

      {/* CSS untuk efek kilap */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}