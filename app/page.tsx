'use client'
import React, { useEffect } from 'react'
import Body from './components/Body'
import Navbar from './components/Navbar'

export default function Home() {
  const getUser = async ({ userId }: { userId: string }) => {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      })
      const jsonData = await response.json()
      console.log(jsonData)
      return jsonData
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  useEffect(() => {
    const userId = '27'
    const call = async () => {
      await getUser({ userId })
    }
    call()
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
