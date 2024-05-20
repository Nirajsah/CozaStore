import { SessionOptions } from 'iron-session'

export interface SessionData {
  userId: number
  username?: string
  email?: string
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
