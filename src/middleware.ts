import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAccessToken } from './libs/auth'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const pathname = req.nextUrl.pathname

  if (pathname.startsWith('/dashboard')) {

    console.log(token)
    if (!token) return NextResponse.redirect(new URL('/login', req.url))

    try {
      await verifyAccessToken(token!)
      return NextResponse.next()
    } catch (err){
        console.log(err)
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
