'use client'
import React, { useEffect } from 'react'
import Body from './components/Body'
import Navbar from './components/Navbar'

export default function Home() {
<<<<<<< HEAD
    return (
        <main className="flex flex-col background-color items-center justify-center">
            <div className="max-w-[1320px] h-full">
                <div className="w-full h-full">
                    <Body />
                </div>
            </div>
        </main>
    )
=======
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
>>>>>>> origin/main
}
