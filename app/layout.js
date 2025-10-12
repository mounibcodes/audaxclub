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
      <head>
       
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <title>AUDAX ENSTA -THE FIRST CLUTURAL CLUB IN ENSTA</title>

      </head>
      <body className={`${workSans.className}`}>
        <PreloaderWrapper>{children}</PreloaderWrapper>
      </body>
    </html>
  );
}
