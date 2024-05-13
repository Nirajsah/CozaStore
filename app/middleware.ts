import { NextResponse } from 'next/server'
import { verifyAuthToken } from '@/app/api/auth'

const AUTH_PAGES = ['/login', '/register']

const isAuthPages = (url: any) =>
  AUTH_PAGES.some((page) => page.startsWith(url))

export async function middleware(request: any) {
  const { url, nextUrl, cookies } = request
  const { value: token } = cookies.get('access_token') ?? { value: null }

  const hasVerifiedToken = token && (await verifyAuthToken(token))
  const isAuthPageRequested = isAuthPages(nextUrl.pathname)

  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next()
      response.cookies.delete('access_token')
      response.cookies.delete('refresh_token')
      return response
    }

    const response = NextResponse.redirect(new URL(`/`, url))
    return response
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams)
    searchParams.set('next', nextUrl.pathname)

    const response = NextResponse.redirect(
      new URL(`/login?${searchParams}`, url)
    )
    response.cookies.delete('access_token')

    return response
  }

  return NextResponse.next()
}

export const config = { matcher: ['/login', '/panel/:path*'] }
