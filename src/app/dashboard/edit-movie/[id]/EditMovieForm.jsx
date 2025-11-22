"use client";

import { useState } from "react";

export default function EditMovieForm({ movie }) {
  const [formData, setFormData] = useState({
    title: movie.title,
    slug: movie.slug,
    year: movie.year,
    genre: movie.genre,
    duration: movie.duration,
    rating: movie.rating,
    cast: movie.cast,
    description: movie.description,
    metaTitle: movie.metaTitle,
    metaDescription: movie.metaDescription,
    metaKeywords: movie.metaKeywords,
    trailerUrl: movie.trailerUrl,
  });

  const [banner, setBanner] = useState(null);
  const [poster, setPoster] = useState(null);
  const [video, setVideo] = useState(null);

  // Handle text fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (banner) data.append("banner", banner);
    if (poster) data.append("poster", poster);
    if (video) data.append("video", video);

    const res = await fetch(`/api/update-movie?id=${movie.id}`, {
      method: "PUT",
      body: data,
    });

    if (res.ok) {
      alert("Movie Updated Successfully!");
      window.location.href = "/dashboard/movies";
    } else {
      alert("Error updating movie");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 text-white space-y-6 bg-black">
      <div className="max-w-[1170px] mx-auto px-5 md:px-10 xl:px-0">

        <h1 className="text-3xl font-bold mb-6">Edit Movie</h1>

        {/* Title */}
        <div className="grid sm:grid-cols-2 grid-cols-1 space-x-5 space-y-5">
          <div>
            <label>Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          {/* Slug */}
          <div>
            <label>Slug</label>
            <input
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          {/* Year */}
          <div>
            <label>Year</label>
            <input
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          {/* Genre */}
          <div>
            <label>Genre</label>
            <input
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          {/* Duration */}
          <div>
            <label>Duration</label>
            <input
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          {/* Rating */}
          <div>
            <label>Rating</label>
            <input
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          {/* Cast */}
          <div>
            <label>Cast</label>
            <textarea
              name="cast"
              value={formData.cast}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          {/* Description */}
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          {/* SEO FIELDS */}
          <div>
            <label>Meta Title</label>
            <input
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          <div>
            <label>Meta Description</label>
            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          <div>
            <label>Meta Keywords</label>
            <input
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          {/* Trailer URL */}
          <div>
            <label>Trailer URL (YouTube)</label>
            <input
              name="trailerUrl"
              value={formData.trailerUrl}
              onChange={handleChange}
              className="border border-gray-500 rounded text-white px-3 py-2 block w-full"
            />
          </div>

          {/* File Uploads */}
          <div>
            <label>Update Banner</label>
            <input type="file" onChange={(e) => setBanner(e.target.files[0])} />
          </div>

          <div>
            <label>Update Poster</label>
            <input type="file" onChange={(e) => setPoster(e.target.files[0])} />
          </div>

          <div>
            <label>Update Video File</label>
            <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
          </div>

          <button
            className="bg-blue-600 px-6 py-3 rounded text-white mt-5"
            type="submit"
          >
            Update Movie
          </button>
        </div>
      </div>
    </form>
  );
}
