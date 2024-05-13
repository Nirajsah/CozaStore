import { db } from '@/app/db/database'
import { Product, product } from '@/app/db/schema/schema'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { categoryId, productId, price, stars, name, image } =
      await request.json()
    const result: Product[] = await db
      .insert(product)
      .values({
        categoryId,
        productId,
        price,
        stars,
        name,
        image,
      })
      .returning()
    return NextResponse.json({ result, message: 'success' })
  } catch (error) {
    return NextResponse.json({ message: 'Error inserting category' })
  }
}
