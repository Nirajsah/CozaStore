'use client'
import React from 'react'
import { adminLogin } from '../actions'
import SpinnerButton from '../components/SpinerButton'

export default function AdminLoginForm() {
  return (
    <form action={adminLogin} className="flex w-full flex-col gap-4">
      <label className="mb-[-10px] text-sm font-semibold" htmlFor="Email">
        UserName
      </label>

      <input
        className="w-full rounded-xl border p-3 focus:outline-none"
        name="username"
        id="username"
        placeholder="Enter valid username"
        type="text"
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
      {/* {msg.msg === 'Authenticated' ? (
        <span className="text-green-500 mt-[-10px] text-sm">{msg.msg}</span>
      ) : (
        <span className="text-red-500 mt-[-10px] text-sm">{msg.msg}</span>
      )} */}
      <SpinnerButton Button="Login" />
    </form>
  )
}
