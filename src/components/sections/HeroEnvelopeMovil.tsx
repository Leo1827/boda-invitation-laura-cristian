"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroEnvelopeMovil() {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // El zoom ocurre después de que la carta se ha extraído completamente
    setTimeout(() => {
      setIsZoomed(true);
    }, 2000);

    setTimeout(() => {
      router.push("/invitacion");
    }, 2000);
  };

  return (
    <>
      <style>{`
        html, body {
          overflow: hidden;
          height: 100%;
          background-image: url("/envelope/fondo.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-color: #b89c86;
          background-blend-mode: multiply;

          margin: 0;
        }

        .fondoCarton{
          background-image: url("/envelope/fondo.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-color: #b89c86 !important;
          background-blend-mode: multiply;
        }

        .perspective-2000 { perspective: 2000px; }

        /* TAPA */
        .flap-3d {
          transform-origin: top;
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 45;
        }
        .flap-3d.open {
          transform: rotateX(160deg);
          z-index: 10; 
        }

        /* LA CARTA */
        .letter-slide {
          background-image: url("/envelope/fondo.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;

          background-color: #fff;
          background-blend-mode: multiply;

          padding: 15px;

          transition: 
            transform 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.8s,
            z-index 0s 1.2s; 

          z-index: 5;

          overflow: hidden; /* IMPORTANTE */
        }

        /* Cuando abre: se extrae y SOBREPONE a la tapa */
        .extract {
          z-index: 80; 
          transform: translateY(-120px);
        }

        .initials-text {
          font-family: 'Times New Roman', serif;
          user-select: none;
        }
      `}</style>

      <main className="fixed inset-0 w-full h-[90dvh] flex items-center justify-center overflow-hidden">
        
        <div 
          className="relative w-[100%] max-w-[620px] h-[50%] mt-50 flex items-center justify-center cursor-pointer"
          onClick={handleOpen}
        >
          
          {/* 2. LA CARTA (PHOTO) */}
          <div className={`absolute w-[90%] h-[94%] letter-slide flex items-center justify-center
            ${isOpen ? 'extract' : 'z-20' } 
            ${isZoomed ? 'zoom' : ''}`}>
            <img
              src="/envelope/imagen_1.jpg"
              alt="Boda"
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
          </div>

          {/* 3. TAPA SUPERIOR */}
          <div className="absolute top-0 left-0 w-[100%] h-[40%] perspective-2000 pointer-events-none z-40">
            <div className={`flap-3d relative w-full h-full ${isOpen ? "open" : ""}`}>
              
              <svg
                viewBox="0 0 500 250"
                preserveAspectRatio="none"
                className="w-full h-full block drop-shadow-xl"
              >
                <defs>
                  <pattern
                    id="paperTexture"
                    patternUnits="userSpaceOnUse"
                    width="500"
                    height="250"
                  >
                    <image
                      href="/envelope/fondo.jpg"
                      x="0"
                      y="0"
                      width="800"
                      height="250"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </pattern>
                </defs>

                {/* TEXTURA */}
                <path
                  d="M 0 0 L 500 0 L 250 250 L 0 0 Z"
                  fill="url(#paperTexture)"
                />

                {/* COLOR MULTIPLY */}
                <path
                  d="M 0 0 L 500 0 L 250 250 L 0 0 Z"
                  fill="#b89c85"
                  opacity="0.97"
                  style={{ mixBlendMode: "multiply" }}
                />
              </svg>

              {/* INICIALES */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="relative translate-y-[-10%] scale-75">
                  <span className="text-[100px] initials-text text-[#7a6451]/30 italic leading-none block">
                    A
                  </span>

                  <span className="text-[100px] initials-text text-[#7a6451]/30 italic leading-none block absolute top-[30px] left-[25px]">
                    P
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. FRONTALES (LATERALES E INFERIOR) */}
          <div className="absolute inset-0 z-30 pointer-events-none">
             {/* Lateral Izquierdo */}
             <div className="absolute inset-0 fondoCarton" style={{ clipPath: 'polygon(0% 0%, 50% 35%, 0% 100%)' }} />
             {/* Lateral Derecho */}
             <div className="absolute inset-0 fondoCarton" style={{ clipPath: 'polygon(100% 0%, 50% 35%, 100% 100%)' }} />
             {/* Triángulo Inferior */}
             <div className="absolute inset-0 fondoCarton" style={{ clipPath: 'polygon(0% 100%, 50% 30%, 100% 100%)' }} />
          </div>

          {/* 5. SELLO */}
          <div
            className={`absolute animate-pulse left-1/2 top-[35%]
            -translate-x-1/2 -translate-y-1/2
            z-[60] transition-opacity duration-1000 ease-in-out
            ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <div className="relative flex flex-col items-center">
              <img
                src="/envelope/sello.png"
                alt="Sello"
                className="w-24 h-24 object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)]"
              />
              {!isOpen && (
                <div className="mt-2 text-[#5e4d3e] text-[9px] font-bold tracking-[0.4em] uppercase animate-pulse whitespace-nowrap">
                  Toca para abrir
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}