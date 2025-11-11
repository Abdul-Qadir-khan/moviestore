import dbConnect from "@/lib/mongodb";
import Movie from "@/models/Movie";

export default async function MoviePage({ params }) {
  const { slug } = params;

  // Connect to MongoDB
  await dbConnect();

  // Fetch movie by slug
  const movie = await Movie.findOne({ slug }).lean();

  if (!movie) {
    return (
      <div className="text-white p-12 text-center text-2xl font-semibold">
        ❌ Movie not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000] text-white font-sans">
      {/* === Hero Banner === */}
      <div
        className="relative h-[75vh] bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${movie.banner || movie.posterUrl || "/default-banner.jpg"})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-end h-full px-6 md:px-24 pb-20 space-y-5">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-md tracking-tight">
            {movie.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-300 text-lg">
            <span>{movie.year}</span> • 
            <span>{movie.genre}</span> • 
            <span>{movie.duration || "N/A"} min</span> • 
            <span>⭐ {movie.rating || "N/A"}</span>
          </div>
        </div>
      </div>

      {/* === Tabs Navigation === */}
      <div className="flex justify-center items-center space-x-10 border-b border-gray-800 py-5 bg-[#111] sticky top-0 z-30 backdrop-blur-sm">
        {["Overview", "Trailer", "Gallery", "Comments"].map((tab) => (
          <button
            key={tab}
            className="hover:text-white text-gray-400 font-medium transition-colors duration-300"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* === Content === */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 space-y-16">
        
        {/* Trailer Section */}
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
                <video
                  src={movie.trailerUrl}
                  controls
                  className="w-full rounded-lg"
                />
              )}
            </div>
          </section>
        )}

        {/* Movie Info Grid */}
        <section className="grid md:grid-cols-2 gap-14">
          {/* Left: Info */}
          <div className="space-y-4 text-gray-300">
            <p><span className="font-semibold text-white">Release Year:</span> {movie.year}</p>
            <p><span className="font-semibold text-white">Genre:</span> {movie.genre}</p>
            <p><span className="font-semibold text-white">Duration:</span> {movie.duration || "N/A"} min</p>
            <p><span className="font-semibold text-white">Cast:</span> {movie.cast || "Not specified"}</p>
          </div>

          {/* Right: Ratings */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">⭐ Viewer Ratings</h3>
            <p className="text-gray-400 text-sm">
              {movie.rating ? `${movie.rating}/10 based on viewer feedback` : "No ratings yet."}
            </p>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="w-10">{star} ★</span>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{
                        width: `${Math.floor(Math.random() * 70 + 20)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Storyline */}
        <section>
          <h2 className="text-2xl font-bold mb-4">📝 Storyline</h2>
          <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
            {movie.description || "No description provided."}
          </p>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-2xl font-bold mb-6">🎥 Cinematic Still</h2>
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-800">
            <img
              src={movie.banner || movie.posterUrl || "/default-banner.jpg"}
              alt={`${movie.title} still`}
              className="w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </section>

        {/* Comments */}
        <section>
          <h2 className="text-2xl font-bold mb-6">💬 Comments</h2>
          <div className="space-y-6">
            {[
              { name: "Ayesha", text: "Absolutely stunning visuals!" },
              { name: "Rehan", text: "Loved the storyline and the cast performance." },
              { name: "Maya", text: "Could watch this again and again!" },
            ].map((comment, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 hover:bg-[#222] transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold uppercase">
                  {comment.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{comment.name}</p>
                  <p className="text-gray-300">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
