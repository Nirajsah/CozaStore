import { db } from '@/app/db/database'
import { category, Category } from '@/app/db/schema/schema'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const result: Category[] = await db.select().from(category)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.error()
  }
}
