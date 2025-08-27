/** @type { import("drizzle-kit").Config } */
<<<<<<< HEAD

// dont export directly use const or assign object first
const config = {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_b7HNEcLxPjR0@ep-proud-shadow-a4520ot6-pooler.us-east-1.aws.neon.tech/smart-mock?sslmode=require',
    }
  };

  export default config;
=======
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:mv4Mx0OdHZQA@ep-weathered-heart-a58wmzem.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };
>>>>>>> e0dc322c62330917ba1f03f5464ccd9992454974
