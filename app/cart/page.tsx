import React from 'react'
import Navbar from '../components/Navbar'
import Checkout from '../components/Checkout'
import { getSession } from '../actions'
import { SessionData } from '../lib'
import CartProduct from './CartProduct'

interface ProductTypes {
  categoryId: string
  name: string
  image: string
  stars: number
  productId: string
  price_string: string
  price_symbol: string
  price: number
  quantity: number
}

export default async function Page() {
  const session: SessionData = await getSession()
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-6 items-center justify-center">
        <div className="w-full mt-16 p-4 flex justify-center items-center flex-col max-w-[1320px]">
          <div className="text-5xl mb-9 font-bold w-full">Your Cart</div>
          <CartProduct userId={session.userId} />
        </div>
      </div>
      {/* {showCheckout && (
        <div className="w-full h-full">
          <div
            role="button"
            onClick={() => setShowCheckout(!showCheckout)}
            className="w-full h-full z-[100] top-0 left-0 fixed bg-black opacity-60"
          ></div>
          <div className="fixed top-0 right-[200px] z-[200] w-full max-w-[1024px] p-4 h-fit">
            <Checkout cart={cart} />
          </div>
        </div>
      )} */}
    </>
  )
}
