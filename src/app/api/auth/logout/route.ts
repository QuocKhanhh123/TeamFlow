export const runtime = 'edge' // Có thể dùng Edge, vì không cần DB

import { NextResponse } from 'next/server'
import { serialize } from 'cookie'

export async function POST() {
  const res = NextResponse.json({ message: 'Logged out' })

  // Xóa cookie bằng cách đặt maxAge = 0
  res.headers.set(
    'Set-Cookie',
    serialize('token', '', {
      httpOnly: true,
      path: '/',
      maxAge: 0,
    })
  )

  return res
}
