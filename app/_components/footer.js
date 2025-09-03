import Link from "next/link";

export default function Footer() {
    return (
        <footer aria-label="Footer" className="bg-gray-800 text-[#F9FAFB] mx-5 rounded-2xl flex justify-center py-20">
            <div className="container flex flex-col md:flex-row gap-10 md:gap-0 items-start px-4 w-full">

                <div className="w-full md:w-1/2 space-y-3">
                    <h1 className="text-3xl">Let&#39;s build something together.</h1>
                    <p className="text-sm text-[#9CA3AF]">
                        Feel free to reach out if you&#39;ve a question, or just want to connect.
                    </p>
                    <h2 className="text-xl py-6 md:py-15">jaydipchangani2@gmail.com</h2>

                    <p className="text-sm text-[#9CA3AF] hidden md:block">
                        ©2025 Jaydip Changani - Built with Next.js and TailwindCSS
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-8">

                    <div className="w-full md:w-1/3 space-y-3">
                        <p className="font-bold">Find me on</p>
                        <ul className="space-y-3 text-sm text-[#9CA3AF]">
                            <li><Link href="https://www.linkedin.com/in/jaydip-changani">LinkedIn</Link></li>
                            <li><Link href="https://github.com/jaydipchangani">GitHub</Link></li>
                            <li><Link href="https://www.instagram.com/jaydip_changani">Instagram</Link></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3 space-y-2">
                        <p className="font-bold">Personalia</p>
                        <ol className="space-y-2 text-sm text-[#9CA3AF]">
                            <li>Jaydip Changani</li>
                            <li>Gujarat, India</li>
                        </ol>
                    </div>

                    <div className="w-full md:w-1/3 space-y-2 ">
                        <p className="font-bold">Site Map</p>
                        <ol className="space-y-2 text-sm text-[#9CA3AF]">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                        </ol>
                    </div>
                </div>

                <p className="text-sm text-[#9CA3AF] mt-10 md:hidden text-center w-full">
                    ©2025 Jaydip Changani - Built with Next.js and TailwindCSS
                </p>
            </div>
        </footer>
    );
}
