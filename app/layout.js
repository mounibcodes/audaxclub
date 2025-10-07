import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import Foot from "@/components/foot";
import Nav from "@/components/Nav";
import { metadata } from "@/app/metadata";


export const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ default layout function
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.className}`}>
        <Nav />
        {children}
        <Foot />
      </body>
    </html>
  );
}
