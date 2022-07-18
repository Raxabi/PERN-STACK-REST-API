import pg from "pg";
import "dotenv/config"

const pool = new pg.Pool({
    host: process.env.DATABASE_HOST,
    user: "postgres",
    database: "tasksdb",
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
});

await pool.connect()
    .then(_ => console.info("Connected to database"))
    .catch(error => console.error(`Error attemping connect to the database, error\n:${error}`))

export default pool;