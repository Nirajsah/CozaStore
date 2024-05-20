import React from 'react'
import { db } from '../db/database'
import { cart, product } from '../db/schema/schema'
import { eq } from 'drizzle-orm'
import ShowCartButton from '../components/ShowCart'

async function getCart({ userId }: { userId: number }): Promise<any[]> {
  const result = await db
    .select()
    .from(cart)
    .innerJoin(product, eq(product.productId, cart.productId))
    .where(eq(cart.userId, userId))

  return result
}

async function CartIcon({ userId }: { userId: number | undefined }) {
  let cartData: any = []
  if (userId !== undefined) {
    cartData = await getCart({ userId })
  }

  return (
    <div className="absolute flex items-center">
      <ShowCartButton cartData={cartData} />
    </div>
  )
}

export default CartIcon
