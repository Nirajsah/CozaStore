import React from 'react'
import { db } from '../db/database'
import { Cart, cart, product } from '../db/schema/schema'
import { eq } from 'drizzle-orm'
import ShowCartButton from '../components/ShowCart'

interface CartIconProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  showCart: boolean
}

async function getCart({ userId }: { userId: number }): Promise<any[]> {
  const result = await db
    .select()
    .from(cart)
    .innerJoin(product, eq(product.productId, cart.productId))
    .where(eq(cart.userId, userId))

  console.log(result)
  return result
}

async function CartIcon({ setShowCart, showCart }: CartIconProps) {
  const cart: Cart[] = await getCart({ userId: 1 })

  const userId = 1
  function getTotalItems(): number {
    let totalItems = 0

    cart.forEach((cart: any) => {
      if (cart.cart) {
        totalItems++
      }
    })

    return totalItems
  }
  return (
    <div className="relative flex items-center">
      <ShowCartButton
        userId={userId}
        showCart={showCart}
        setShowCart={setShowCart}
        cart={cart}
        getTotalItems={getTotalItems}
      />
    </div>
  )
}

export default CartIcon
