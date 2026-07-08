import { NextResponse } from 'next/server';

//const token = request.cookies.get('token');
//if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

export async function DELETE(request, { params }) {
const token = request.cookies.get('token');
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  
const { id } = params;
  await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, { method: 'DELETE' });
  return NextResponse.json({ success: true });
}

export async function PUT(request, { params }) {
const token = request.cookies.get('token');
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

const { id } = params;
  const body = await request.json();
  
  const updatedProduct = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then(r => r.json());

  return NextResponse.json(updatedProduct);
}