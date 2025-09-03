import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mx-5 rounded-2xl flex justify-center py-20">
            <div className="container flex flex-col flex-row items-start ">
                <div className=" w-1/2 space-y-3 ">
                    <h1 className="text-3xl">Let's build something together.</h1>
                    <p className="text-sm">Feel free to reach out if you've a question, or just want to connect.</p>
                    <h2 className="text-xl py-15">jaydipchangani2@gmail.com</h2>
                    <p className="text-sm">©2025 Jaydip Changani - Built with Next.js and TailwindCSS</p>
                </div>
                <div className=" w-1/2 flex flex-row items-start  ">

                    <div className=" w-1/3 space-y-3">
                        <p className="font-bold">Find me on</p>
                        <ol className="space-y-3 text-sm">
                            <li><Link href="https://www.linkedin.com/in/jaydip-changani">LinkedIn</Link> </li>
                            <li><Link href="https://github.com/jaydipchangani">GitHub</Link></li>
                            <li><Link href="https://www.instagram.com/jaydip_changani">Instagram</Link></li>
                        </ol>
                    </div>

                    <div className="w-1/3 space-y-2">
                        <p className="font-bold">Personalia</p>
                        <ol className="space-y-2 text-sm">
                            <li>Jaydip Changani</li>
                            <li>Gujarat, India</li>
                        </ol>
                    </div>

                    <div className=" w-1/3 space-y-2">
                        <p className="font-bold">Site Map</p>
                        <ol className="space-y-2 text-sm" >
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </footer>
    );
}