import React from 'react'
import { adminLogin } from '../actions'

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
      <button
        type="submit"
        className="rounded-xl items-center flex gap-1 justify-center bg-gradient-to-tr from-[#FFB777] to-[#F16C6A]  p-3 text-white drop-shadow-lg"
      >
        <div className="flex items-center">
          {/* {spinner ? (
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
          )} */}

          <span className="text-md font-medium">Login</span>
        </div>
      </button>
    </form>
  )
}
