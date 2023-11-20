import { real, integer, pgTable, text } from "drizzle-orm/pg-core";

export const category = pgTable("category", {
  categoryId: text("category_id").primaryKey(),
  name: text("name"),
  description: text("description"),
  image: text("image"),
});

export const product = pgTable("product", {
  productId: text("product_id").primaryKey(),
  name: text("name"),
  image: text("image"),
  price: integer("price"),
  categoryId: text("category_id").references(() => category.categoryId),
  stars: real("stars"),
});

export type Category = typeof category.$inferSelect;
export type NewCategory = typeof category.$inferInsert;
export type NewProduct = typeof product.$inferInsert;
export type Product = typeof product.$inferSelect;
