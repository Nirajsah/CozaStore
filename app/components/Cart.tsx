'use client'
import Image from 'next/image'
import React from 'react'
import { motion, easeIn, easeOut } from 'framer-motion'
import { useCart } from '../context/CartProvider'
import Link from 'next/link'
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
type CartProps = {
  incrementQuantity: (product: ProductTypes) => void
  decrementQuantity: (product: ProductTypes) => void
  removeItem: (product: ProductTypes) => void
}

const Product = ({
  item,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}: CartProps & { item: ProductTypes }) => {
  return (
    <div className="flex mt-4 flex-col">
      <div className="flex self-start items-center w-full">
        <div className="w-20 rounded-lg h-20">
          <Image
            width={80}
            height={80}
            src={item.image}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div className="w-full justify-between flex">
          <div className="ml-4 justify-between">
            <div className="truncate w-[170px] font-semibold text-sm capitalize">
              {item.name}
            </div>
            {/* <Stars
                  count={5} // Total number of stars
                  value={item.stars} // Current rating value
                  size={15} // Size of the stars in pixels
                  edit={false}
                  color1="#cccccc" // Inactive star color
                  color2="#ffd700" // Active star color (gold in this example)
                /> */}
            <div className="flex mt-2">
              <div className="border mr-2 py-1 justify-between w-[100px] flex items-center rounded-lg">
                <button
                  onClick={() => decrementQuantity(item)}
                  type="button"
                  className="flex w-[36px] justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="14px"
                    height="14px"
                    fill-rule="evenodd"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21 13L3 13L3 11L21 11L21 13Z"
                    ></path>
                  </svg>
                </button>
                <input
                  type="number"
                  readOnly
                  value={item.quantity}
                  className="text-center focus:outline-none text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[36px]"
                />
                <button
                  type="button"
                  onClick={() => incrementQuantity(item)}
                  className="flex w-[36px] justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="14px"
                    height="14px"
                    fill-rule="evenodd"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                    />
                  </svg>
                </button>
              </div>
              <button onClick={() => removeItem(item)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.92012 7H20.0799L18.926 22H5.07397L3.92012 7ZM6.07987 9L6.92603 20H17.074L17.9201 9H6.07987Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 9H2V7H22V9Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 18L9 11L11 11L11 18L9 18Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 18L13 11L15 11L15 18L13 18Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 5C9.44772 5 9 5.44772 9 6V7H7V6C7 4.34315 8.34315 3 10 3H14C15.6569 3 17 4.34315 17 6V7H15V6C15 5.44772 14.5523 5 14 5H10Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="self-start font-semibold text-sm">
            ₹ {item.price.toLocaleString('en-IN')} INR
          </div>
        </div>
      </div>
    </div>
  )
}
export default function Cart({ setShowCart, showCart }: any) {
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    totalCartPrice,
  } = useCart()

  return (
    <div className="w-full h-full flex justify-end">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        transition={{ duration: 0.2, ease: easeIn }}
        exit={{
          width: 0,
          padding: 0,
          transition: { opacity: 0, delay: 0.2, duration: 0.2, ease: easeOut },
        }}
        className="max-h-[720px] my-5 drop-shadow-md flex flex-col justify-between font-sans max-w-[380px] bg-white rounded-xl h-[80vh]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, ease: easeIn }}
          exit={{ opacity: 0, transition: { duration: 0.1, ease: easeOut } }}
          className="w-full relative flex justify-between flex-col h-full"
        >
          <div className="flex w-full p-4 items-center justify-between">
            <div className="font-bold text-xl">Cart</div>
            <button onClick={() => setShowCart(!showCart)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6569 19.0711L4.92893 6.34314L6.34315 4.92892L19.0711 17.6568L17.6569 19.0711Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.92893 17.6568L17.6569 4.92892L19.0711 6.34314L6.34315 19.0711L4.92893 17.6568Z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 h-full overflow-x-hidden overflow-y-auto">
            {cart ? (
              cart.map((data: any, index: number) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                >
                  <Product
                    item={data}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    removeItem={removeItem}
                  />
                </motion.div>
              ))
            ) : (
              <div>No Items in Cart</div>
            )}
          </div>

          <div className="flex bg-white rounded-b-xl p-4 flex-col justify-self-end w-full">
            <div className="w-full flex justify-between">
              <div className="text-m font-semibold">Totol</div>
              <div className="text-m font-semibold">
                INR{' '}
                {totalCartPrice()
                  ? '₹' + totalCartPrice().toLocaleString('en-IN')
                  : ''}
              </div>
            </div>
            <div className="flex mt-6 justify-between gap-3 w-full">
              <Link className="w-full" href="/cart">
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="border py-2 font-semibold uppercase rounded-[10px] w-full text-sm"
                >
                  View Cart
                </button>
              </Link>
              <button className="w-full bg-black text-white py-2 border rounded-[10px] uppercase font-semibold text-sm">
                Check Out
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
