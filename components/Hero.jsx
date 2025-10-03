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

  // mobile refs
  const mobileWrapperRef = useRef(null); // wrapper that will be pinned
  const panelsRef = useRef(null); // inner panels container (wide)
  const mobileTitleRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop animations (unchanged)
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
        tl.to(
          img,
          {
            y: -(window.innerHeight + 400),
            opacity: 0,
            ease: "power2.inOut",
          },
          idx * 0.5
        );
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

    // Mobile: pinned horizontal scroll + title scale in/out
    mm.add("(max-width: 767px)", () => {
      const wrapper = mobileWrapperRef.current;
      const panelsNode = panelsRef.current;
      if (!wrapper || !panelsNode) return;

      const panels = gsap.utils.toArray(".mobile-panel", panelsNode);
      if (!panels.length) return;

      // total horizontal scroll distance (how many px the page should move)
      const totalScroll = panelsNode.scrollWidth - window.innerWidth;
      if (totalScroll <= 0) return;

      // timeline mapped to vertical scroll (pinning the wrapper)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => "+=" + totalScroll,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          // markers: true, // <-- uncomment this line to debug start/end positions
        },
      });

      // panels move horizontally across the whole timeline
      // give duration 1 so timeline length is at least 1 (positions below use 0, 0.75 etc.)
      tl.to(
        panels,
        { xPercent: -100 * (panels.length - 1), ease: "none", duration: 1 },
        0
      );

      // title: scale/fade in at the very start of the timeline
      tl.fromTo(
        mobileTitleRef.current,
        { scale: 0.85, opacity: 0, y: 8 },
        { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
        0
      );

      // title: shrink + fade out near the end (positioned at 75% of the timeline)
      tl.to(
        mobileTitleRef.current,
        { scale: 0.7, opacity: 0, y: 40, duration: 0.2, ease: "power2.inOut" },
        0.75
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

      {/* Mobile: wrapper that will be pinned while horizontal scroll runs */}
      <div
        ref={mobileWrapperRef}
        id="mobile-gallery"
        className="md:hidden flex flex-col items-center justify-center h-full px-4"
      >
        {/* panels wrapper — make sure this is the wide element */}
        <div
          ref={panelsRef}
          className="panels flex gap-4 py-6"
          style={{ width: "max-content" }} // ensures scrollWidth is panels total width
        >
          {gallery.map((img, idx) => (
            <div
              key={idx}
              className="mobile-panel relative flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
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
          className="hidden md:block absolute top-1/2 left-10 md:left-20 
                     -translate-y-1/2 w-60 md:w-80 lg:w-[400px] h-60 md:h-80 lg:h-[400px]"
          style={{ zIndex: gallery.length - idx }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="rounded-xl object-cover shadow-2xl"
          />
        </div>
      ))}
    </div>
  );
}
