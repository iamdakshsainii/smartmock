/** @type { import("drizzle-kit").Config } */

// dont export directly use const or assign object first
const config = {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_b7HNEcLxPjR0@ep-proud-shadow-a4520ot6-pooler.us-east-1.aws.neon.tech/smart-mock?sslmode=require',
    }
  };

  export default config;
