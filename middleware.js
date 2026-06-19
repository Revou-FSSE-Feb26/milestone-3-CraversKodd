import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;

  // If trying to access checkout without a token, redirect to login
  if (req.nextUrl.pathname.startsWith('/checkout') && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout'], // Apply middleware only to checkout
};