import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.url !== '/') {
    return NextResponse.redirect(new URL('/'));
  }
  return NextResponse.redirect(new URL('/'));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
};
