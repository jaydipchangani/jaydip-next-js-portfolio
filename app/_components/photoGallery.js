import Image from "next/image";
import Link from "next/link";

export default function PhotoGallery() {
    const photos = [
        { src: "/photoGallery2.jpeg", alt: "Gallery Image 1", desc: "Sun rising over calm ocean waves." },
        { src: "/photoGallery1.jpeg", alt: "Gallery Image 2", desc: "Windmills spinning in open fields." },
        { src: "/photoGallery4.jpeg", alt: "Gallery Image 3", desc: "Vibrant sunset over the sea." },
        { src: "/photoGallery9.jpeg", alt: "Gallery Image 4", desc: "Cozy tent setup in the wild." },
        { src: "/photoGallery8.jpeg", alt: "Gallery Image 5", desc: "Clear skies and mountain views." },
        { src: "/photoGallery6.jpeg", alt: "Gallery Image 6", desc: "City lights glowing from above." },
        { src: "/photoGallery10.jpeg", alt: "Gallery Image 7", desc: "These puppies stole my heart." },
        { src: "/photoGallery7.jpeg", alt: "Gallery Image 8", desc: "Natures peace with mountain views." },
        { src: "/photoGallery3.jpeg", alt: "Gallery Image 9", desc: "Airplane flying through city sunset." },
        { src: "/photoGallery5.jpeg", alt: "Gallery Image 10", desc: "Hiked Girnar for these views." },
        { src: "/photoGallery11.jpeg", alt: "Gallery Image 11", desc: "Pink sunset over busy city roads." },
        { src: "/photoGallery12.jpeg", alt: "Gallery Image 12", desc: "Mountain top view was breathtaking." },
    ];

    return (
        <div className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, i) => (
                    <div
                        key={i}
                        className={`relative w-full overflow-hidden rounded-2xl
                            transition-transform duration-500 ease-in-out transform 
                            hover: hover:shadow-xl 
                            animate-fade-in 
                            ${[1, 3, 4, 7, 9, 10].includes(i) ? "sm:row-span-2 h-64 sm:h-128" : "h-64"}
                            group`}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover transition-opacity duration-700 ease-in-out"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/10 rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                            <p ></p>
                            <p className="text-sm">{photo.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

                <div className="flex items-center justify-center pt-10 px-4 sm:px-6">
  <Link 
    href="https://www.instagram.com/jaydip_changani/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button
      className="bg-white text-[#111827] py-4 px-6 sm:py-5 sm:px-10 text-sm sm:text-base rounded-full hover:scale-95 transition-all duration-300 my-6 sm:my-10"
    >
      See More on Instagram
    </button>
  </Link>
</div>

                   
        
        </div>
    );
}
