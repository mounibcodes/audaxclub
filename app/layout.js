import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.className}`}>
        <PreloaderWrapper>{children}</PreloaderWrapper>
      </body>
    </html>
  );
}
