'use client'
import React from 'react'

const addToCartHandler = async ({
  productId,
  userId,
}: {
  productId: string
  userId: string
}) => {
  try {
    const response = await fetch('/api/cart/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        quantity: 1,
        userId,
      }),
    })
    const jsonData = await response.json()
    return jsonData
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export default function AddToCart({ data, userId }: any) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        addToCartHandler({ productId: data.productId, userId })
      }}
      className="duration-100 bg-black text-white w-[300px] rounded-xl p-4 uppercase font-semibold text-xs mt-3 hover:scale-105"
    >
      Add to Cart
    </button>
  )
}

const updateCart = async ({ quantity, productId }: any) => {
  try {
    const response = await fetch('/api/cart', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity, productId }),
    })
    const jsonData = await response.json()
    return jsonData
  } catch (error) {
    return error
  }
}

const removeItem = async ({ cartId }: any) => {
  try {
    const response = await fetch('/api/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartId }),
    })
    const jsonData = await response.json()
    return jsonData
  } catch (error) {
    return error
  }
}

export function IncreaseQuantity({ data }: any) {
  return (
    <button
      onClick={() => {
        console.log(data)
        updateCart({
          quantity: data.cart.quantity + 1,
          productId: data.product.productId,
        })
      }}
      type="button"
      className="flex w-[36px] justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="14px"
        height="14px"
        fillRule="evenodd"
      >
        <path
          fillRule="evenodd"
          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
        />
      </svg>
    </button>
  )
}

export function DecreaseQuantity({ data }: any) {
  return (
    <button
      onClick={() => {
        console.log(data)
        if (data.cart.quantity === 1) {
          return
        }
        updateCart({
          quantity: data.cart.quantity - 1,
          productId: data.product.productId,
        })
      }}
      type="button"
      className="flex w-[36px] justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="14px"
        height="14px"
        fillRule="evenodd"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 13L3 13L3 11L21 11L21 13Z"
        ></path>
      </svg>
    </button>
  )
}

export function RemoveItem({ item }: any) {
  return (
    <button
      onClick={() => {
        removeItem({ cartId: item.cart.cartId })
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.92012 7H20.0799L18.926 22H5.07397L3.92012 7ZM6.07987 9L6.92603 20H17.074L17.9201 9H6.07987Z"
        ></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M22 9H2V7H22V9Z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 18L9 11L11 11L11 18L9 18Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 18L13 11L15 11L15 18L13 18Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 5C9.44772 5 9 5.44772 9 6V7H7V6C7 4.34315 8.34315 3 10 3H14C15.6569 3 17 4.34315 17 6V7H15V6C15 5.44772 14.5523 5 14 5H10Z"
        ></path>
      </svg>
    </button>
  )
}
