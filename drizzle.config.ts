import { defineConfig } from 'drizzle-kit'
import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  driver: 'pg',
  schema: './app/db/schema/schema.ts',
  out: 'drizzle',
  dbCredentials: {
    connectionString:
      'postgres://default:TZIPJgKAH75b@ep-still-breeze-a10pr96c-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require',
  },
}) satisfies Config
