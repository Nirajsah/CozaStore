import { db } from '@/app/db/database'
import { Product, product } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const res = await request.json()
  const { categoryId, offset } = res
  try {
    const result: Product[] = await db
      .select()
      .from(product)
      .where(eq(product.categoryId, categoryId))
      .limit(12)
      .offset(offset)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.error()
  }
}

export async function PUT(request: Request) {
  try {
    const { productId, name, image, price, stars } = await request.json()
    const result = await db
      .update(product)
      .set({ name, image, price, stars })
      .where(eq(product.productId, productId))
    return NextResponse.json({ result, message: 'success' })
  } catch (error) {
    return NextResponse.json({ message: 'Error inserting product' })
  }
}
