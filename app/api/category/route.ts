import { db } from "@/app/db/database";
import { category } from "@/app/db/schema/schema";
import { NextResponse } from "next/server";

type Category = {
  categoryId: string;
  name: string;
  description: string;
  image: string;
};
export async function GET() {
  try {
    const result: Category[] = await db.select().from(category);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}
