import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: String,
  slug: String,
  year: String,
  genre: String,
  duration: String,
  description: String,
  cast: String,
  trailerUrl: String,
  banner: String,
  poster: String,
  rating: Number,
});

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);
