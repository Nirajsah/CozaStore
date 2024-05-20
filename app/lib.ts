import { SessionOptions } from 'iron-session'
import { jwtDecode, JwtPayload } from 'jwt-decode'

export interface SessionData {
  userId: number | undefined
  username?: string
  isLoggedIn: boolean
}

export const sessionOptions: SessionOptions = {
  cookieName: 'coza-session',
  password: process.env.SESSION_SECRET!,
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  },
}

// const decoded = jwtDecode<JwtPayload>(token)
