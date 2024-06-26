import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import noise from "@/public/images/noise_webp.png";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shakil Ansary",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${space.className} bg-slate-50 dark:bg-[#000]`}>
        <div
          className="bg-noise"
          style={{
            backgroundImage: `url(${noise.src})`,
            backgroundRepeat: "repeat",
            backgroundSize: "100px",
            left: "0",
            top: "0",
          }}
        ></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
