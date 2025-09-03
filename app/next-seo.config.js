// next-seo.config.js

const SEO = {
  title: "Jaydip Changani - Full Stack Developer",
  description: "Hi, I'm Jaydip — a full-stack developer blending design, code, and storytelling. View my projects, photography, and personal story.",
  canonical: "https://jaydip-next-js-portfolio.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jaydip-next-js-portfolio.vercel.app/",
    site_name: "Jaydip Changani",
    title: "Jaydip Changani - Full Stack Developer",
    description:
      "Portfolio of Jaydip Changani - full-stack developer, visual storyteller, and curious explorer of tech and tradition.",
    images: [
      {
        url: "https://jaydip-next-js-portfolio.vercel.app/_next/image?url=%2FJaydipImage.jpeg&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "Jaydip Changani Portfolio",
      },
    ],
  },
  twitter: {
    handle: "@jaydipchangani",
    site: "@jaydipchangani",
    cardType: "summary_large_image",
  },
};

export default SEO;
