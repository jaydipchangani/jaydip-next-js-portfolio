
import Header from "../header";
import NavBar from "../navBar";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";

export default function AboutPage() {
    return (
        <div className="m-5 bg-[#111827] text-white p-5">
            <header className="text-white text-center flex itmes-space-around  justify-between fixed top-0 left-0 right-0 bg-[#111827] px-10 pt-10 z-50">
                <Link href="/"><h1 className="text-2xl font-bold ">Jaydip Changani</h1></Link>

                <a href="https://www.linkedin.com/in/jaydip-changani">
                    <button className="bg-white text-[#111827] px-4 py-2 rounded hover:bg-blue-600 transition">
                        Let's Collaborate
                    </button>
                </a>
            </header>
        <div className="h-30 bg-pink-500"></div>
            <div className=" flex gap-4">
                <div className="w-1/10 h-24 bg-red-500">Small Div 1</div>
                <div className="w-1/2  bg-blue-500">
                <h2 className="text-6xl py-5">Hello</h2>
                    <p  style={{ textAlign: "justify" }}>My name is Jaydip, and I love building things for the web. As a full-stack developer, I’ve worked across startups, agencies, and independent projects collaborating with forward-thinking designers, developers, and product teams to create digital experiences that are both functional and meaningful.<br /><br />

                        I'm deeply curious about the intersection of emerging technologies and human-centered design. Whether it's diving into the latest AI tools, exploring tech trends, or refining scalable web architectures, I’m driven by the pursuit of innovative and future ready solutions.
                        Beyond the screen, my interests extend into the ancient and the timeless. I have a strong foundational understanding of Ayurveda, Indian mythology, and the Vedas fields that offer deep insight into the human experience and holistic living. This blend of tech and tradition inspires me to explore ideas that bridge modern systems with ancient wisdom.
                        <br /><br />
                        Right now, I’m in an exciting phase of exploration experimenting with new tools, concepts, and cross-disciplinary ideas that challenge conventional thinking and open up new ways of creating value through technology.</p>

                </div>
                <div className="w-1/2 h-40 bg-green-500"><h2 className="text-6xl py-5">Hello</h2>
                    <p style={{ textAlign: "justify" }}>My name is Jaydip, and I love building things for the web. As a full-stack developer, I’ve worked across startups, agencies, and independent projects collaborating with forward-thinking designers, developers, and product teams to create digital experiences that are both functional and meaningful.<br /><br />

                        I'm deeply curious about the intersection of emerging technologies and human-centered design. Whether it's diving into the latest AI tools, exploring tech trends, or refining scalable web architectures, I’m driven by the pursuit of innovative and future ready solutions.
                        Beyond the screen, my interests extend into the ancient and the timeless. I have a strong foundational understanding of Ayurveda, Indian mythology, and the Vedas fields that offer deep insight into the human experience and holistic living. This blend of tech and tradition inspires me to explore ideas that bridge modern systems with ancient wisdom.
                        <br /><br />
                        Right now, I’m in an exciting phase of exploration experimenting with new tools, concepts, and cross-disciplinary ideas that challenge conventional thinking and open up new ways of creating value through technology.</p></div>

                <div className="w-1/10 h-24 bg-yellow-500">Small Div 2</div>
            </div>
   <div className="mt-10 flex gap-4">
                <div className="w-1/10 h-24 bg-red-500">Small Div 1</div>
                <div className="w-1/2  bg-blue-500">
                <h2 className="text-6xl">Hello</h2>
                    <p  style={{ textAlign: "justify" }}>My name is Jaydip, and I love building things for the web. As a full-stack developer, I’ve worked across startups, agencies, and independent projects collaborating with forward-thinking designers, developers, and product teams to create digital experiences that are both functional and meaningful.<br /><br />

                        I'm deeply curious about the intersection of emerging technologies and human-centered design. Whether it's diving into the latest AI tools, exploring tech trends, or refining scalable web architectures, I’m driven by the pursuit of innovative and future ready solutions.
                        Beyond the screen, my interests extend into the ancient and the timeless. I have a strong foundational understanding of Ayurveda, Indian mythology, and the Vedas fields that offer deep insight into the human experience and holistic living. This blend of tech and tradition inspires me to explore ideas that bridge modern systems with ancient wisdom.
                        <br /><br />
                        Right now, I’m in an exciting phase of exploration experimenting with new tools, concepts, and cross-disciplinary ideas that challenge conventional thinking and open up new ways of creating value through technology.</p>

                </div>
                <div className="w-1/2 h-40 bg-green-500"><h2 className="text-6xl py-5">Hello</h2>
                    <p style={{ textAlign: "justify" }}>My name is Jaydip, and I love building things for the web. As a full-stack developer, I’ve worked across startups, agencies, and independent projects collaborating with forward-thinking designers, developers, and product teams to create digital experiences that are both functional and meaningful.<br /><br />

                        I'm deeply curious about the intersection of emerging technologies and human-centered design. Whether it's diving into the latest AI tools, exploring tech trends, or refining scalable web architectures, I’m driven by the pursuit of innovative and future ready solutions.
                        Beyond the screen, my interests extend into the ancient and the timeless. I have a strong foundational understanding of Ayurveda, Indian mythology, and the Vedas fields that offer deep insight into the human experience and holistic living. This blend of tech and tradition inspires me to explore ideas that bridge modern systems with ancient wisdom.
                        <br /><br />
                        Right now, I’m in an exciting phase of exploration experimenting with new tools, concepts, and cross-disciplinary ideas that challenge conventional thinking and open up new ways of creating value through technology.</p></div>

                <div className="w-1/10 h-24 bg-yellow-500">Small Div 2</div>
            </div>

            <NavBar />
        </div>
    );
}