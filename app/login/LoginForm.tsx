import React from 'react'
import { login } from '../actions'
import SpinnerButton from '../components/SpinerButton'

export default function LoginForm() {
  return (
    <form action={login} className="flex w-full flex-col gap-4">
      <label className="mb-[-10px] text-sm font-semibold" htmlFor="Email">
        Email
      </label>

      <input
        className="w-full rounded-xl border p-3 focus:outline-none"
        name="email"
        id="email"
        placeholder="Enter your email address"
        type="email"
      />
      <label className="mb-[-10px] text-sm font-semibold" htmlFor="password">
        Password
      </label>
      <input
        className="w-full rounded-xl border p-3 focus:outline-none"
        placeholder="Enter password"
        name="password"
        type="password"
        id="password"
      />
      <SpinnerButton Button="Login" />
    </form>
  )
}
