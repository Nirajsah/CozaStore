import { users } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/app/db/database'
import bcrypt from 'bcryptjs'
import { generateJWT, userExist } from '@/app/auth/auth'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    const res = await userExist({ email })
    if (res === false) {
      const user = await passwordCheck({ email, password })
      if (user === true) {
        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, email))
        const { accessToken, refreshToken, userId } = await generateJWT({
          userId: user.userId,
        })

        const accessTokenCookie = `Bearer ${accessToken}; Path=/; HttpOnly; Secure;`
        const refreshTokenCookie = `Bearer ${refreshToken}; Path=/; HttpOnly; Secure;`

        const responseHeaders = new Headers()
        responseHeaders.set('Authorization', accessTokenCookie)
        responseHeaders.set('Set-Cookie', refreshTokenCookie)

        return Response.json(
          { accessToken, refreshToken, userId, message: 'success' },
          {
            status: 200,
            headers: responseHeaders,
          }
        )
      } else {
        return Response.json({ message: 'Wrong Password!' })
      }
    } else {
      return Response.json({ msg: 'User not found!' }, { status: 404 })
    }
  } catch (error) {
    console.error('Error inserting user:', error)
    return new Response('Error inserting user', { status: 500 })
  }
}

const passwordCheck = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<boolean> => {
  try {
    const [userPassword] = await db
      .select({ password: users.password })
      .from(users)
      .where(eq(users.email, email))

    if (userPassword) {
      const result = await bcrypt.compare(password, userPassword.password)
      return result
    } else {
      return false
    }
  } catch (error) {
    console.error('Error inserting user:', error)
    throw new Error('Error inserting user')
  }
}
