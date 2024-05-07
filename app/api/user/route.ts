import { users } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/app/db/database'
import { cookies } from 'next/headers'
import { verifyAuthRefToken, verifyAuthToken } from '../auth'
import { generateJWT } from '@/app/auth/auth'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { userId } = await request.json()
  try {
    const [res] = await db.select().from(users).where(eq(users.userId, userId))
    if (res.userId === userId) {
      return Response.json({ result: res, message: 'success' })
    } else {
      throw Error('User Not Found!')
    }
  } catch (error) {
    return Response.json({ Error: 'User Not Found!' })
  }
}

export async function GET() {
  const cookieStore = cookies()
  const accessToken: any = cookieStore.get('access_token')?.value.toString()
  const refreshToken: any = cookieStore.get('refresh_token')?.value.toString()
  const payload = verifyAuthToken(accessToken)
  if (!accessToken) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }
  if (payload === undefined) {
    const refreshPayload = verifyAuthRefToken(refreshToken)
    if (refreshPayload === undefined) {
      return Response.json({ message: 'Unauthorized' }, { status: 401 })
    } else {
      if (typeof refreshPayload === 'object' && refreshPayload !== null) {
        console.log('refresh:', refreshPayload)
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          await generateJWT({
            userId: refreshPayload.userId,
          })
        const response = NextResponse.json({
          status: 200,
          message: 'success',
          headers: { 'content-type': 'application/json' },
        })
        response.cookies.set({
          name: 'access_token',
          value: newAccessToken,
          path: '/',
        })
        response.cookies.set({
          name: 'refresh_token',
          value: newRefreshToken,
          path: '/',
        })
        return response
      }
    }
  } else if (payload instanceof Error) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }
  return Response.json(
    { data: payload, message: 'Authenticated' },
    { status: 200 }
  )
}
