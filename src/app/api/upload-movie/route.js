import dbConnect from "@/lib/mongodb";
import Movie from "@/models/Movie";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    await dbConnect();

    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());

    // Handle file uploads (optional)
    const uploadDir = path.join(process.cwd(), "public/uploads");

    const saveFile = async (file, folder) => {
      if (!file) return null;
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, folder, filename);
      await writeFile(filePath, buffer);
      return `/uploads/${folder}/${filename}`;
    };

    const banner = await saveFile(formData.get("banner"), "banners");
    const poster = await saveFile(formData.get("poster"), "posters");
    const trailerFile = await saveFile(formData.get("trailerFile"), "trailers");

    // For multiple files (screenshots, clips)
    const screenshots = [];
    const clips = [];

    for (const [key, value] of formData.entries()) {
      if (key === "screenshots" && value.name) {
        screenshots.push(await saveFile(value, "screenshots"));
      }
      if (key === "clips" && value.name) {
        clips.push(await saveFile(value, "clips"));
      }
    }

    // Save movie to DB
    const movie = await Movie.create({
      title: data.title,
      slug: data.slug,
      year: data.year,
      genre: data.genre,
      duration: data.duration,
      rating: data.rating,
      cast: data.cast,
      description: data.description,
      metaTitle: data.metaTitle,
      metaKeywords: data.metaKeywords,
      metaDescription: data.metaDescription,
      trailerUrl: data.trailerUrl,
      banner,
      poster,
      trailerFile,
      screenshots,
      clips,
    });

    return Response.json({ success: true, movie });
  } catch (error) {
    console.error("Upload error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
