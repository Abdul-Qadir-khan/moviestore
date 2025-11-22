"use client";

import { useState } from "react";

export default function MovieUploadDashboard() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    year: "",
    genre: "",
    duration: "",
    rating: "",
    cast: "",
    description: "",
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
    banner: null,
    poster: null,
    trailerUrl: "",
    video: null,
    screenshots: [],
    clips: []
  });

  const [isLoading, setIsLoading] = useState(false);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      if (name === "screenshots" || name === "clips") {
        setFormData((prev) => ({
          ...prev,
          [name]: [...prev[name], ...files],
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: files[0] }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // Create FormData to handle file uploads
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (Array.isArray(formData[key])) {
          formData[key].forEach((file) => data.append(key, file));
        } else {
          data.append(key, formData[key]);
        }
      });

      const res = await fetch("/api/upload-movie", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Movie uploaded successfully!");
        // Reset the form
        setFormData({
          title: "",
          slug: "",
          year: "",
          genre: "",
          duration: "",
          rating: "",
          cast: "",
          description: "",
          metaTitle: "",
          metaKeywords: "",
          metaDescription: "",
          banner: null,
          poster: null,
          trailerUrl: "",
          video: null,
          screenshots: [],
          clips: []
        });
        e.target.reset(); // clear file inputs visually
      } else {
        alert("❌ Upload failed: " + (result.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("⚠️ Something went wrong! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 max-w-[1170px] mx-auto">
      <h1 className="text-3xl font-bold mb-8">Upload New Movie</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="p-2 rounded bg-gray-800" required />
        <input type="text" name="slug" placeholder="Slug (unique)" value={formData.slug} onChange={handleChange} className="p-2 rounded bg-gray-800" required />

        <input type="number" name="year" placeholder="Release Year" value={formData.year} onChange={handleChange} className="p-2 rounded bg-gray-800" />
        <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} className="p-2 rounded bg-gray-800" />

        <input type="text" name="duration" placeholder="Duration (in min)" value={formData.duration} onChange={handleChange} className="p-2 rounded bg-gray-800" />
        <input type="number" step="0.1" name="rating" placeholder="Rating (1-10)" value={formData.rating} onChange={handleChange} className="p-2 rounded bg-gray-800" />

        <input type="text" name="cast" placeholder="Cast" value={formData.cast} onChange={handleChange} className="p-2 rounded bg-gray-800" />

        <textarea name="description" placeholder="Movie Description" value={formData.description} onChange={handleChange} className="p-2 rounded bg-gray-800 col-span-full" />

        <div className="col-span-full border-t border-gray-700 pt-6">
          <h2 className="text-xl font-semibold mb-2">Media</h2>
        </div>

        <div>
          <label className="block mb-1 text-gray-400">Banner Image</label>
          <input type="file" name="banner" onChange={handleChange} className="text-gray-200" accept="image/*" />
        </div>

        <div>
          <label className="block mb-1 text-gray-400">Poster Image</label>
          <input type="file" name="poster" onChange={handleChange} className="text-gray-200" accept="image/*" />
        </div>

        <div>
          <label className="block mb-1 text-gray-400">Trailer URL (YouTube, etc.)</label>
          <input type="url" name="trailerUrl" placeholder="https://" value={formData.trailerUrl} onChange={handleChange} className="p-2 rounded bg-gray-800 w-full" />
        </div>

        <div>
          <label className="block mb-1 text-gray-400">Upload Trailer File (Optional)</label>
          <input type="file" name="video" onChange={handleChange} className="text-gray-200" accept="video/*" />

        </div>

        <div className="col-span-full">
          <label className="block mb-1 text-gray-400">Screenshots</label>
          <input type="file" name="screenshots" onChange={handleChange} className="text-gray-200" multiple accept="image/*" />
        </div>

        <div className="col-span-full">
          <label className="block mb-1 text-gray-400">Short Clips</label>
          <input type="file" name="clips" onChange={handleChange} className="text-gray-200" multiple accept="video/*" />
        </div>

        <div className="col-span-full border-t border-gray-700 pt-6">
          <h2 className="text-xl font-semibold mb-2">SEO Metadata</h2>
        </div>

        <input type="text" name="metaTitle" placeholder="Meta Title" value={formData.metaTitle} onChange={handleChange} className="p-2 rounded bg-gray-800" />
        <input type="text" name="metaKeywords" placeholder="Meta Keywords" value={formData.metaKeywords} onChange={handleChange} className="p-2 rounded bg-gray-800" />
        <textarea name="metaDescription" placeholder="Meta Description" value={formData.metaDescription} onChange={handleChange} className="p-2 rounded bg-gray-800 col-span-full" />

        <div className="col-span-full">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 rounded text-white mt-4 transition-all duration-300 ${
              isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isLoading ? "Uploading..." : "Upload Movie"}
          </button>
        </div>
      </form>
    </div>
  );
}
