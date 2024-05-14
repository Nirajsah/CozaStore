import { db } from '@/app/db/database'
import { category, Category } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const result: Category[] = await db.select().from(category)
    return NextResponse.json({ data: result })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.error()
  }
}

export async function POST(request: Request) {
  try {
    const { categoryId, name, description, image } = await request.json()
    const result: Category[] = await db
      .insert(category)
      .values({ categoryId, name, description, image })
      .returning()
    return NextResponse.json({ result, message: 'success' })
  } catch (error) {
    return NextResponse.json({ message: 'Error inserting category' })
  }
}

export async function PUT(request: Request) {
  try {
    const { categoryId, name, description, image } = await request.json()
    const result = await db
      .update(category)
      .set({ name, description, image })
      .where(eq(category.categoryId, categoryId))
    return NextResponse.json({ result, message: 'success' })
  } catch (error) {
    return NextResponse.json({ message: 'Error inserting category' })
  }
}
