import { db } from '@/app/db/database'
import { cart, Cart, product } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

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

export async function PUT(request: Request) {
  try {
    const { quantity, productId } = await request.json()
    const result = await db
      .update(cart)
      .set({ quantity })
      .where(eq(cart.productId, productId))
    return NextResponse.json({ result, message: 'success' })
  } catch (error) {
    return NextResponse.json({ message: 'Error inserting category' })
  }
}
export async function DELETE(request: Request) {
  try {
    const { cartId } = await request.json()
    const result = await db.delete(cart).where(eq(cart.cartId, cartId))
    return NextResponse.json({ result, message: 'success' })
  } catch (error) {
    return NextResponse.json({ message: 'Error inserting category' })
  }
}
