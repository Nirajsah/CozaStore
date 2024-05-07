import { db } from '@/app/db/database.ts'
import { product } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { productId } = await request.json()
  console.log('productId:', productId)
  try {
    const result = await db
      .select()
      .from(product)
      .where(eq(product.productId, productId))
    return NextResponse.json({ result, message: 'Success' })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.error()
  }
}
