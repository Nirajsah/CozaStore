import { NextResponse } from 'next/server'

export default function middleware(
  req: { cookies: any; url: string },
  res: Response
) {
  const verifyAdmin = req.cookies.get('accessToken')
  const verifyUser = req.cookies.get('access_token')

  const url = req.url

  if (!verifyAdmin && url.includes('/admin/category')) {
    return NextResponse.redirect('http://localhost:3000/admin')
  }

  if (verifyAdmin && url === 'http://localhost:3000/admin') {
    return NextResponse.redirect('http://localhost:3000/admin/category')
  }

  if (!verifyUser && url.includes('/cart')) {
    return NextResponse.redirect('http://localhost:3000')
  }
}
