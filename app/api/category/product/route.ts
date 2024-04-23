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
      .limit(10)
      .offset(offset)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.error()
  }
}
