import { connectDB } from "@/lib/db";
import fs from "fs";

export async function PUT(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const form = await req.formData();

    const title = form.get("title") || "";
    const description = form.get("description") || "";
    const genre = form.get("genre") || "";
    const year = form.get("year") || "";
    const rating = form.get("rating") || "";

    const poster = form.get("poster");

    let posterPath = null;

    // ⭐ Save new poster file
    if (poster && poster.name) {
      const bytes = await poster.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = "public/uploads";
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

      posterPath = `/uploads/${Date.now()}-${poster.name}`;
      fs.writeFileSync(`public${posterPath}`, buffer);
    }

    const db = await connectDB();

    // ⭐ If poster was uploaded → update with poster
    if (posterPath) {
      await db.query(
        `UPDATE movies 
         SET title=?, description=?, genre=?, year=?, rating=?, poster=? 
         WHERE id=?`,
        [title, description, genre, year, rating, posterPath, id]
      );
    } else {
      // ⭐ No new file → update other fields only
      await db.query(
        `UPDATE movies 
         SET title=?, description=?, genre=?, year=?, rating=? 
         WHERE id=?`,
        [title, description, genre, year, rating, id]
      );
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error("UPDATE ERROR:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
