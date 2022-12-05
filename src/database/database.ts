import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "userchallenge@vt-code-challenge",
  password: "userchallenge",
  host: "vt-code-challenge.postgres.database.azure.com",
  port: 5432,
  database: "challenge",
  ssl: true,
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});
