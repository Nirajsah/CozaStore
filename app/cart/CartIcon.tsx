'use client'
import React from 'react'
import { PiBagSimpleLight } from 'react-icons/pi'
import { useUser } from '../context/UserProvider'

interface CartIconProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  showCart: boolean
}

const CartIcon = ({ setShowCart, showCart }: CartIconProps) => {
  const [cart, setCart] = React.useState([])
  const { userId } = useUser()
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
  }, [])

  function getTotalItems(): number {
    let totalItems = 0

    cart.forEach((cart: any) => {
      totalItems += cart.cart.quantity
    })

    return totalItems
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
          {cart && cart.length > 0 ? getTotalItems() : 0}
        </div>
      </button>
    </div>
  )
}

export default CartIcon
