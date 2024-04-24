// import { eq } from 'drizzle-orm'
// import { db } from '../db/database'
// import { cart } from '../db/schema/schema'

// export const updateQuantity = async ({
//   productId,
//   quantity,
// }: {
//   productId: string
//   quantity: number
// }) => {
//   try {
//     const res = await db
//       .update(cart)
//       .set({ quantity: quantity })
//       .where(eq(cart.productId, productId))
//     console.log('called', res)
//   } catch (error) {
//     return error
//   }
// }
