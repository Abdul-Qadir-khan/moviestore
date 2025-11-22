"use client";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function MoviesTable({ movies }) {

  const handleDelete = async (id) => {
    const res = await fetch(`/api/delete-movie?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Movie deleted");
      location.reload();
    }
  };

  return (
    <div className="bg-white py-10">
      <div className="max-w-[1170px] mx-auto px-5 md:px-10 xl:px-0">
        <h1 className="text-4xl text-black mb-8 border-b w-fit">All Movies</h1>

        <table className="w-full text-black border">
          <thead>
            <tr className="border bg-black text-white py-2 text-xl">
              <th className="border h-8">ID</th>
              <th className="border h-8">Banner</th>
              <th className="border h-8">Title</th>
              <th className="border h-8">Slug</th>
              <th className="w-30">Action</th>
            </tr>
          </thead>

          <tbody>
            {movies.map((movie) => (
              <tr className="border" key={movie.id}>
                <td className="border text-center">{movie.id}</td>
                <td className="border text-center w-20">
                  <img className="mx-auto" src={movie.banner} width={60} height={60} alt="" title="" />
                </td>
                <td className="border text-center">{movie.title}</td>
                <td className="border text-center">{movie.slug}</td>
                <td className="flex justify-around justify-around items-center pt-1">
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="text-red-800"
                  >
                    <FaTrash className="text-2xl" />
                  </button>

                  <a
                    href={`/dashboard/edit-movie/${movie.id}`}
                    className="text-green-700"
                  >
                    <FaEdit className="text-2xl" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
