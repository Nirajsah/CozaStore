import { generateJWT, userExist } from '@/app/auth/auth'
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
    const res = await userExist({ email })
    if (res === true) {
      const user = await createUser({ username, password, email })
      return Response.json({ data: user, message: 'success' })
    } else {
      return Response.json({ message: 'User already exist' })
    }
  } catch (error) {
    return Response.json({ message: 'Error inserting user' }, { status: 500 })
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
