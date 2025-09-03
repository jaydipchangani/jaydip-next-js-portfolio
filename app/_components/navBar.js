"use client";

import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const audioRef = useRef(null);

  const handleNavClick = (path) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    // Wait briefly so sound can start playing before navigating
    setTimeout(() => {
      router.push(path);
    }, 100); // Adjust delay if needed
  };

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-4 px-4 py-3 bg-white/10 backdrop-blur-md text-white z-50 rounded-full shadow-lg text-sm max-w-full sm:max-w-md overflow-x-auto scrollbar-hide">
      <audio ref={audioRef} src="/sound/mouseClick.mp3" preload="auto" />

      {/* Home */}
      <button
        onClick={() => handleNavClick("/")}
        className={`whitespace-nowrap px-5 py-2 rounded transition-all duration-200 ${
          pathname === "/"
            ? "bg-[#111827] text-white rounded-4xl"
            : "bg-transparent text-black"
        }`}
      >
        Home
      </button>

      {/* About */}
      <button
        onClick={() => handleNavClick("/about")}
        className={`whitespace-nowrap px-5 py-2 rounded transition-all duration-200 ${
          pathname === "/about"
            ? "bg-[#111827] text-white rounded-4xl"
            : "bg-transparent text-black"
        }`}
      >
        About
      </button>
    </nav>
  );
}
