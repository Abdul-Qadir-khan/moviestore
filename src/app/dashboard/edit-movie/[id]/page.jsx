import EditMovieForm from "./EditMovieForm";
import { connectDB } from "@/lib/db";

export default async function EditMoviePage({ params }) {
  const { id } = await params;  // ✅ FIXED

  const db = await connectDB();
  const [rows] = await db.query("SELECT * FROM movies WHERE id = ?", [id]);
  const movie = rows[0];

  if (!movie) {
    return <div className="text-white p-10">Movie not found</div>;
  }

  return <EditMovieForm movie={movie} />;
}
