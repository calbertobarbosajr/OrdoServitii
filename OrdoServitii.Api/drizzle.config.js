import "dotenv/config";
import dotenv from "dotenv";
import path from "path";
// Carrega o .env da pasta pai
dotenv.config({ path: path.resolve(process.cwd(), "../.env") });
export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
};
//# sourceMappingURL=drizzle.config.js.map