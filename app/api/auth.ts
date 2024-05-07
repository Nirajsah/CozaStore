import jwt, { Secret } from 'jsonwebtoken'

export const verifyAuthToken = <T extends string>(accessToken: T) => {
  const accessTokenKey: Secret = process.env.ACCESS_TOKEN_KEY as Secret
  try {
    const payload = jwt.verify(accessToken, accessTokenKey)
    return payload
  } catch (error) {
    console.log('error:', error)
  }
}
export const verifyAuthRefToken = <T extends string>(refreshToken: T) => {
  const refreshTokenKey: Secret = process.env.REFRESH_TOKEN_KEY as Secret
  try {
    const payload = jwt.verify(refreshToken, refreshTokenKey)
    return payload
  } catch (error) {
    throw error
  }
}
