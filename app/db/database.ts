import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Client } from "pg";
import { category } from "./schema/schema";

const client = new Client({
  connectionString: "postgres://postgres:postgres@localhost:5432/shop",
});

const Category = [
  {
    categoryId: "keyboard",
    name: "Keyboard",
    description: "Buy different keyboard from any brand available",
    image: "https://m.media-amazon.com/images/I/711oEWUIxzL.jpg",
  },
  {
    categoryId: "headphone",
    name: "Headphone",
    description: "Find best-fit for your ears",
    image: "https://m.media-amazon.com/images/I/61rEoEQqn0L.jpg",
  },
  {
    categoryId: "macbook",
    name: "MacBook",
    image: "https://m.media-amazon.com/images/I/61L5QgPvgqL.jpg",
    description: "Buy Latest MacBooks",
  },
];

export const db = drizzle(client);

export const MigrateDB = async () => {
  try {
    await db.insert(category).values(Category);
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("Migrations completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error running migrations:", error);
  }
};
