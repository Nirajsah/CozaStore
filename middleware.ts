import { NextResponse } from 'next/server'

export default function middleware(req: { cookies: any; url: string }) {
  const URL = 'http://localhost:3000'
  const verifyAdmin = req.cookies.get('admin-session')
  const verifyUser = req.cookies.get('coza-session')

  const url = req.url

  if (!verifyAdmin && url.includes('/admin/category')) {
    return NextResponse.redirect(`${URL}/admin`)
  }

  if (verifyAdmin && url === `${URL}/admin`) {
    return NextResponse.redirect(`${URL}/admin/category`)
  }

  if (!verifyUser && url.includes('/cart')) {
    return NextResponse.redirect(`${URL}`)
  }
}
