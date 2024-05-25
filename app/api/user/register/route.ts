import { generateJWT, userExist } from '@/app/auth/auth'
import { db } from '@/app/db/database'
import { users, User } from '@/app/db/schema/schema'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { username, password, email } = await request.json()
    const res = await userExist({ email })
    if (res === true) {
      const user: User | Error = await createUser({
        username,
        password,
        email,
      })
      if (user instanceof Error) {
        return Response.json(
          { message: 'Error inserting user' },
          { status: 500 }
        )
      }

      const { accessToken, refreshToken } = await generateJWT({
        user,
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
      return Response.json({ message: 'User already exist' })
    }
  } catch (error) {
    return Response.json({ message: 'Error inserting user' }, { status: 500 })
  }
}

export const createUser = async ({
  username,
  email,
  password,
}: any): Promise<User | Error> => {
  try {
    const hashedPassword: string = await bcrypt.hash(password, 10)
    const [user] = await db
      .insert(users)
      .values({
        username,
        email,
        password: hashedPassword,
      })
      .returning()
    return user
  } catch (error) {
    return error as Error
  }
}
