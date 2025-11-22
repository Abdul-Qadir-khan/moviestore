import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/lib/db";

export const metadata = {
  title: "Movex | Movies",
  description: "Watch latest movies only on Movex.",
};

export default async function MoviesPage() {
  const db = await connectDB();

  // GET ALL MOVIES
  const [movies] = await db.query(
    "SELECT id, title, slug, genre, rating, poster FROM movies ORDER BY id DESC"
  );

  return (
    <main>
      <section className="bg-[#0d0d0d] text-white py-16">
        <div className="max-w-[1170px] mx-auto px-5 md:px-10 xl:px-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            🎬 Movies List
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white/5 hover:bg-white/10 transition rounded-xl overflow-hidden shadow-lg"
              >
                {/* Poster Image */}
                <div
                  className="h-60 bg-cover bg-top"
                  style={{
                    backgroundImage: `url(${
                      movie.poster || "/default-poster.jpg"
                    })`,
                  }}
                ></div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">
                    {movie.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-2">
                    {movie.genre || "Unknown Genre"}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-yellow-400 font-semibold">
                      ⭐ {movie.rating || "N/A"}
                    </span>

                    <Link
                      href={`/movies/${movie.slug}`}
                      className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded-full"
                    >
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {movies.length === 0 && (
            <p className="text-gray-400 mt-6 text-lg">
              No movies found. Please upload from dashboard.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
