import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

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
      </body>
    </html>
  );
}
