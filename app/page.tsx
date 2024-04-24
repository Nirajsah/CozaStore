'use client'
import React, { useEffect } from 'react'
import Body from './components/Body'
import Navbar from './components/Navbar'
import { useUser } from './context/UserProvider'

export default function Home() {
  const { userId, setUser } = useUser()

  useEffect(() => {
    if (userId) {
      const getUser = async ({ userId }: { userId: number }) => {
        try {
          const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
          })
          const jsonData = await response.json()
          return jsonData.result
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
      getUser({ userId }).then((res) => {
        setUser(res)
      })
    }
  }, [userId])

  return (
    <main className="flex flex-col background-color items-center justify-center">
      <div className="max-w-[1320px] h-full">
        <div className="w-full h-full">
          <Navbar />
          <Body />
        </div>
      </div>
    </main>
  )
}
