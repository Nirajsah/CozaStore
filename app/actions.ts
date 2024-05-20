'use server'

import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { SessionData, sessionOptions } from './lib'

export const getSession = async () => {
  const session: SessionData = await getIronSession(cookies(), sessionOptions)

  if (!session.isLoggedIn) {
    session.isLoggedIn = false
  }
  return session
}
