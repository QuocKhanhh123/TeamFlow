export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyAccessToken } from '@/libs/auth'
import { connectDB } from '@/libs/db'
import User from '@/models/User'

export async function GET() {
  await connectDB()
  const cookieStore = await cookies()  // ✅ không cần await nếu bạn ở Node.js runtime (mặc định)

  const token = cookieStore.get('token')?.value
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const decoded = await verifyAccessToken(token) as { userId: string }
    const user = await User.findById(decoded.userId).select('-password')
    return NextResponse.json(user)
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}
