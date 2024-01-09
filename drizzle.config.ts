import { defineConfig } from 'drizzle-kit'
import type { Config } from 'drizzle-kit'

export default defineConfig({
  driver: 'pg',
  schema: './app/db/schema/schema.ts',
  out: 'drizzle',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
}) satisfies Config
