import { connectDB } from "@/lib/db";
import fs from "fs";
import path from "path";

async function saveFile(file, folder) {
  if (!file || !file.name) return null;

  const bytes = Buffer.from(await file.arrayBuffer());

  const uploadDir = `public/${folder}`;
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filePath = `${folder}/${Date.now()}-${file.name}`;
  fs.writeFileSync(`public/${filePath}`, bytes);

  return `/${filePath}`;
}

export async function POST(req) {
  try {
    const db = await connectDB();
    const form = await req.formData();

    // TEXT FIELDS
    const title = form.get("title");
    const slug = form.get("slug");
    const year = form.get("year");
    const genre = form.get("genre");
    const duration = form.get("duration");
    const rating = form.get("rating");
    const cast = form.get("cast");
    const description = form.get("description");
    const metaTitle = form.get("metaTitle");
    const metaKeywords = form.get("metaKeywords");
    const metaDescription = form.get("metaDescription");
    const trailerUrl = form.get("trailerUrl");

    // Canonical (Auto-Generate)
    const canonical = `https://yourdomain.com/movies/${slug}`;

    // FILES
    const banner = await saveFile(form.get("banner"), "uploads");
    const poster = await saveFile(form.get("poster"), "uploads");
    const video = await saveFile(form.get("video"), "uploads/videos");

    // INSERT
    await db.query(
      `INSERT INTO movies 
      (title, slug, year, genre, duration, rating, cast, description,
       metaTitle, metaKeywords, metaDescription, canonical,
       trailerUrl, banner, poster, video)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        slug,
        year,
        genre,
        duration,
        rating,
        cast,
        description,
        metaTitle,
        metaKeywords,
        metaDescription,
        canonical,
        trailerUrl,
        banner,
        poster,
        video
      ]
    );

    return Response.json({ success: true });

  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
