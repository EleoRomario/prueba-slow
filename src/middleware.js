import { NextResponse } from 'next/server'

export function middleware(request) {
  const auth = request.cookies.get('auth')?.value
  console.log('🚀 ~ file: middleware.js:8 ~ middleware ~ auth:', auth)
  try {
    if (!auth) return NextResponse.redirect(new URL('/auth', request.url))
    return NextResponse.redirect(new URL('/propiedades', request.url))
  } catch (error) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}

export const config = {
  matcher: ['/'],
}
