"use client";

// meta_title = 'Movex | Watch latest movies here';
// meta_description = 'movex provide you every type of movies we upload here and we provide all types of contents.';
// meta_keywords = 'latest movies';

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  { src: "banner1.jpeg", title: "The Last Stand", desc: "Experience the epic finale.", rating: "8.5" },
  { src: "banner2.jpg", title: "Edge of Tomorrow", desc: "Live. Die. Repeat.", rating: "7.9" },
  { src: "banner3.jpg", title: "Beyond the Stars", desc: "A journey across the galaxy.", rating: "8.8" },
  { src: "banner4.jpg", title: "Dark Origins", desc: "Every hero has a beginning.", rating: "9.1" },
];

export default function Homepage() {
  return (
    <main>

      <section className="relative max-h-[550px] md:max-h-[700px] mt-4 overflow-hidden">
        <div className="max-w-[1170px] mx-auto px-5 md:px-10 xl:px-0">
          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-3"></div> */}

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="rounded-[2rem]"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div
                  className="z-10 md:h-100 h-75 w-full bg-cover bg-center relative rounded-[2rem]"
                  style={{ backgroundImage: `url(/${img.src})` }}
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-3"></div> */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-black/300 z-3"></div>

                  {/* Slide Content */}
                  <div className="relative z-30 h-full flex flex-col justify-center items-start px-10 md:px-20 text-white">
                    <h2 className="text-[calc(7.5vw-0px)] leading-[auto] md:text-6xl font-bold lg:mb-2 drop-shadow-md">
                      {img.title}
                    </h2>
                    <p className="text-lg md:text-xl lg:mb-6 mb-4 max-w-xl opacity-90">{img.desc}</p>
                    <div className="flex items-center gap-4">
                      <span className="bg-white text-black font-bold py-1 px-3 rounded-md text-sm">
                        ⭐ {img.rating}/10
                      </span>
                      <Link href={'/'} className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-5 rounded-md transition">
                        Watch Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="relative w-fit md:translate-y-[-5rem] translate-y-[-2rem] bottom-10 flex justify-between md:bottom-5 z-20 flex gap-6 px-10 md:px-20">
            <button
              className="swiper-button-prev-custom bg-white/20 hover:bg-white/40 p-4 rounded-full text-white text-2xl backdrop-blur transition"
              title="Previous"
            >
              <FaArrowLeft />
            </button>
            <button
              className="swiper-button-next-custom bg-white/20 hover:bg-white/40 p-4 rounded-full text-white text-2xl backdrop-blur transition"
              title="Next"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>


      <section className="bg-[#0d0d0d] text-white py-16">
        <div className="max-w-[1170px] mx-auto px-5 md:px-10 xl:px-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            🎬 Trending Movies
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                title: "Inception",
                image: "inception.jpg",
                genre: "Sci-Fi",
                rating: "8.8",
              },
              {
                title: "John Wick",
                image: "johnwick.jpg",
                genre: "Action",
                rating: "7.9",
              },
              {
                title: "Interstellar",
                image: "interstellar.jpg",
                genre: "Adventure",
                rating: "8.6",
              },
              {
                title: "The Batman",
                image: "batman.jpg",
                genre: "Thriller",
                rating: "7.5",
              },
            ].map((movie, i) => (
              <div
                key={i}
                className="bg-white/5 hover:bg-white/10 transition rounded-xl overflow-hidden shadow-lg"
              >
                <div
                  className="h-60 bg-cover bg-top"
                  style={{ backgroundImage: `url(/${movie.image})` }}
                ></div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{movie.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{movie.genre}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-yellow-400 font-semibold">
                      ⭐ {movie.rating}
                    </span>
                    <Link href={'/'} className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded-full">
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-5 md:px-10 xl:px-0">
        <h2 className="text-2xl md:text-4xl font-bold mb-5 text-black">📂 Browse by Category</h2>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[
            { name: "Action", icon: "🔥" },
            { name: "Comedy", icon: "😂" },
            { name: "Drama", icon: "🎭" },
            { name: "Sci-Fi", icon: "👽" },
            { name: "Horror", icon: "👻" },
            { name: "Romance", icon: "❤️" },
          ].map((category, i) => (
            <div
              key={i}
              className="bg-black hover:bg-red-800 text-center py-8 px-4 rounded-xl transition cursor-pointer"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
        </div>
      </section>


      <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-5 md:px-10 xl:px-0">
        <h2 className="text-2xl md:text-4xl font-bold mb-5 text-black">🎯 Movex Spotlight</h2>

        <div className="grid md:gap-6 md:grid-cols-3">
          {/* Large Featured Movie */}
          <div className="relative group col-span-2 h-50 md:h-[400px] rounded-xl overflow-hidden">
            <Image width={100} height={100}
              src="/banner3.jpg"
              alt="Featured"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm p-6 flex flex-col justify-end transition-all group-hover:bg-black/60">
              <h3 className="text-2xl font-bold mb-2">🛸 Beyond the Stars</h3>
              <p className="text-sm mb-4">A sci-fi odyssey through uncharted galaxies and secrets untold.</p>
              <span className="bg-purple-600 text-sm px-3 py-1 rounded-full w-fit">Sci-Fi</span>
            </div>
          </div>

          {/* Two Side Movies */}
          <div className="grid grid-cols-2 mt-5 md:mt-0 md:grid-cols-1 gap-6">
            {[
              {
                title: "Dark Origins",
                desc: "A hero is born in the darkest shadows.",
                tag: "Action",
                img: "banner4.jpg",
              },
              {
                title: "Edge of Tomorrow",
                desc: "Relive the war that never ends.",
                tag: "Thriller",
                img: "banner2.jpg",
              },
            ].map((movie, i) => (
              <div key={i} className="relative group h-[185px] rounded-xl overflow-hidden">
                <Image width={500} height={500}
                  src={`/${movie.img}`}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm p-4 flex flex-col justify-end group-hover:bg-black/50 transition-all">
                  <h4 className="font-semibold text-lg">{movie.title}</h4>
                  <p className="text-xs mb-2">{movie.desc}</p>
                  <span className="bg-red-600 text-xs px-2 py-0.5 rounded-full w-fit">{movie.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>


      <section className="bg-cyan-800 text-white py-16">
      <div className="max-w-[1170px] mx-auto px-5 md:px-10 xl:px-0">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">📺 Now Streaming</h2>
          <a href="#" className="text-sm text-blue-400 hover:underline">View All</a>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-5 p-4 ps-2 no-scrollbar">
            {[
              {
                title: "Neon Depths",
                genre: "Sci-Fi",
                rating: "8.1",
                img: "banner1.jpeg",
              },
              {
                title: "Ghost Protocol",
                genre: "Action",
                rating: "7.5",
                img: "banner2.jpg",
              },
              {
                title: "Digital Mirage",
                genre: "Thriller",
                rating: "8.3",
                img: "banner3.jpg",
              },
              {
                title: "Silent Shadows",
                genre: "Drama",
                rating: "7.8",
                img: "banner4.jpg",
              },
            ].map((movie, i) => (
              <div
                key={i}
                className="max-w-[265px] bg-zinc-800 rounded-xl overflow-hidden flex-shrink-0 snap-start hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Image width={300} height={200}
                  src={`/${movie.img}`}
                  alt={movie.title}
                  className="w-full h-36 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
                  <p className="text-xs text-gray-400">{movie.genre}</p>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="bg-green-600 text-white px-2 py-0.5 rounded-full text-xs">
                      ⭐ {movie.rating}
                    </span>
                    <Link href={'/'} className="text-blue-400 hover:underline text-xs">
                      ▶ Watch Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>


      <section className="relative text-black py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Actor Image */}
          <div className="relative">
            <Image width={1200} height={800}
              src="/actor-feature.jpg"
              alt="Featured Actor"
              className="w-full h-75 md:h-[500px] object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl"></div>
          </div>

          {/* Actor Info */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">🎭 Featured Actor</h2>
            <h3 className="text-2xl font-semibold mb-2">Aarav Kapoor</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Aarav Kapoor, known for his deep character portrayals and powerful screen presence, has starred in over 20 international films. From action-packed thrillers to heartfelt dramas, his range continues to inspire new generations.
            </p>
            <Link href={'/'} type="button" className="cursor-pointer bg-black text-white hover:bg-red-700 px-6 py-2 rounded-md font-medium">
              Explore Filmography
            </Link>
          </div>
        </div>
      </section>



      <section className="bg-[#111] text-white py-20 px-6 md:px-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
            📩 <span>Stay in the Loop</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Join our newsletter and never miss an update on new releases, trending shows, or exclusive deals!
          </p>

          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-6 py-3 rounded-full text-black placeholder:text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>






    </main>
  );
}


