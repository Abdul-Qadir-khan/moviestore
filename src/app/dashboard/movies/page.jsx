import { connectDB } from "@/lib/db";
import MoviesTable from "./MoviesTable";

export default async function MoviesPage() {
  const db = await connectDB();
  const [rows] = await db.query("SELECT * FROM movies ORDER BY id DESC");

  return <MoviesTable movies={rows} />;
}
