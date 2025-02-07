import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

// export default {
//   schema: './db/schema.ts',
//   out: './migrations',
//   driver: 'turso',
//   dbCredentials: {
//     url: process.env.TURSO_CONNECTION_URL!,
//     authToken: process.env.TURSO_AUTH_TOKEN!,
//   },
//   verbose: true,
//   strict: true,
// } satisfies Config

export default defineConfig({
  out: './migrations',
  schema: './db/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
})
