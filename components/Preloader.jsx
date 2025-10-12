"use client";
import { useEffect, useState } from "react";

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
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-4xl font-bold z-[9999]">
      <p className="animate-fade">{words[index]}</p>
    </div>
  );
}
