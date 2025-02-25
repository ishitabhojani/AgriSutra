import { NextResponse } from 'next/server';

export function middleware(req: { nextUrl: { pathname: string; }; cookies: { get: (arg0: string) => any; }; url: string | URL | undefined; }) {
  // Allow public routes like /login and /signup
  if (req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/signup')) {
    return NextResponse.next();
  }

  // Check if token exists in cookies (assumes token is stored in cookies)
  const token = req.cookies.get('token');
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}
