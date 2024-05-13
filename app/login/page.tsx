'use client'
import React from 'react'
import Link from 'next/link'
import LoginImage from '@/app/assets/login.webp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [msg, setMsg] = React.useState({ msg: '' })
  const [spinner, setSpinner] = React.useState(false)

  const router = useRouter()

  const handleEmailChange = (e: any) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    setMsg({ msg: '' })
  }

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value
    setPassword(newPassword)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!msg.msg) {
      setSpinner(true)
    }
    setEmail('')
    setPassword('')
    setTimeout(async () => {
      setSpinner(false)
      const { message } = await handleLogin({ email, password })
      setMsg({ msg: message })
      if (message === 'success') {
        router.push('/')
      }
    }, 1000)
  }

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const jsonData = await response.json()
      if (jsonData.message === 'success') {
        return jsonData
      } else {
        return { message: 'Login Failed' }
      }
    } catch (error) {
      return error
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full md:w-[880px]">
        <div className="flex w-full">
          <div className="flex justify-center w-full flex-col items-center gap-[3.25rem] lg:flex-row">
            <div className="w-full p-2 max-w-[320px]">
              <Image priority src={LoginImage} alt="hello" />
            </div>
            <div className="flex w-full flex-col items-center p-3 lg:w-[60%]">
              <div className="mb-3 font-semibold text-2xl">Welcome 🌸</div>
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-4"
              >
                <label
                  className="mb-[-10px] text-sm font-semibold"
                  htmlFor="Email"
                >
                  Email
                </label>

                <input
                  className="w-full rounded-xl border p-3 focus:outline-none"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    handleEmailChange(e)
                  }}
                  placeholder="Enter your email address"
                  type="email"
                />
                <label
                  className="mb-[-10px] text-sm font-semibold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full rounded-xl border p-3 focus:outline-none"
                  placeholder="Enter password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e)}
                  id="password"
                />
                {msg.msg === 'success' ? (
                  <span className="text-green-500 mt-[-10px] text-sm">
                    {msg.msg}
                  </span>
                ) : (
                  <span className="text-red-500 mt-[-10px] text-sm">
                    {msg.msg}
                  </span>
                )}
                <button
                  onClick={handleSubmit}
                  className="rounded-xl items-center flex gap-1 justify-center bg-gradient-to-tr from-[#FFB777] to-[#F16C6A]  p-3 text-white drop-shadow-lg"
                >
                  <div className="flex items-center">
                    {spinner ? (
                      <svg
                        className="animate-spin mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <span className="text-md font-medium">Login</span>
                    )}
                  </div>
                </button>
              </form>
              <span className="mt-3">
                Need and account?{' '}
                <Link href={'/register'} className="underline">
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
