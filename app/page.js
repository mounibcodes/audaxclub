'use client'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";

//import Nav from "@/components/navbarotherversion";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function Home() {
  const refhero = useRef(null);
  const ref = useRef(null);

  useGSAP(() => {
    // Split text into characters
    const split = new SplitText(ref.current, { type: "chars" , smartWrap: true });

    // Animate characters
    const animation = gsap.from(split.chars, {
      opacity: 0,
      stagger: 0.01
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
    <>
      <div  id="home" className="bg-white   flex items-center justify-center" ref={refhero}>
        <p ref={ref} className="text-justify  text-black  break-normal  text-2xl max-w-2xl ">
          Welcome to Audax Club — the cultural heart of ENSTA.
          A vibrant community where innovation meets creativity through dynamic cultural, artistic, and scientific activities.
          Join us to explore exhibitions, workshops, music competitions, and much more, all designed to enrich student life and foster collaboration.
          Empowering students at ENSTA to express, create, and innovate beyond the classroom.
          Connect with us and be part of a thriving cultural journey!
        </p>
      </div>  
      <Hero/> 
      <Events/>
      <Gallery/>

    </>
  );
}
