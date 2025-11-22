import mysql from "mysql2/promise";

let connection;

export async function connectDB() {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "movex",
        port: 3307,
      });

      console.log("✅ MySQL Connected Successfully");
    } catch (error) {
      console.error("❌ MySQL Connection Failed:", error);
    }
  }

  return connection;
}
