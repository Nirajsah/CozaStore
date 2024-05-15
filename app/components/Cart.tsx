'use client'
import React from 'react'
import Link from 'next/link'
import { Cart } from '../db/schema/schema'
import { CartProduct } from './CartProduct'

export default function CartPage() {
  const [cart, setCart] = React.useState<Cart[] | any>([])
  const [showCheckout, setShowCheckout] = React.useState(false)

  const userId = 1

  React.useEffect(() => {
    const getCart = async ({ userId }: { userId: number }) => {
      try {
        const response = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        })
        const jsonData = await response.json()
        setCart(jsonData.cart)
        return jsonData
      } catch (error) {
        return error
      }
    }
    getCart({ userId })
  }, [userId, cart])

  function calculateTotalPrice(cart: any) {
    let totalPrice = 0

    cart.forEach((cart: any) => {
      const productPrice = cart.product.price
      const quantity = cart.cart.quantity
      totalPrice += productPrice * quantity
    })
    return totalPrice
  }

  return (
    <div>
      <div className="w-full h-full flex justify-end">
        <div className="max-h-[620px] w-full drop-shadow-md flex flex-col justify-between font-sans max-w-[400px] bg-white mr-5 rounded-xl h-[80vh]">
          <div className="w-full relative flex justify-between flex-col h-full">
            <div className="flex w-full p-4 items-center justify-between">
              <div className="font-bold text-xl">Cart</div>
            </div>
            <div className="flex-1 p-4 h-full overflow-x-hidden overflow-y-auto">
              {cart ? (
                cart.map((data: any, index: number) => (
                  <div>
                    <CartProduct item={data} />
                  </div>
                ))
              ) : (
                <div className="mt-10 text-2xl font-thin font-fira">
                  No Product in Cart
                </div>
              )}
            </div>

            <div className="flex bg-white rounded-b-xl p-4 flex-col justify-self-end w-full">
              <div className="w-full flex justify-between">
                <div className="text-m font-semibold">Totol</div>
                <div className="text-m font-semibold">
                  INR{' '}
                  {cart && cart.length > 0
                    ? '₹' + calculateTotalPrice(cart)
                    : ''}
                </div>
              </div>
              <div className="flex mt-6 justify-between gap-3 w-full">
                <Link className="w-full" href="/cart">
                  <button
                    // onClick={() => setShowCart(!showCart)}
                    className="border py-2 font-semibold uppercase rounded-[10px] w-full text-sm"
                  >
                    View Cart
                  </button>
                </Link>
                <button
                  onClick={() => {
                    setShowCheckout(!showCheckout)
                  }}
                  className="w-full bg-black text-white py-2 border rounded-[10px] uppercase font-semibold text-sm"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && (
        <div className="w-full h-full">
          <div
            role="button"
            onClick={() => setShowCheckout(!showCheckout)}
            className="w-full h-full z-[100] top-0 left-0 fixed bg-black opacity-60"
          ></div>
          <div className="fixed top-0 right-[200px] z-[200] w-full max-w-[1024px] p-4 h-fit">
            {/* <Checkout cart={cart} /> */}
          </div>
        </div>
      )}
    </div>
  )
}
