"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-b-1 relative h-screen w-full overflow-hidden flex flex-col items-center justify-start pt-20 md:pt-18">
      {/* Contenedor de Imagen de Fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/32792352/pexels-photo-32792352.jpeg" // Reemplaza con tu ruta
          alt="Laura y cristian"
          fill
          priority
          className="object-cover object-center brightness-[0.80]"
        />
      </div>

      {/* Contenido de Texto */}
      <div className="text-white px-4 flex flex-col items-center">
        <p className="font-[family-name:var(--font-pinyon)] italic text-xl md:text-4xl mb-4 drop-shadow-md">
          Nuestra boda
        </p>
        
        <h1 className="flex flex-col items-center gap-2 drop-shadow-lg font-[family-name:var(--font-cormorant)]">
          <span className="text-5xl md:text-6xl font-light  tracking-widest uppercase">
            Laura &
          </span>
          <span className="text-5xl md:text-6xl font-light tracking-widest uppercase">
            Cristian
          </span>
        </h1>

        <div className="mt-8 flex items-center gap-4 text-lg md:text-xl font-[family-name:var(--font-pinyon)] tracking-[0.2em] drop-shadow-md">
          <span className="border-t border-white/40 w-8 md:w-12 block"></span>
          27 · 06 · 2026
          <span className="border-t border-white/40 w-8 md:w-12 block"></span>
        </div>
      </div>
    </section>
  );
}