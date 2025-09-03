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
      <body className={poppins.className}>
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
