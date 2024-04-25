import { users } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/app/db/database'
import { cookies } from 'next/headers'
import { verifyAuthRefToken, verifyAuthToken } from '../auth'
import { authToken } from '../admin/route'

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

export async function GET(request: Request) {
  const cookieStore = cookies()
  const accessToken: any = cookieStore.get('access_token')?.value.toString()
  const refreshToken: any = cookieStore.get('refresh_token')?.value.toString()
  if (!accessToken) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }
  const payload = verifyAuthToken(accessToken.toString())
  return Response.json(
    { data: payload, message: 'Authenticated' },
    { status: 200 }
  )
}
