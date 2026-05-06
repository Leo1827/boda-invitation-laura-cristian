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
    setTimeout(() => { setZoom(true); }, 1500);
    setTimeout(() => { router.push("/invitacion"); }, 2800);
  };
  

  return (
    <main className="min-h-screen bg-[#f7dcb97d] flex flex-col items-center justify-center p-6 font-wedding">
      
      {/* SECCIÓN SUPERIOR */}
      <header className="text-center animate-fade-in">
        <p className="text-[#a66d4a] text-lg md:text-2xl italic tracking-wide mb-6">
          Lo rumores son ciertos
        </p>
        <h1 className="text-[#a66d4a] text-3xl md:text-4xl tracking-[0.2em] uppercase">
          ¡Nos Casamos!
        </h1>
      </header>

      {/* CONTENEDOR DEL SOBRE */}
      <div className={styles.letterWrapper}>
        <div className={styles.letter}>
          <div className={styles.envelope} onClick={handleOpen}>
            
            {/* TAPA */}
            <svg
              className={`${styles.cover} ${open ? styles.open : ""}`}
              viewBox="0 0 500 300"
            >
              <path d="M 0 0 L 500 0 L 275 150 Q 250 175 225 150 L 0 0 Z" />
                <g className={styles.initialsContainer}>
                  <text x="54%" y="26%" textAnchor="middle" dominantBaseline="middle" className={styles.initials}>
                    C
                  </text>
                  <text x="49%" y="18%" textAnchor="middle" dominantBaseline="middle" className={styles.initials}>
                    L
                  </text>
                </g>
            </svg>

            {/* SELLO PNG (Centrado en la unión) */}
            <div className={`absolute top-1/2 pb-12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-14 duration-700 
                ${styles.sealPulse}
                ${open ? "opacity-0 scale-150 pointer-events-none" : "opacity-100"}`}
              >
              <img 
                src="envelope/sello.png" // 👈 Cambia esto por la ruta de tu archivo
                alt="Sello de boda"
                className="w-20 h-20 md:w-30 md:h-30 object-contain drop-shadow-md"
              />
            </div>

            {/* CARTA INTERNA */}
            <div className={`${styles.letterSheet} ${zoom ? styles.letterUp : ""} ${zoom ? styles.zoomIn : ""}`}>
              <img 
                src="https://images.pexels.com/photos/18322549/pexels-photo-18322549.jpeg" 
                alt="Boda" 
                className="w-72 h-auto mix-blend-multiply opacity-90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR */}
      <footer className="text-center">
        <h2 className="text-[#a66d4a] text-2xl md:text-3xl md:pl-4 tracking-[0.3em] uppercase">
          Laura & Cristian
        </h2>
      </footer>

    </main>
  );
}