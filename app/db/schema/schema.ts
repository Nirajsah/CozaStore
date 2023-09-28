import { integer, numeric, pgTable, serial, text } from "drizzle-orm/pg-core"

export const category = pgTable('category', {
  categoryId: text('id').primaryKey(),
  name: text('name'),
  description: text('description'),
  image: text('image')
})

export const product = pgTable('category', {
  productId: serial('product_id').primaryKey(),
  name: text('name'),
  description: text('description'),
  image: text('image'),
  price: integer('price'),
  categoryId: text('category_id').references(() => category.categoryId),
  stars: numeric('stars'),
})


