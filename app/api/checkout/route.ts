import { db } from '@/app/db/database'
import { card } from '@/app/db/schema/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { cardHolder, cardNumber, expirationDate, cvv, amount, type } =
      await request.json()

    const cNumber = cardNumber.replace(/\s+/g, '').trim()

    const [result]: any = await db
      .select()
      .from(card)
      .where(eq(card.cardNumber, cNumber))

    if (result !== undefined) {
      if (
        result.expirationDate !== expirationDate ||
        result.cvv !== cvv ||
        result.cardHolder !== cardHolder ||
        result.type !== type
      ) {
        return NextResponse.json({ message: 'Card details do not match' })
      }
      if (result.amount < amount) {
        return NextResponse.json({ message: 'Insufficient funds' })
      }
      return NextResponse.json({ result: result, message: 'success' })
    } else {
      return NextResponse.json({ message: 'Card not found' })
    }
  } catch (error) {
    return NextResponse.json({ message: error, msg: 'Card not found' })
  }
}
