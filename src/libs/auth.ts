// libs/auth.ts (Edge Runtime compatible)

import { SignJWT, jwtVerify } from 'jose'

const encoder = new TextEncoder()

const ACCESS_SECRET = encoder.encode(process.env.ACCESS_TOKEN_SECRET!)
const REFRESH_SECRET = encoder.encode(process.env.REFRESH_TOKEN_SECRET!)

export async function signAccessToken(userId: string) {
  return await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('15m')
    .sign(ACCESS_SECRET)
}

export async function signRefreshToken(userId: string) {
  return await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(REFRESH_SECRET)
}

export async function verifyAccessToken(token: string): Promise<{ userId: string }> {
  const { payload } = await jwtVerify(token, ACCESS_SECRET)
  return payload as { userId: string }
}

export async function verifyRefreshToken(token: string): Promise<{ userId: string }> {
  const { payload } = await jwtVerify(token, REFRESH_SECRET)
  return payload as { userId: string }
}
