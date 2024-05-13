'use client'
import { get } from 'http'
import React, { ReactNode, useContext } from 'react'

export const UserContext = React.createContext<any | null>(null)
export default function UserProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = React.useState<number>()
  const [user, setUser] = React.useState<any>()

  const contextValue = {
    user,
    userId,
    setUser,
    setUserId,
  }
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export const useUser = () => {
  const userContext = useContext(UserContext)
  if (!userContext) {
    return {}
  }
  return userContext
}
