'use client'
import React from 'react'
import ShowCartButton from '../components/ShowCart'

export function CartIcon({ userId }: { userId: number | undefined }) {
  const [cart, setCart] = React.useState<any[]>([])

  React.useEffect(() => {
    const getCart = async ({ userId }: { userId: number | undefined }) => {
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

  return (
    <div className="absolute flex items-center">
      <ShowCartButton cartData={cart} />
    </div>
  )
}

export default CartIcon
