"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./HeroEnvelope.module.css";

export default function HeroEnvelope() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);

  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);

    setTimeout(() => {
      setZoom(true);
    }, 1500);

    setTimeout(() => {
      router.push("/invitacion");
    }, 2800);
  };

  return (
    <main className="min-h-screen bg-[#f7dcb97d] flex flex-col items-center justify-center p-6 font-wedding">
      
      {/* TOP */}
      <header className="text-center animate-fade-in">
        <p className="text-[#333] text-2xl italic tracking-wide mb-6">
          Los rumores son ciertos
        </p>

        <h1 className="text-[#333] text-4xl tracking-[0.2em] uppercase">
          ¡Nos Casamos!
        </h1>
      </header>

      {/* SOBRE */}
      <div className={styles.letterWrapper}>
        <div className={styles.letter}>
          <div className={styles.envelope} onClick={handleOpen}>

            {/* TAPA */}
            <svg
              className={`${styles.cover} ${open ? styles.open : ""}`}
              viewBox="0 0 500 300"
            >
              <path d="M 0 0 L 500 0 L 275 150 Q 250 175 225 150 L 0 0 Z" />

              <foreignObject x="185" y="10" width="130" height="130">
                <div className="w-full flex justify-center">
                  <img
                    src="/envelope/iniciales.png"
                    alt="Iniciales"
                    className="w-22 object-contain"
                  />
                </div>
              </foreignObject>
            </svg>

            {/* SELLO */}
            <div
              className={`absolute top-1/2 pb-12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-14 duration-700 
              ${styles.sealPulse}
              ${
                open
                  ? "opacity-0 scale-150 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              <img
                src="/envelope/sello.png"
                alt="Sello"
                className="w-28 h-28 object-contain drop-shadow-md"
              />
            </div>

            {/* CARTA */}
            <div
              className={`${styles.letterSheet} ${
                zoom ? styles.letterUp : ""
              } ${zoom ? styles.zoomIn : ""}`}
            >
              <img
                src="/envelope/imagen_1.jpg"
                alt="Boda"
                className="w-72 h-auto mix-blend-multiply opacity-90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <footer className="text-center">
        <h2 className="text-[#333] text-3xl tracking-[0.3em] uppercase">
          Daniela & Cristian
        </h2>
      </footer>
    </main>
  );
}