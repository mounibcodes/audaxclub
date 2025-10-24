"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Home from "@/components/Home";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // how long the interpolation lasts
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Home />
      <Hero />
      <Events />
      <Gallery />
    </>
  );
}
