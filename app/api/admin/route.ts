import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()
    if (username === 'admin' && password === 'admin') {
      const secret = process.env.ACCESS_TOKEN_KEY || ''
      const token = sign(
        {
          username,
        },
        secret,
        {
          expiresIn: '1h',
        }
      )

      const serialized = serialize('accessToken', token, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 60 * 60,
        sameSite: 'strict',
      })
      const response = {
        message: 'Authenticated',
      }
      return Response.json(response, {
        status: 200,
        headers: {
          'Set-Cookie': serialized,
        },
      })
    } else {
      const response = {
        message: 'Login Failed!',
      }
      return Response.json(response, {
        status: 401,
      })
    }
  } catch (error) {
    return Response.json({ message: 'Login Failed!' }, { status: 401 })
  }
}

export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('accessToken')
  if (!token) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 })
  }
  return Response.json({ message: 'Authenticated' }, { status: 200 })
}

export const authToken = ({ username }: { username: string }) => {
  const secret = process.env.ACCESS_TOKEN_KEY || ''
  const token = sign(
    {
      username,
    },
    secret,
    {
      expiresIn: '1h',
    }
  )

  const serialized = serialize('accessToken', token, {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 60 * 60,
    sameSite: 'strict',
  })
  const response = {
    message: 'Authenticated',
  }
  return Response.json(response, {
    status: 200,
    headers: {
      'Set-Cookie': serialized,
    },
  })
}
