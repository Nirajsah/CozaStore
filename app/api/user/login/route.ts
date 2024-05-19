import { users } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/app/db/database'
import bcrypt from 'bcryptjs'
import { generateJWT, userExist } from '@/app/auth/auth'
import { NextResponse } from 'next/server'

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
        const { accessToken, refreshToken } = await generateJWT({
          userId: user.userId,
        })

        const response = NextResponse.json({
          status: 200,
          message: 'success',
          headers: { 'content-type': 'application/json' },
        })
        response.cookies.set({
          name: 'access_token',
          value: accessToken,
          path: '/',
        })
        response.cookies.set({
          name: 'refresh_token',
          value: refreshToken,
          path: '/',
        })
        return response
      } else {
        return Response.json({ message: 'Wrong Password!' })
      }
    } else {
      return Response.json({ msg: 'User not found!' }, { status: 404 })
    }
  } catch (error) {
    console.error('Error:', error)
    return new Response('Error user', { status: 500 })
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
    console.error('Error validating:', error)
    throw new Error('Error validating user')
  }
}
