'use client'
import Image from 'next/image'
import React from 'react'
import { useCart } from '../context/CartProvider'

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

type Props = {
  product: ProductTypes
  incrementQuantity: ({}) => void
  decrementQuantity: ({}) => void
  removeItem: ({}) => void
}
const CartProduct: React.FC<Props> = ({
  product,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}: {
  product: ProductTypes
  incrementQuantity: ({}) => void
  decrementQuantity: ({}) => void
  removeItem: ({}) => void
}) => {
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
                  src={product.image}
                  className="w-full rounded-xl h-full object-cover"
                  alt=""
                />
              </div>

              <div className="flex flex-col">
                <div className="h-[40px] text-ellipsis overflow-hidden w-[200px] md:w-[300px] font-semibold text-sm capitalize">
                  {product.name}
                </div>
                <div className="lg:hidden flex mt-4">
                  <div className="border self-center mr-2 py-1 justify-between w-[100px] flex items-center rounded-lg">
                    <button
                      onClick={() => decrementQuantity(product)}
                      name="decrement"
                      type="button"
                      className="flex w-[36px] h-full justify-center items-center"
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
                      value={product.quantity}
                      className="text-center bg-inherit focus:outline-none text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[36px]"
                    />

                    <button
                      onClick={() => incrementQuantity(product)}
                      type="button"
                      name="increment"
                      className="flex w-[36px] h-full justify-center items-center"
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
                  <button name="removeItem" onClick={() => removeItem(product)}>
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
              <div className="lg:flex hidden mt-4">
                <div className="border mr-2 py-1 justify-between w-[100px] flex items-center rounded-lg">
                  <button
                    onClick={() => decrementQuantity(product)}
                    name="decrement"
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
                    value={product.quantity}
                    className="text-center bg-inherit focus:outline-none text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[36px]"
                  />
                  <button
                    onClick={() => incrementQuantity(product)}
                    name="increment"
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
                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                      />
                    </svg>
                  </button>
                </div>
                <button onClick={() => removeItem(product)}>
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
            <div className="font-semibold text-sm">
              {' '}
              ₹ {product.price.toLocaleString('en-IN')} INR
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    totalCartPrice,
  } = useCart()
  return (
    <div className="flex flex-col mt-6 items-center justify-center">
      <div className="w-full mt-16 p-4 flex justify-center items-center flex-col max-w-[1320px]">
        <div className="text-5xl mb-9 font-bold w-full">Your Cart</div>
        <div className="flex w-full gap-4 flex-col md:flex-row">
          <div className="flex flex-col gap-3 w-full">
            <div className="xl:flex hidden justify-between w-full">
              <div className="text-sm font-semibold">Product</div>
              <div className="text-sm font-semibold">Quantity</div>
              <div className="text-sm font-semibold">Total</div>
            </div>
            {cart ? (
              <div className="w-full max-h-520px overflow-scroll">
                {cart.map((products: ProductTypes, index: number) => (
                  <div className="w-full py-2" key={index}>
                    <CartProduct
                      incrementQuantity={incrementQuantity}
                      decrementQuantity={decrementQuantity}
                      removeItem={removeItem}
                      product={products}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div>No Product in Cart</div>
            )}
          </div>
          <div className="flex flex-col self-start bg-white p-4 rounded-xl w-full md:max-w-[400px]">
            <div className="w-full flex justify-between">
              <div className="text-m font-semibold">
                Totol ₹{totalCartPrice().toLocaleString('en-IN')}
              </div>
              <div className="text-m font-semibold">INR</div>
            </div>
            <div className="flex mt-6 justify-between gap-3 w-full">
              <button className="w-full bg-black text-white py-2 border rounded-[10px] uppercase font-semibold text-sm">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
