import { eq } from 'drizzle-orm'
import jwt, { Secret } from 'jsonwebtoken'
import { db } from '../db/database'
import { users, User } from '../db/schema/schema'

type TokenResponse = {
  accessToken: string
  refreshToken: string
}
export const generateJWT = ({
  user,
}: {
  user: User
}): Promise<TokenResponse> => {
  try {
    const payload = {
      userId: user.userId,
      username: user.username,
    }
    const accessTokenKey: Secret = process.env.ACCESS_TOKEN_KEY as Secret
    const refreshTokenKey: Secret = process.env.REFRESH_TOKEN_KEY as Secret
    const accessToken = jwt.sign(payload, accessTokenKey, { expiresIn: '5m' })
    const refreshToken = jwt.sign(payload, refreshTokenKey, {
      expiresIn: '30m',
    })
    return Promise.resolve({
      accessToken,
      refreshToken,
    })
  } catch (error) {
    throw new Error('Error inserting user')
  }
}

export const verifyRefreshToken = <T extends string>(refreshToken: T) => {
  const refreshTokenKey: Secret = process.env.REFRESH_TOKEN_KEY as Secret
  try {
    const user: any = jwt.verify(refreshToken, refreshTokenKey)
    const token = generateJWT(user)
    return token
  } catch (error) {
    throw error
  }
}

export const userExist = async ({
  email,
}: {
  email: string
}): Promise<boolean | Response> => {
  try {
    const [res] = await db.select().from(users).where(eq(users.email, email))
    if (res === undefined) {
      return true
    } else {
      return false
    }
  } catch (error) {
    return Response.json({ msg: error })
  }
}
