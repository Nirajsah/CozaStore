import { db } from '@/app/db/database'
import { cart, Cart } from '@/app/db/schema/schema'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { productId, quantity, userId } = await request.json()
    console.log(productId, quantity, userId)
    const result: Cart[] = await db
      .insert(cart)
      .values({ productId, quantity, userId })
      .returning()
    return NextResponse.json({ result, message: 'success' })
  } catch (error) {
    return NextResponse.json({ message: 'Error inserting category' })
  }
}
