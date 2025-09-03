"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-4 px-4 py-3 bg-white/10 backdrop-blur-md text-white z-50 rounded-full shadow-lg text-sm max-w-full sm:max-w-md overflow-x-auto scrollbar-hide">
      <Link
        href="/"
        className={`whitespace-nowrap px-5 py-2 rounded ${
          pathname === "/" ? "bg-[#111827] text-white rounded-4xl" : "bg-transparent text-black"
        }`}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={`whitespace-nowrap px-5 py-2 rounded ${
          pathname === "/about" ? "bg-[#111827] text-white rounded-4xl" : "bg-transparent text-black"
        }`}
      >
        About
      </Link>

      <a href="#theme" className="whitespace-nowrap hover:text-gray-400">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Mode
        </button>
      </a>
    </nav>
  );
}
