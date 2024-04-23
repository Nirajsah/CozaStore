import { db } from '@/app/db/database'
import { cart, Cart, product } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'

export async function POST(request: Request) {
  try {
    const { userId } = await request.json()
    const result = await db
      .select()
      .from(cart)
      .innerJoin(product, eq(product.productId, cart.productId))
      .where(eq(cart.userId, userId))

    if (result.length > 0) {
      return Response.json({ cart: result })
    } else {
      return Response.json({ msg: 'Cart Empty!' })
    }
  } catch (error) {
    return Response.json({ msg: 'Error Occured' })
  }
}
