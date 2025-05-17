export const runtime = 'nodejs'
import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/libs/db'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    await connectDB()

    const { name, username, password } = await req.json()

    if (!name || !username || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const newUser = await User.create({
      name,
      username,
      password: hashedPassword,
    })

    // Return user info (excluding password)
    return NextResponse.json({
      user: {
        id: newUser._id,
        name: newUser.name,
        username: newUser.username,
      }
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}