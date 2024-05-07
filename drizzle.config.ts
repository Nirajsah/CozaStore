import { defineConfig } from 'drizzle-kit'
import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  driver: 'pg',
  schema: './app/db/schema/schema.ts',
  out: 'drizzle',
  dbCredentials: {
    connectionString: 'postgres://postgres:cozastore@localhost:5432/shop',
  },
}) satisfies Config
