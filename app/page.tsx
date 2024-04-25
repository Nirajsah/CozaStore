'use client'
import React, { useEffect } from 'react'
import Body from './components/Body'
import Navbar from './components/Navbar'
import { useUser } from './context/UserProvider'

export default function Home() {
  const { userId, setUserId, setUser } = useUser()

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        })
        const jsonData = await response.json()
        return jsonData
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getUser().then((data) => {
      setUser(data.result)
    })
  }, [userId])

  useEffect(() => {
    const getUserId = async () => {
      try {
        const response = await fetch('/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const jsonData = await response.json()
        return jsonData
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getUserId().then((data) => {
      setUserId(data.data.userId)
    })
  }, [])

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
