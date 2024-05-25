import React from 'react'
import Link from 'next/link'
import LoginImage from '@/app/assets/login.webp'
import Image from 'next/image'
import RegisterForm from './RegisterForm'

export default function Page() {
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
              <RegisterForm />
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
