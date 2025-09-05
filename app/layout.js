import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";
import Footer from "./_components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Jaydip Changani - Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Jaydip Changani's Portfolio - Showcasing the Projects, work and life throught the website" />
      <meta name="keywords" content="Jaydip Changani, Jaydip, jaydip, Changani, changani, Portfolio, Developer, Software Engineer, Projects, Next.js, " />
      <meta name="author" content="Jaydip Changani" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.webp" />
      <meta property="og:title" content="Jaydip Changani's Portfolio" />
      <meta property="og:description" content="AI-Powered Recipe Generator" />
      <meta property="og:image" content="//favicon.webp" />
      <meta property="og:url" content="https://jaydip-next-js-portfolio.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jaydip Changani's Portfolio" />
      <meta name="twitter:description" content="Jaydip Changani, Portfolio, Developer, Software Engineer, Projects" />
      <meta name="twitter:image" content="/favicon.webp" />
      <meta name="google-site-verification" content="https://jaydip-next-js-portfolio.vercel.app/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Geist+Mono&family=Geist+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
      </head>
      <body className={poppins.className}>
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
