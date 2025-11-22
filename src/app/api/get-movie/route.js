import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export async function GET(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const db = await connectDB();

    const [rows] = await db.query("SELECT * FROM movies WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }

    return NextResponse.json({ movie: rows[0] });
  } catch (err) {
    console.error("GET MOVIE ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
