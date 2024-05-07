CREATE TABLE IF NOT EXISTS "card" (
	"card_id" serial PRIMARY KEY NOT NULL,
	"card_number" text NOT NULL,
	"card_holder" text NOT NULL,
	"expiration_date" integer NOT NULL,
	"cvv" integer NOT NULL,
	"type" text NOT NULL,
	"amount" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "card_card_number_unique" UNIQUE("card_number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cart" (
	"cart_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"product_id" text,
	"quantity" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "category" (
	"category_id" text PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"image" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product" (
	"product_id" text PRIMARY KEY NOT NULL,
	"name" text,
	"image" text,
	"price" integer,
	"category_id" text,
	"stars" real
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"user_name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cart" ADD CONSTRAINT "cart_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cart" ADD CONSTRAINT "cart_product_id_product_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product" ADD CONSTRAINT "product_category_id_category_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
