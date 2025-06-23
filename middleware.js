import { NextResponse } from 'next/server';

export function middleware(request) {
  const adminCookie = request.cookies.get('admin');

  if (request.nextUrl.pathname.startsWith('/admin') && !adminCookie) {
    return NextResponse.redirect(new URL('/admin-login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
