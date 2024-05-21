import React from 'react'
import LoginImage from '@/app/assets/login.webp'
import Image from 'next/image'
import AdminLoginForm from './AdminLoginForm'

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
              <AdminLoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
