import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "crmasso",
  password: "votre_mot_de_passe",
  port: 5432,
});

export default pool;