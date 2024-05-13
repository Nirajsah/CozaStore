'use client'
import React from 'react'
import Link from 'next/link'
import LoginImage from '@/app/assets/login.webp'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useUser } from '../context/UserProvider'

export default function Page() {
  const [username, setUserName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const [spinner, setSpinner] = React.useState(false)
  const [msg, setMsg] = React.useState({ msg: '' })

  const { setUser } = useUser()
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!msg.msg) {
      setSpinner(true)
    }
    if (
      emailError.trim().length === 0 &&
      passwordError.trim().length === 0 &&
      username &&
      email &&
      password
    ) {
      const { message, userId } = await handleRegister({
        username,
        email,
        password,
      })
      setUser(userId)
      setTimeout(() => {
        setSpinner(false)
        if (message === 'success') {
          router.push('/')
        } else {
          setMsg({ msg: 'all fields are requried!' })
        }
      }, 2000)
    }
    setUserName('')
    setEmail('')
    setPassword('')
  }
  const handleEmailChange = (e: any) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    setEmailError(validateEmail(newEmail) ? '' : 'Invalid email!')
    setMsg({ msg: '' })
  }

  function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  function validatePassword(password: string) {
    if (password.length < 8) {
      return 'Password length must be at least 8 characters'
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter'
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter'
    }
    if (!/\d/.test(password)) {
      return 'Password must contain at least one digit'
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      return 'Password must contain at least one special character'
    }
    return ''
  }

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setPasswordError(validatePassword(newPassword))
  }

  const handleRegister = async ({
    username,
    email,
    password,
  }: {
    username: string
    email: string
    password: string
  }) => {
    try {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      })
      const jsonData = await response.json()
      if (jsonData.message === 'success') {
        setMsg({ msg: jsonData.message })
      }
      return jsonData
    } catch (error) {
      console.error('Error fetching data:', error)
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
                  htmlFor="username"
                >
                  Full Name
                </label>

                <input
                  className="w-full rounded-xl border p-3 focus:outline-none"
                  name="username"
                  id="username"
                  required
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value)
                    setMsg({ msg: '' })
                    setEmailError('')
                    setSpinner(false)
                  }}
                  placeholder="John Doe"
                  type="text"
                />

                <label
                  className="mb-[-10px] text-sm font-semibold"
                  htmlFor="mobile number"
                >
                  Email
                </label>

                <input
                  className="w-full rounded-xl border p-3 focus:outline-none"
                  name="email"
                  required
                  id="email"
                  value={email}
                  onChange={(e) => handleEmailChange(e)}
                  placeholder="Enter valid email address"
                  type="email"
                />
                {emailError && (
                  <span className="text-red-500 text-sm">{emailError}</span>
                )}
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
                  required
                  type="password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e)}
                  id="password"
                />
                {passwordError && (
                  <span className="text-red-500 text-sm">{passwordError}</span>
                )}
                {msg && (
                  <span className="text-red-500 mt-[-10px] text-sm">
                    {msg.msg}
                  </span>
                )}
                <button
                  onClick={handleSubmit}
                  className="rounded-xl flex justify-center bg-gradient-to-tr from-[#FFB777] to-[#F16C6A]  p-3 text-white drop-shadow-lg"
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
                      <span className="text-md font-medium">Register</span>
                    )}
                  </div>
                </button>
              </form>
              <span className="mt-3">
                Already have an account?{' '}
                <Link href="/login" className="underline">
                  Log In
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
