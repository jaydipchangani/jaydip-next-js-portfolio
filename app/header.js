import Link from "next/link";
export default function Header() {
  return (
    <header className="text-black text-center flex itmes-space-around p-5 justify-between">
      <Link href="/"><h1 className="text-2xl font-bold">Jaydip Changani</h1></Link>

      <a href="https://www.linkedin.com/in/jaydip-changani">
         <button className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Let's Collaborate
        </button>
        </a>
       
            
    </header>
  );
}