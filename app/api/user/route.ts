import { users } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/app/db/database'

export async function POST(request: Request) {
  const { userId } = await request.json()
  try {
    const [res] = await db.select().from(users).where(eq(users.userId, userId))
    if (res) {
      return Response.json(res)
    } else {
      throw Error('User Not Found!')
    }
  } catch (error) {
    return Response.json({ Error: 'User Not Found!' })
  }
}
