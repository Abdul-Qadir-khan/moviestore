import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-gray-600 pt-16 pb-3">
            <div className="max-w-[1170px] mx-auto px-5 md:px-0">

                {/* Top Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    {/* Logo + Description */}
                    <div>
                        <Image
                            src="/movex-logo.png"
                            alt="Movex Logo"
                            width={120}
                            height={40}
                            className="mb-4"
                        />
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Stream the latest movies, timeless classics, and binge-worthy series — all in one place.
                        </p>
                    </div>

                    {/* Browse */}
                    <div>
                        <h4 className="text-red-600 font-semibold mb-4 text-sm uppercase">Browse</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-600 transition">Movies</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">TV Shows</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">Trending</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">My List</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-red-600 font-semibold mb-4 text-sm uppercase">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-600 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">Careers</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-red-600 font-semibold mb-4 text-sm uppercase">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-red-600 transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">Terms</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">Privacy</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-red-600 font-semibold mb-4 text-sm uppercase">Connect</h4>
                        <div className="flex gap-4 text-xl">
                            <a href="#" className="hover:text-red-600 transition"><FaFacebookF /></a>
                            <a href="#" className="hover:text-red-600 transition"><FaInstagram /></a>
                            <a href="#" className="hover:text-red-600 transition"><FaTwitter /></a>
                            <a href="#" className="hover:text-red-600 transition"><FaYoutube /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="border-t border-neutral-800 mt-10 pt-3 text-center text-[12px] text-gray-500">
                    © {new Date().getFullYear()} Movex. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
