import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('access_token')?.value;
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/login') && token) {
    return NextResponse.redirect(new URL('/checkout', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout/:path*','login'], // untuk melindungi /checkout dan semua sub-rutenya
};                                       // dan mencegah user yang sudah login masuk ke hlmn logun