"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-[#F5F2ED]
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Círculo elegante */}
      <div className="relative w-20 h-20">
        <div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-[#B47C54]/20
          "
        />

        <div
          className="
            absolute
            inset-0
            rounded-full
            border-t
            border-[#B47C54]
            animate-spin
          "
        />
      </div>

      {/* Texto */}
      <div className="mt-8 text-center">
        <p
          className="
            text-[#B47C54]
            uppercase
            tracking-[0.4em]
            text-xs
            mb-3
          "
        >
          Nuestra boda
        </p>

        <h1
          className="
            text-4xl
            md:text-5xl
            italic
            text-[#4A4A4A]
            font-[family-name:var(--font-cormorant)]
          "
        >
          Cristian & Daniela
        </h1>
      </div>

      {/* Línea decorativa */}
      <div className="mt-8 w-24 h-[1px] bg-[#B47C54]/30" />
    </div>
  );
}