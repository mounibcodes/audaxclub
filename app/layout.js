import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import Script from "next/script";


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
        {/* ✅ Google Analytics setup */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JBSN5VNZS6"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JBSN5VNZS6');
          `}
        </Script>

        <title>AUDAX ENSTA - THE FIRST CULTURAL CLUB IN ENSTA</title>
      </head>

      <body className={`${workSans.className}`}>
        <PreloaderWrapper>{children}</PreloaderWrapper>
      </body>
    </html>
  );
}
