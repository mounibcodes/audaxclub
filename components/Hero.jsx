"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const gallery = [
    { src: "/img1.png", alt: "Image 1" },
    { src: "/img2.png", alt: "Image 2" },
    { src: "/img3.png", alt: "Image 3" },
    { src: "/img4.png", alt: "Image 4" },
  ];

  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      // Animate images up one by one
      imageRefs.current.forEach((img, idx) => {
        tl.to(
          img,
          {
            y: -(window.innerHeight + 400),
            opacity: 0,
            ease: "power2.inOut",
          },
          idx
        );
      });

      // Animate title on the right
      gsap.fromTo(
        titleRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
            scrub: true 
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      id="hero"
      ref={containerRef}
      className="bg-striped flex  items-center justify-start h-screen w-full mt-10 rounded-2xl relative overflow-hidden"
    >
      {/* Title on the right */}
      <h1
        ref={titleRef}
        className="absolute right-38 text-shadow-black  p-4 top-1/2  -translate-y-1/2 text-7xl font-black leading-tight text-black max-w-md"
      >
        AUDAX IS NOT JUST A CLUB. <br /> IT&apos;S A FAMILY.
      </h1>
      <h1
        ref={titleRef}
        className="absolute right-40 text-shadow-black  p-4 top-1/2 -translate-y-1/2 text-7xl font-black leading-tight text-red-500 max-w-md"
      >
        AUDAX IS NOT JUST A CLUB. <br /> IT&apos;S A FAMILY.
      </h1>

      {/* Images stacked on the left */}
      {gallery.map((img, idx) => (
        <div
          key={idx}
          ref={(el) => (imageRefs.current[idx] = el)}
          className="absolute top-1/2 -translate-y-1/2 left-20 w-[400px] h-[400px] "
          style={{ zIndex: gallery.length - idx }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="rounded-xl object-cover shadow-2xl"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      ))}
    </div>
  );
}
