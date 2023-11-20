'use client'
import React, { useState } from 'react'
import { PiBagSimpleLight } from 'react-icons/pi'
import { useCart } from '../context/CartProvider'
interface CartIconProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  showCart: boolean
}

export const CartIcon = ({ setShowCart, showCart }: CartIconProps) => {
  const { totalItems } = useCart()
  return (
    <div className="relative">
      <button
        type="button"
        name="show cart"
        onClick={() => setShowCart(!showCart)}
        className="hover:scale-110 lg:flex hidden ease-in-out duration-100"
      >
        <PiBagSimpleLight size={20} />
        <div className="absolute top-[-2px] right-[-7px] border px-1 bg-red-400 rounded-full text-center text-[10px]">
          {totalItems()}
        </div>
      </button>
    </div>
  )
}
