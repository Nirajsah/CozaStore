'use client'
import React from 'react'
import { PiBagSimpleLight } from 'react-icons/pi'
import { useCart } from '../context/CartProvider'

interface CartIconProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  showCart: boolean
}

const CartIcon = ({ setShowCart, showCart }: CartIconProps) => {
  const { cart } = useCart()

  const totalItems = () => {
    let uniqueItems = new Set(cart.map((item: any) => item.productId))
    return uniqueItems.size
  }

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        name="show cart"
        onClick={() => setShowCart(!showCart)}
        className="hover:scale-110 lg:flex ease-in-out duration-100"
      >
        <PiBagSimpleLight size={20} />
        <div className="absolute top-[-2px] right-[-7px] border px-1 bg-red-400 rounded-full text-center text-[10px]">
          {cart ? totalItems() : 0}
        </div>
      </button>
    </div>
  )
}

export default CartIcon
