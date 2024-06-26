import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import React from 'react'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'CozaStore',
  description: 'Shop Your Favorite Products',
  icons: {
    icon: '/favicon.ico',
  },
}

const ppneuemontreal = localFont({
  src: [
    {
      path: '../public/fonts/ppneuemontreal-medium.woff',
      weight: '400',
    },
  ],
  variable: '--font-ppneuemontreal',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className="webkit-font-smoothing font-ppneue">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
