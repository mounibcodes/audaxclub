"use client";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader({ onFinish }) {
  useGSAP(() => {
    gsap.fromTo(
      ".preloader-img",
      { scale: 1, opacity: 1 },
      {
        scale: 5,
        duration: 1.8,
        ease: "power3.in",
        onComplete: onFinish,
      }
    );
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] overflow-hidden">
      <Image
        src="/generated-image.png"
        alt="AUDAX LOGO WELCOME"
        width={120}
        height={120}
        className="preloader-img"
      />
    </div>
  );
}
