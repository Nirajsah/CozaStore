'use client'
import Image from 'next/image'
import React from 'react'
import {
  DecreaseQuantity,
  IncreaseQuantity,
  RemoveItem,
} from '../components/AddToCart'

type Props = {
  product: any
}
const CartItem: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex-col md:flex-row w-full gap-8 flex items-center justify-between rounded-xl">
      <div className="flex flex-col w-full">
        <div className="w-full mt-4 flex rounded-xl">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <div className="w-20 rounded-lg h-20">
                <Image
                  width={80}
                  height={80}
                  src={product.product.image}
                  className="w-full rounded-xl h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="h-[40px] text-ellipsis overflow-hidden w-[200px] md:w-[300px] font-semibold text-sm capitalize">
                  {product.product.name}
                </div>
                <div className="lg:hidden flex mt-4 lg:mt-0">
                  <div className="border self-center mr-2 py-1 justify-between w-[100px] flex items-center rounded-lg">
                    <DecreaseQuantity data={product} />
                    <input
                      type="number"
                      readOnly
                      disabled
                      value={product.cart.quantity}
                      className="text-center bg-inherit focus:outline-none text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[36px]"
                    />
                    <IncreaseQuantity data={product} />
                  </div>

                  <RemoveItem cartId={product.cart.cartId} />
                </div>
              </div>
              <div className="lg:flex hidden mt-4">
                <div className="border mr-2 py-1 justify-between w-[100px] flex items-center rounded-lg">
                  <DecreaseQuantity data={product} />
                  <input
                    type="number"
                    readOnly
                    disabled
                    value={product.cart.quantity}
                    className="text-center bg-inherit focus:outline-none text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[36px]"
                  />

                  <IncreaseQuantity data={product} />
                </div>

                <RemoveItem cartId={product.cart.cartId} />
              </div>
            </div>
            <div className="font-semibold text-sm">
              {' '}
              ₹ {product.product.price} INR
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CartProduct({
  userId,
}: {
  userId: number | undefined
}) {
  const [cart, setCart] = React.useState([])
  const getCart = async () => {
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

  React.useEffect(() => {
    getCart()
  }, [userId, cart])

  function calculateTotalPrice(carts: any) {
    let totalPrice = 0

    cart?.forEach((cart: any) => {
      const productPrice = cart.product.price
      const quantity = cart.cart.quantity
      totalPrice += productPrice * quantity
    })
    return totalPrice
  }
  return (
    <div className="flex w-full gap-4 flex-col md:flex-row">
      <div className="flex flex-col gap-3 w-full">
        <div className="xl:flex hidden justify-between w-full">
          <div className="text-sm font-semibold">Product</div>
          <div className="text-sm font-semibold">Quantity</div>
          <div className="text-sm font-semibold">Total</div>
        </div>
        {cart ? (
          <div className="w-full max-h-520px overflow-scroll">
            {cart.map((products: any, index: number) => (
              <div className="w-full py-2" key={index}>
                <CartItem product={products} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 text-2xl font-thin font-fira">
            No Product in Cart
          </div>
        )}
      </div>
      <div className="flex flex-col self-start bg-white p-4 rounded-xl w-full md:max-w-[400px]">
        <div className="w-full flex justify-between">
          <div className="text-m font-semibold">Totol</div>
          <div className="text-m font-semibold">
            ₹{calculateTotalPrice(cart).toLocaleString('en-IN')} INR
          </div>
        </div>
        <div className="flex mt-6 justify-between gap-3 w-full">
          <button className="w-full bg-black text-white py-2 border rounded-[10px] uppercase font-semibold text-sm">
            Check Out
          </button>
        </div>
      </div>
    </div>
  )
}
