"use client";

import { hover } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavBar() {

  const pathname = usePathname();

  return (
<nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between px-7 py-5 bg-white/10 backdrop-blur-md text-white z-50 rounded-full shadow-lg text-sm">
 
  <div className="space-x-4">
    <Link
        href="/"
        className={`px-7 py-3 rounded ${
          pathname === "/"
            ? "bg-[#111827] text-white rounded-4xl " 
            : "bg-transparent text-black "
        }`}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={`px-7 py-2 rounded ${
          pathname === "/about"
            ? "bg-[#111827] text-white rounded-4xl"
            : "bg-transparent text-black"
        }`}
      >
        About
      </Link>
    <a href="#theme" className="hover:text-gray-400"><button className="bg-blue-500 text-white mx-2 px-4 py-2 rounded hover:bg-blue-600 transition">
        Mode
        </button></a>
  </div>
</nav>

  );
}