import { connectDB } from "@/lib/db";

// 1️⃣ DYNAMIC META DATA
export async function generateMetadata({ params }) {
  const { slug } = params;

  const db = await connectDB();
  const [rows] = await db.query(
    "SELECT title, metaTitle, metaDescription, metaKeywords FROM movies WHERE slug = ? LIMIT 1",
    [slug]
  );

  const movie = rows[0];

  if (!movie) {
    return {
      title: "Movie Not Found",
    };
  }

  return {
    title: movie.metaTitle || movie.title,
    description: movie.metaDescription || movie.title,
    keywords: movie.metaKeywords || "",
    openGraph: {
      title: movie.metaTitle || movie.title,
      description: movie.metaDescription || movie.title,
      url: `https://localhost:3000/movies/${slug}`,
      type: "video.movie",
    },
  };
}

// 2️⃣ PAGE CONTENT
export default async function MoviePage({ params }) {
  const { slug } = params;

  const db = await connectDB();
  const [rows] = await db.query("SELECT * FROM movies WHERE slug = ? LIMIT 1", [
    slug,
  ]);

  const movie = rows[0];

  if (!movie) {
    return (
      <div className="text-white p-12 text-center text-2xl font-semibold">
        ❌ Movie not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000] text-white font-sans">
      <div
        className="relative h-[75vh] bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${movie.banner || movie.poster || "/default-banner.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

        <div className="relative z-20 flex flex-col justify-end h-full px-6 md:px-24 pb-20 space-y-5">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            {movie.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-300 text-lg">
            <span>{movie.year}</span> •
            <span>{movie.genre}</span> •
            <span>{movie.duration} min</span> •
            <span>⭐ {movie.rating}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 space-y-16">
        {/* TRAILER */}
        {movie.trailerUrl && (
          <section>
            <h2 className="text-2xl font-bold mb-6">🎬 Watch Trailer</h2>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800">

              {movie.trailerUrl.includes("youtube.com") ? (
                <iframe
                  src={movie.trailerUrl.replace("watch?v=", "embed/")}
                  className="w-full aspect-video"
                  allowFullScreen
                />
              ) : (
                <video width="100%" controls>
                  <source src={movie.video} type="video/mp4" />
                </video>
              )}

            </div>
          </section>
        )}

        {/* STORY */}
        <section>
          <h2 className="text-2xl font-bold mb-4">📝 Storyline</h2>
          <p className="text-gray-300 text-lg">{movie.description}</p>
        </section>

        {/* IMAGE */}
        <section>
          <h2 className="text-2xl font-bold mb-6">🎥 Cinematic Still</h2>
          <img
            src={movie.banner || movie.poster}
            alt={movie.title}
            className="w-full rounded-xl shadow-xl border border-gray-800"
          />
        </section>
      </div>
    </div>
  );
}
