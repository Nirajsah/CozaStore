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
    console.log(jsonData)
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
