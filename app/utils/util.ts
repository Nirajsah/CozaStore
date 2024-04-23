import { eq } from 'drizzle-orm'
import { db } from '../db/database'
import { cart } from '../db/schema/schema'

export const UpdateQuantity = async ({
  productId,
  quantity,
}: {
  productId: string
  quantity: number
}) => {
  try {
    const res = await db
      .update(cart)
      .set({ quantity })
      .where(eq(cart.productId, productId))
    console.log(res)
  } catch (error) {
    return error
  }
}
