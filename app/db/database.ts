import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pkg from "pg";
const { Client } = pkg;
import { Product, product } from "./schema/schema";

const client = new Client({
  connectionString: process.env.DB_URL,
});

// const Products: Product[] = []
export const db = drizzle(client);

(async () => {
  await client.connect();
})();

export const MigrateDB = async () => {
  try {
    // await db.insert(product).values(Products);
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("Migrations completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error running migrations:", error);
  }
};
