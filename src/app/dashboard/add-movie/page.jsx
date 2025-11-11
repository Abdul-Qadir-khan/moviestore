import { useState } from "react";
import { useRouter } from "next/router";

export default function AddMoviePage() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    year: "",
    genre: "",
    duration: "",
    rating: "",
    description: "",
    banner: "",
    poster: "",
    cast: "",
    trailerUrl: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/add-movie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Movie added!");
      router.push(`/movies/${formData.slug}`);
    } else {
      alert("Error adding movie");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Add New Movie</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key}
            onChange={handleChange}
            className="bg-zinc-800 text-white px-4 py-2 rounded"
          />
        ))}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
