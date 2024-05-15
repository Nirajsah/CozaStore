'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { push } = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const jsonData = await response.json()
        if (jsonData.message === 'Unauthorized') {
          push('/admin')
        } else if (jsonData.message === 'Authenticated') {
          console.log('Authenticated')
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return <main>{children}</main>
}
