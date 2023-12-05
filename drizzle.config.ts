import type { Config } from 'drizzle-kit'

export default {
  driver: 'pg',
  schema: './app/db/schema/schema.ts',
  out: 'drizzle',
  dbCredentials: {
    connectionString: 'postgres://postgres:postgres@0.0.0.0:5432/shop',
  },
} satisfies Config

// connectionString: 'cozastore://coza:cozastore@localhost:5432/shop',
