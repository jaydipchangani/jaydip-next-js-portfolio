import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-[#F9FAFB] mx-5 rounded-2xl flex justify-center py-20">
            <div className="container flex flex-col md:flex-row gap-10 md:gap-0 items-start px-4">
                {/* Left Side */}
                <div className="w-full md:w-1/2 space-y-3">
                    <h1 className="text-3xl">Let&#39;s build something together.</h1>
                    <p className="text-sm text-[#9CA3AF]">
                        Feel free to reach out if you&#39;ve a question, or just want to connect.
                    </p>
                    <h2 className="text-xl py-6 md:py-15">jaydipchangani2@gmail.com</h2>
                    <p className="text-sm text-[#9CA3AF]">
                        ©2025 Jaydip Changani - Built with Next.js and TailwindCSS
                    </p>
                </div>

                {/* Right Side (Links) */}
                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-8">
                    {/* Column 1 */}
                    <div className="w-full md:w-1/3 space-y-3">
                        <p className="font-bold">Find me on</p>
                        <ol className="space-y-3 text-sm text-[#9CA3AF]">
                            <li><Link href="https://www.linkedin.com/in/jaydip-changani">LinkedIn</Link></li>
                            <li><Link href="https://github.com/jaydipchangani">GitHub</Link></li>
                            <li><Link href="https://www.instagram.com/jaydip_changani">Instagram</Link></li>
                        </ol>
                    </div>

                    {/* Column 2 */}
                    <div className="w-full md:w-1/3 space-y-2">
                        <p className="font-bold">Personalia</p>
                        <ol className="space-y-2 text-sm text-[#9CA3AF]">
                            <li>Jaydip Changani</li>
                            <li>Gujarat, India</li>
                        </ol>
                    </div>

                    {/* Column 3 */}
                    <div className="w-full md:w-1/3 space-y-2 ">
                        <p className="font-bold">Site Map</p>
                        <ol className="space-y-2 text-sm text-[#9CA3AF]">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </footer>
    );
}
