import { integer, numeric, pgTable, serial, text } from "drizzle-orm/pg-core";

export const category = pgTable("category", {
  categoryId: text("category_id").primaryKey(),
  name: text("name"),
  description: text("description"),
  image: text("image"),
});

export const product = pgTable("product", {
  productId: serial("product_id").primaryKey(),
  name: text("name"),
  description: text("description"),
  image: text("image"),
  price: integer("price"),
  categoryId: text("category_id").references(() => category.categoryId),
  stars: numeric("stars"),
});

export type Category = typeof category.$inferInsert;
export type Product = typeof product.$inferInsert;
