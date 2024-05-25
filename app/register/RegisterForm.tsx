'use client'
import React from 'react'
import { register } from '../actions'
import SpinnerButton from '../components/SpinerButton'

export default function RegisterForm() {
  const [username, setUserName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')

  const handleEmailChange = (e: any) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    setEmailError(validateEmail(newEmail) ? '' : 'Invalid email!')
  }

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setPasswordError(validatePassword(newPassword))
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

  return (
    <form action={register} className="flex w-full flex-col gap-4">
      <label className="mb-[-10px] text-sm font-semibold" htmlFor="username">
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
          setEmailError('')
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
      {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
      <label className="mb-[-10px] text-sm font-semibold" htmlFor="password">
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
      <SpinnerButton Button="Register" />
    </form>
  )
}
