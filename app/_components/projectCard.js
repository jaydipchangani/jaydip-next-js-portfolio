'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ imgUrl, heading, subheading, link, bottomBgColor }) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg group transition-all duration-300"
    >
      <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-[20rem] bg-white overflow-hidden">
        <Image
          src={imgUrl}
          alt={heading}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className={`w-full px-4 py-6 sm:px-6 md:px-8 ${bottomBgColor} flex flex-col justify-center items-start`}>
        <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">{subheading}</p>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold group-hover:underline transition duration-300">
          {heading}
        </h3>
      </div>
    </Link>
  );
}
