CREATE TABLE IF NOT EXISTS "category" (
	"category_id" text PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"image" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product" (
	"product_id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"image" text,
	"price" integer,
	"category_id" text,
	"stars" numeric
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product" ADD CONSTRAINT "product_category_id_category_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
