import { db } from '@/app/db/database'
import { cart, Cart } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { productId, quantity, userId } = await request.json()
    const [res] = await db
      .select()
      .from(cart)
      .where(eq(cart.productId, productId))
    if (res === undefined) {
      const result: Cart[] = await db
        .insert(cart)
        .values({ productId, quantity, userId })
        .returning()

      return NextResponse.json({ result, message: 'success' })
    } else {
      const result: Cart[] = await db
        .update(cart)
        .set({ quantity: res.quantity + quantity })
        .where(eq(cart.productId, productId))
        .returning()

      return NextResponse.json({ result, message: 'success' })
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error inserting item in cart' })
  }
}
