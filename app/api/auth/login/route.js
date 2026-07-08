import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    // 1. Ambil data dari request klien
    const body = await request.json();
    const { email, password } = body;

    // 2. Fetch ke endpoint login Platzi Fake Store API
    const platziRes = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await platziRes.json();

    // Jika Platzi menolak (kredensial salah)
    if (!platziRes.ok) {
      return NextResponse.json(
        { error: 'Email atau password salah' },
        { status: 401 }
      );
    }

    // 3. Set httpOnly cookie menggunakan next/headers
    // Token tidak bisa diakses via document.cookie di browser (mencegah XSS)
    cookies().set({
      name: 'access_token',
      value: data.access_token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Hanya HTTPS di production
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // Berlaku selama 1 hari (dalam detik)
    });

    return NextResponse.json({ success: true, message: 'Login berhasil' });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Terjadi kesalahan pada server' },
      { status: 500 }
    );
  }
}