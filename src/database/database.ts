import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
  user:
    process.env.NODE_ENV === "production"
      ? process.env.DB_USER
      : "userchallenge@vt-code-challenge",
  password:
    process.env.NODE_ENV === "production"
      ? process.env.DB_PASSWORD
      : "userchallenge",
  host:
    process.env.NODE_ENV === "production"
      ? process.env.DB_HOST
      : "vt-code-challenge.postgres.database.azure.com",
  port:
    process.env.NODE_ENV === "production"
      ? parseInt(process.env.DB_PORT)
      : 5432,
  database:
    process.env.NODE_ENV === "production"
      ? process.env.DB_DATABASE
      : "challenge",
  ssl: true,
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});
