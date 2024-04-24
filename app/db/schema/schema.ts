import { real, integer, pgTable, text, serial } from 'drizzle-orm/pg-core'

export const category = pgTable('category', {
  categoryId: text('category_id').primaryKey(),
  name: text('name'),
  description: text('description'),
  image: text('image'),
})

export const product = pgTable('product', {
  productId: text('product_id').primaryKey(),
  name: text('name'),
  image: text('image'),
  price: integer('price'),
  categoryId: text('category_id').references(() => category.categoryId),
  stars: real('stars'),
})

export const users = pgTable('users', {
  userId: serial('user_id').primaryKey(),
  username: text('user_name').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  createdAt: text('created_at').default('now()'),
})

export const cart = pgTable('cart', {
  cartId: serial('cart_id').primaryKey(),
  userId: integer('user_id').references(() => users.userId),
  productId: text('product_id').references(() => product.productId),
  quantity: integer('quantity'),
  createdAt: text('created_at').default('now()'),
  updatedAt: text('updated_at').default('now()'),
})

export type Category = typeof category.$inferSelect
export type NewCategory = typeof category.$inferInsert
export type NewProduct = typeof product.$inferInsert
export type Product = typeof product.$inferSelect
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
export type Cart = typeof cart.$inferSelect
export type NewCart = typeof cart.$inferInsert
