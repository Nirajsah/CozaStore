import { generateJWT, userValidation } from '@/app/auth/jwt'
import { db } from '@/app/db/database'
import { users } from '@/app/db/schema/schema'
import bcrypt from 'bcryptjs'

type User = {
  username: string
  email: string
  password: string
}

export async function POST(request: Request) {
  try {
    const { username, password, email } = await request.json()
    const res = await userValidation({ email })
    if (res) {
      const user = await createUser({ username, password, email })
      return Response.json(user)
    }
  } catch (error) {
    console.error('Error inserting user:', error)
    return new Response('Error inserting user', { status: 500 })
  }
}

const createUser = async ({ username, email, password }: User) => {
  try {
    const hashedPassword: string = await bcrypt.hash(password, 10)
    const [user] = await db
      .insert(users)
      .values({
        username,
        email,
        password: hashedPassword,
      })
      .returning({ userId: users.userId })

    const { accessToken, refreshToken } = await generateJWT({
      userId: user.userId,
    })
    return { accessToken, refreshToken, userId: user.userId }
  } catch (error) {
    return new Response('Error inserting user', { status: 500 })
  }
}
