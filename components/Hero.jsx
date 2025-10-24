"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const gallery = [
    { src: "/audax/img1.jpg", alt: "Image 1" },
    { src: "/audax/img3.jpeg", alt: "Image 2" },
    { src: "/audax/img4.jpeg", alt: "Image 3" },
    { src: "/audax/ramadane2.webp", alt: "Image 4" },
  ];

  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const desktopTitleRef = useRef(null);

  const mobileWrapperRef = useRef(null);
  const panelsRef = useRef(null);
  const mobileTitleRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      imageRefs.current.forEach((img, idx) => {
        if (!img) return;
        tl.to(img, { y: -(window.innerHeight + 400), opacity: 0, ease: "power2.inOut" }, idx * 0.5);
      });

      const titleAnim = gsap.fromTo(
        desktopTitleRef.current,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
        titleAnim.kill && titleAnim.kill();
      };
    });

    mm.add("(max-width: 767px)", () => {
      const wrapper = mobileWrapperRef.current;
      const panelsNode = panelsRef.current;
      if (!wrapper || !panelsNode) return;

      const panels = gsap.utils.toArray(".mobile-panel", panelsNode);
      if (!panels.length) return;

      const totalScroll = panelsNode.scrollWidth - window.innerWidth;
      if (totalScroll <= 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => "+=" + totalScroll,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(panels, { xPercent: -100 * (panels.length - 1), ease: "none", duration: 1 }, 0);

      tl.fromTo(
        mobileTitleRef.current,
        { scale: 0.85, opacity: 0, y: 8 },
        { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
        0
      );

      tl.to(
        mobileTitleRef.current,
        { scale: 0.7, opacity: 0, y: 40, duration: 0.1, ease: "power2.inOut" },
        0.50
      );

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      id="hero"
      ref={containerRef}
      className="bg-striped h-screen w-full mt-10 rounded-2xl relative overflow-hidden"
    >
      {/* Desktop Title */}
      <h1
        ref={desktopTitleRef}
        className="hidden md:block absolute top-1/2 right-16 lg:right-36 -translate-y-1/2 
                   text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-black max-w-lg"
      >
        AUDAX IS NOT JUST A CLUB. <br /> IT&apos;S A FAMILY.
      </h1>

      {/* Mobile: wrapper */}
      <div ref={mobileWrapperRef} id="mobile-gallery" className="md:hidden flex flex-col items-center justify-center h-full px-4">
        <div ref={panelsRef} className="panels flex gap-4 py-6" style={{ width: "max-content" }}>
          {gallery.map((img, idx) => (
            <div
              key={idx}
              className="mobile-panel border-4 relative flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover border-black" quality={75} priority={idx === 0} />
            </div>
          ))}
        </div>

        <h1
          ref={mobileTitleRef}
          id="mobile-title"
          className="text-3xl sm:text-4xl font-black text-center text-black leading-snug mt-6 px-2"
        >
          AUDAX IS NOT JUST A CLUB. <br /> IT&apos;S A FAMILY.
        </h1>
      </div>

      {/* Desktop stacked images */}
      {gallery.map((img, idx) => (
        <div
          key={idx}
          ref={(el) => (imageRefs.current[idx] = el)}
          className="hidden md:block absolute top-1/2 left-10 md:left-20 -translate-y-1/2 w-60 md:w-80 lg:w-[400px] h-60 md:h-80 lg:h-[400px]"
          style={{ zIndex: gallery.length - idx }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="rounded-xl border-4 border-black object-cover shadow-2xl"
            quality={75}
            priority={idx === 0}
          />
        </div>
      ))}
    </div>
  );
}
