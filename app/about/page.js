
import Header from "../header";
import NavBar from "../navBar";
import Link from "next/link";
import "../globals.css";

export default function AboutPage() {
    return (
        <div className="m-5 bg-[#111827] ">
        <header className="text-white text-center flex itmes-space-around p-5 justify-between sticky">
      <Link href="/"><h1 className="text-2xl font-bold ">Jaydip Changani</h1></Link>

      <a href="https://www.linkedin.com/in/jaydip-changani">
         <button className="bg-white text-[#111827] px-4 py-2 rounded hover:bg-blue-600 transition">
        Let's Collaborate
        </button>
        </a>
       
            
    </header>
        
        </div>
    );
}