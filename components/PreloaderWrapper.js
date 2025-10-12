"use client";
import { useState } from "react";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Foot from "@/components/foot";

export default function PreloaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Nav />
          {children}
          <Foot />
        </>
      )}
    </>
  );
}
