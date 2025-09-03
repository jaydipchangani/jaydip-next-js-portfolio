import Link from "next/link";

export default function Header() {
  return (
    <header className="text-black flex flex-row items-center justify-between px-4 md:px-10 py-4">
      
      {/* Logo: JD on mobile, full name on md+ */}
      <Link href="/">
        <h1 className="text-2xl font-bold">
          <span className="block md:hidden">JD</span>
          <span className="hidden md:block">Jaydip Changani</span>
        </h1>
      </Link>

      {/* Button */}
      <a href="https://www.linkedin.com/in/jaydip-changani">
        <button className="bg-[#111827] text-white px-4 py-2 rounded hover:scale-95 transition">
          Let&#39;s Collaborate
        </button>
      </a>
      
    </header>
  );
}
