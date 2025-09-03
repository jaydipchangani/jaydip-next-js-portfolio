import Header from "../_components/header";
import NavBar from "../_components/navBar";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import PhotoGallery from "../_components/photoGallery";
import TypingHello from "../_components/TypingHello";

export default function AboutPage() {
    return (
        <div className="m-5 bg-[#111827] text-white p-5">
            {/* Responsive Fixed Header */}
            <header className="text-white flex flex-wrap justify-between items-center fixed top-0 left-0 right-0 bg-[#111827] px-5 md:px-10 pt-5 md:pt-10 z-50">
                <Link href="/">
                    <h1 className="text-2xl font-bold">
          <span className="block md:hidden">jd</span>
          <span className="hidden md:block">Jaydip Changani</span>
        </h1>
                </Link>
                <a href="https://www.linkedin.com/in/jaydip-changani" className="mt-2 md:mt-0">
                    <button className="bg-white text-[#111827] px-4 py-2 rounded hover:scale-95 transition">
                        Let&#39;s Collaborate
                    </button>
                </a>
            </header>

            {/* Spacer for Fixed Header */}
            <div className="h-28 md:h-32"></div>

            {/* Main Bio Section */}
            <div className="flex flex-col md:flex-row gap-6 max-w-screen-xl mx-auto animate-fade-in">
                {/* Left spacing not needed for small devices */}
                <div className="w-full md:w-1/2 px-4">
                    <TypingHello />
                    <p className="text-justify mt-4">
                        My name is Jaydip, and I love building things for the web. As a full-stack developer, I&#39;ve worked across startups, agencies, and independent projects collaborating with forward-thinking designers, developers, and product teams to create digital experiences that are both functional and meaningful.
                        <br /><br />
                        I&#39;m deeply curious about the intersection of emerging technologies and human-centered design. Whether it&#39;s diving into the latest AI tools, exploring tech trends, or refining scalable web architectures, I’m driven by the pursuit of innovative and future ready solutions.
                        <br /><br />
                        Beyond the screen, my interests extend into the ancient and the timeless. I have a strong foundational understanding of Ayurveda, Indian mythology, and the Vedas — fields that offer deep insight into the human experience and holistic living. This blend of tech and tradition inspires me to explore ideas that bridge modern systems with ancient wisdom.
                        <br /><br />
                        Right now, I&#39;m in an exciting phase of exploration — experimenting with new tools, concepts, and cross-disciplinary ideas that challenge conventional thinking and open up new ways of creating value through technology.
                    </p>
                </div>

                {/* Right spacing for image or placeholder */}
                <div className="w-full md:w-1/2 flex justify-center items-center px-4">
                    {/* Optional: Add something later here */}
                </div>
            </div>

            {/* Profile Image Section */}
            <div className="flex items-center justify-center mt-10 ">
                <div className="w-full max-w-2xl px-4 py-6 rounded-xl ">
                    <div className="relative w-full h-96">
                        <Image
                            src="/JaydipImage.jpeg"
                            alt="Picture of the author"
                            fill
                            className="rounded-2xl object-cover animate-fade-in "
                            priority
                            
                        />
                    </div>
                    <p className="text-sm text-white mt-4 text-start">
                        *That&#39;s me doing nothing in Gujarat, India.
                    </p>
                </div>
            </div>

            {/* Photography Section */}
            <div className="flex flex-col items-center justify-center text-center gap-5 py-16 px-4">
                <h1 className="text-3xl md:text-4xl font-semibold">Documenting life through visuals</h1>
                <p>
                    On every journey, I carry more than just a bag - I carry a camera to document the world as I see it.
                    <br />
                    Here&#39;s a glimpse into that perspective.
                </p>
            </div>

            {/* Photo Gallery Section */}
            <div className="flex justify-center px-4">
                <div className="w-full max-w-screen-xl">
                    <PhotoGallery />
                </div>
            </div>

            {/* Footer Navigation */}
            <NavBar />
        </div>
    );
}
