import React from 'react'
import { cart, Cart, product } from '../db/schema/schema'
import { CartProduct } from './CartProduct'
import Checkout from './Checkout'
import { db } from '../db/database'
import { eq } from 'drizzle-orm'
import CheckoutModal, { ViewCart } from './CheckoutModal'
import { SessionData } from '../lib'
import { getSession } from '../actions'

async function getData({ userId }: { userId: number }): Promise<any[]> {
  if (userId === undefined) return Promise.resolve([])
  const result = await db
    .select()
    .from(cart)
    .innerJoin(product, eq(product.productId, cart.productId))
    .where(eq(cart.userId, userId))

  return result
}

export default async function CartPage() {
  const session: SessionData = await getSession()
  const { userId } = session
  const cart: Cart[] = await getData({ userId })

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
    <div className="w-full h-full flex">
      <div className="max-h-[620px] w-full drop-shadow-md flex flex-col justify-between font-sans bg-white rounded-xl h-[80vh]">
        <div className="w-full relative flex justify-between flex-col h-full">
          <div className="flex w-full p-4 items-center justify-between">
            <div className="font-bold text-xl">Cart</div>
          </div>
          <div className="flex-1 p-4 h-full overflow-x-hidden overflow-y-auto">
            {userId ? (
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
                {cart && cart.length > 0 ? '₹' + calculateTotalPrice(cart) : ''}
              </div>
            </div>
            <div className="flex mt-6 justify-between gap-3 w-full">
              <ViewCart isLoggedIn={session.isLoggedIn} />
              <CheckoutModal />
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-11/12 p-2 md:p-6 max-w-5xl">
                  <Checkout cart={cart} />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
