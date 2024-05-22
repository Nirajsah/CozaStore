'use server'

import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { SessionData, sessionOptions } from './lib'
import { redirect } from 'next/navigation'
import { generateJWT, userExist, verifyRefreshToken } from './auth/auth'
import { passwordCheck } from './api/user/login/route'
import { users } from './db/schema/schema'
import { eq } from 'drizzle-orm'
import { db } from './db/database'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import { Secret } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'

export const getSession = async () => {
  const session: SessionData = {
    userId: undefined,
    username: '',
    isLoggedIn: false,
  }

  const token = cookies().get('coza-session')
  if (token !== undefined) {
    const verify: { userId: number; username: string } = jwtDecode(token.value)
    session.userId = verify.userId
    session.username = verify.username
    session.isLoggedIn = true
  }
  return session
}

export const login = async (formData: FormData) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const res = await userExist({ email })
  if (res === false) {
    const user = await passwordCheck({ email, password })
    if (user === true) {
      const [user] = await db.select().from(users).where(eq(users.email, email))
      const { accessToken } = await generateJWT({
        user,
      })

      cookies().set('coza-session', accessToken, { httpOnly: true })
      redirect('/')
    }
  }
}

export const adminLogin = async (formData: FormData) => {
  const email = formData.get('username') as string
  const password = formData.get('password') as string
  if (email === 'admin' && password === 'admin') {
    const payload = {
      email,
      password,
    }
    const accessTokenKey: Secret = process.env.ACCESS_TOKEN_KEY as Secret
    const accessToken = jwt.sign(payload, accessTokenKey, { expiresIn: '15m' })
    cookies().set('admin-session', accessToken, { httpOnly: true })
    redirect('/admin/category')
  } else {
    redirect('/admin')
  }
}
