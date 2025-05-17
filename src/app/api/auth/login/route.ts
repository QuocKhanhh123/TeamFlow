export const runtime = 'nodejs'
import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/libs/db'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { signAccessToken } from '@/libs/auth'
import { serialize } from 'cookie'

export async function POST(req: NextRequest) {
  await connectDB()
  const { username, password } = await req.json()
  const user = await User.findOne({ username })

  if (!user || !(await bcrypt.compare(password, user.password)))
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })

  const token = await signAccessToken(user._id.toString())

  const res = NextResponse.json({ message: 'Login successful' })
  res.headers.set(
    'Set-Cookie',
    serialize('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 15,
    })
  )
  return res
}
