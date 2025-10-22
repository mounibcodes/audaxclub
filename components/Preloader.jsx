"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader({ onFinish }) {
  const words = ["Hello", "Salut", "مرحبا"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 500);

    const done = setTimeout(() => {
      clearInterval(timer);
      onFinish();
    }, 1500); // 3 seconds total

    return () => {
      clearInterval(timer);
      clearTimeout(done);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center uppercase justify-center bg-white text-black  text-4xl font-black z-[9999]">
      <p className="animate-pulse">{words[index]}</p> <br /><br />

    </div>
  );
}
