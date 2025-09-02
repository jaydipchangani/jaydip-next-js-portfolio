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
      className="block w-full max-w-xl rounded-3xl overflow-hidden shadow-lg group transition-all duration-300"
    >
      <div className="h-100 bg-white relative overflow-hidden">
        <Image
          src={imgUrl}
          alt={heading}
          width={800} // adjust as needed
          height={500} // adjust as needed
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className={`h-60 w-full px-5 ${bottomBgColor} flex flex-col justify-center items-start`}>
        <p className="text-sm text-gray-700 mb-3">{subheading}</p>
        <h3 className="text-3xl  group-hover:underline transition duration-300">
          {heading}
        </h3>
      </div>
    </Link>
  );
}
