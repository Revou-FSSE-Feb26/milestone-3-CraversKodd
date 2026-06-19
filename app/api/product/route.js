import { NextResponse } from 'next/server';

export async function GET() {
  const data = await fetch('https://api.escuelajs.co/api/v1/products').then(r => r.json());
  return NextResponse.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const newProduct = await fetch('https://api.escuelajs.co/api/v1/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then(r => r.json());
  
  return NextResponse.json(newProduct, { status: 201 });
}