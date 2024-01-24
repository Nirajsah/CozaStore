'use client'
import React from 'react'
import Body from './components/Body'

export default function Home() {
    return (
        <main className="flex flex-col background-color items-center justify-center">
            <div className="max-w-[1320px] h-full">
                <div className="w-full h-full">
                    <Body />
                </div>
            </div>
        </main>
    )
}
