'use client'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Home() {
  const refhero = useRef(null);
  const refText = useRef(null);

  useGSAP(() => {
    if (!refText.current) return;

    // Split text into characters
    const split = new SplitText(refText.current, { type: "chars", smartWrap: true });

    // Animate characters
    const animation = gsap.from(split.chars, {
      opacity: 0,
      stagger: 0.01,
    });

    // ScrollTrigger pin + scrub
    ScrollTrigger.create({
      animation,
      trigger: refhero.current,
      start: "top 20%",
      end: "+=200%",
      scrub: 2,
      pin: true,
    });
  }, []);

  return (
    <div ref={refhero} className="bg-white flex items-center justify-center p-6 min-h-[70vh]">
      <p
        ref={refText}
        className="text-black text-2xl max-w-2xl  md:text-left leading-relaxed"
      >
        Welcome to Audax Club — the cultural heart of ENSTA. A vibrant community where innovation meets creativity through dynamic cultural, artistic, and scientific activities. Join us to explore exhibitions, workshops, trips, competitions, and much more, all designed to enrich student life and foster collaboration. Empowering students at ENSTA to express, create, and innovate beyond the classroom. Connect with us and be part of a thriving cultural journey!
      </p>
    </div>
  );
}
