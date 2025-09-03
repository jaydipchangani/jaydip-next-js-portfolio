import Header from "../_components/header";
import NavBar from "../_components/navBar";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import PhotoGallery from "../_components/photoGallery";
import TypingHello from "../_components/TypingHello";
import Head from "next/head";

export default function AboutPage() {
    return (
        <>
        <Head>
                <title>About Jaydip Changani | Full-Stack Developer & Visual Storyteller</title>
                <meta
                    name="description"
                    content="Learn more about Jaydip Changani - a full-stack developer blending modern tech with ancient wisdom. Passionate about web, design, and visual storytelling."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://jaydip-next-js-portfolio.vercel.app/" />

                <meta property="og:title" content="About Jaydip Changani | Full-Stack Developer & Visual Storyteller" />
                <meta
                    property="og:description"
                    content="Blending technology with human-centered design, Ayurveda, and storytelling. Discover more about Jaydip Changani."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://jaydip-next-js-portfolio.vercel.app/" />
                <meta property="og:image" content="https://jaydip-next-js-portfolio.vercel.app/_next/image?url=%2FJaydipImage.jpeg&w=1920&q=75" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Jaydip Changani | Full-Stack Developer" />
                <meta
                    name="twitter:description"
                    content="Get to know Jaydip - full-stack developer, creative technologist, and curious mind bridging modern and ancient systems."
                />
                <meta name="twitter:image" content="https://jaydip-next-js-portfolio.vercel.app/_next/image?url=%2FJaydipImage.jpeg&w=1920&q=75" />
            </Head>

       
        <div className="m-5 bg-[#111827] text-white p-5">

            <header className="text-white flex flex-wrap justify-between items-center fixed top-0 left-0 right-0 bg-[#111827] px-5 md:px-10 pt-5 md:pt-10 z-50">
                <Link href="/">
                    <h1 className="text-2xl font-bold">
                        <span className="block md:hidden">jd</span>
                        <span className="hidden md:block">Jaydip Changani</span>
                    </h1>
                </Link>
                <a
  href="https://www.linkedin.com/in/jaydip-changani"
  className="mt-2 md:mt-0 mb-4 md:mb-0"  
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="
      bg-white text-[#111827]
      text-sm md:text-base
      px-4 py-2 md:px-6 md:py-2.5
      rounded hover:scale-95 transition
    "
  >
    <span className="block md:hidden">Collaborate</span>
    <span className="hidden md:block">Let&apos;s Collaborate</span>
  </button>
</a>


            </header>
            <div className="h-28 md:h-32"></div>

            <div className="flex flex-col md:flex-row gap-6 max-w-screen-xl mx-auto animate-fade-in">

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

                <div className="w-full md:w-1/2 flex justify-center items-center px-4">

                </div>
            </div>

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

            <div className="flex flex-col items-center justify-center text-center gap-5 py-16 px-4">
                <h1 className="text-3xl md:text-4xl font-semibold">Documenting life through visuals</h1>
                <p>
                    On every journey, I carry more than just a bag - I carry a camera to document the world as I see it.
                    <br />
                    Here&#39;s a glimpse into that perspective.
                </p>
            </div>

            <div className="flex justify-center px-4">
                <div className="w-full max-w-screen-xl">
                    <PhotoGallery />
                </div>
            </div>

            <NavBar />
        </div>

         </>
    );
}
