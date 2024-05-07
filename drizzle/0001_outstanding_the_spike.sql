ALTER TABLE "card" ALTER COLUMN "created_at" SET DEFAULT now()::timestamp without time zone;--> statement-breakpoint
ALTER TABLE "cart" ALTER COLUMN "created_at" SET DEFAULT now()::timestamp without time zone;--> statement-breakpoint
ALTER TABLE "cart" ALTER COLUMN "updated_at" SET DEFAULT now()::timestamp without time zone;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now()::timestamp without time zone;