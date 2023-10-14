import { db } from "@/app/db/database";
import { Product, product } from "@/app/db/schema/schema";
import { eq } from "drizzle-orm";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, _: NextApiResponse) {
  const { categoryId } = req.body;
  try {
    const result: Product[] = await db.select().from(product).where(
      eq(product.categoryId, categoryId),
    );
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}
