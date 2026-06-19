export default async function handler(req, res) {
  const { id } = req.query;
  const API_URL = `https://api.escuelajs.co/api/v1/products/${id}`;

  try {
    if (req.method === 'PUT') {
      const updatedProduct = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }).then(r => r.json());
      
      return res.status(200).json(updatedProduct);
    } 
    
    if (req.method === 'DELETE') {
      const isDeleted = await fetch(API_URL, { method: 'DELETE' }).then(r => r.json());
      return res.status(200).json({ success: isDeleted });
    }

    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}