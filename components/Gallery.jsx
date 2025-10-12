"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Pre-generate tiny blurred images for placeholders (optional)

export default function Gallery() {
  const images = [
    { src: "/audax/audax.jpg", alt: "Audax Project" },
    { src: "/audax/chess.jpg", alt: "Chess Game" },
    { src: "/audax/img1.jpg", alt: "First Image" },
    { src: "/audax/img2.jpg", alt: "Second Image" },
    { src: "/audax/img3.jpeg", alt: "Third Image" },
    { src: "/audax/img4.jpeg", alt: "Fourth Image" },
    { src: "/audax/img5.jpg", alt: "Fifth Image" },
    { src: "/audax/ramadane.webp", alt: "Ramadan Video" },
    { src: "/audax/ramadane2.webp", alt: "Ramadan Second Video" },
    { src: "/audax/ramia.jpg", alt: "Ramia Event" },
    { src: "/img3.png", alt: "Music Event" },
    { src: "/img5.png", alt: "Club Members" }
  ];

  const rowRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    rowRefs.forEach((ref, idx) => {
      if (!ref.current) return;

      const direction = idx === 1 ? 1 : -1;
      const distance = ref.current.scrollWidth / 2;

      gsap.to(ref.current.children, {
        x: direction * -distance,
        ease: "none",
        repeat: -1,
        duration: 30 + idx * 5,
        modifiers: {
          x: (x) => `${(parseFloat(x) % distance)}px`,
        },
      });
    });
  }, []);

  return (
    <section id="gallery" className="w-full min-h-[60vh] bg-white py-16 px-6 md:px-12 space-y-8">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery Timeline</h2>
        <p className="text-lg text-gray-600">
          Explore our events and activities gallery.
        </p>
      </div>

      <div className="space-y-6">
        {rowRefs.map((ref, idx) => (
          <div
            key={idx}
            ref={ref}
            className="flex justify-center gap-6 overflow-hidden relative"
          >
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-64 h-40 rounded-2xl shadow-lg overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover border-4 border-black w-full h-full"
                  quality={75}                   // reduces file size
                  priority={i < 3}              // first few images load faster
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
