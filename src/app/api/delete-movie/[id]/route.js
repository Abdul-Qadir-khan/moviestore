import { connectDB } from "@/lib/db";
import fs from "fs";

export async function DELETE(_, { params }) {
  try {
    const { id } = params;
    const db = await connectDB();

    const [rows] = await db.query("SELECT banner, poster, trailerFile FROM movies WHERE id = ?", [id]);
    const movie = rows[0];

    // DELETE FILES 🗑
    const files = [movie.banner, movie.poster, movie.trailerFile];

    files.forEach((file) => {
      if (file && fs.existsSync(`public${file}`)) {
        fs.unlinkSync(`public${file}`);
      }
    });

    // DELETE FROM DB
    await db.query("DELETE FROM movies WHERE id = ?", [id]);

    return Response.json({ success: true });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
