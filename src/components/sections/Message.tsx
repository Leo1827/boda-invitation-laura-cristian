"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Message() {
  return (
    <section className="relative bg-[#f3f0e9] w-full py-20 overflow-hidden flex items-center justify-center min-h-[350px]">
      
      {/* 
        Este es el gradiente de desvanecido.
        'before:' crea un elemento extra.
        'bg-gradient-to-t' crea el degradado de abajo hacia arriba.
        'from-[#f3f0e9]' define el color sólido abajo.
        'to-transparent' define la transparencia arriba.
        'h-24' controla qué tan alto llega el efecto.
      */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#deb98860] via-[#f3f0e9]/90 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Flor Izquierda */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.9, x: -60 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-32 lg:w-42 select-none"
      >
        <Image 
          src="/envelope/florCinco.png" 
          alt="Decoración floral izquierda"
          width={500}
          height={500}
          className="ml-6 w-72 h-auto object-contain"
        />
      </motion.div>

      {/* Contenedor de Texto Central */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl text-center flex flex-col gap-4"
      >
        <p className="text-[#4a4a4a] font-[family-name:var(--font-cormorant)] text-lg md:text-xl lg:text-lg leading-relaxed md:px-0 px-16">
          “Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora…”
        </p>
        
        <p className="text-[#a6603f] font-[family-name:var(--font-pinyon)] text-2xl md:text-4xl lg:text-3xl px-8 md:px-14">
          “Mejores son dos que uno… porque si cayera el uno, levantará al otro… y cordón de tres dobleces no se romperá.”
            — Eclesiastés 3:1 & 4:9-12
        </p>
      </motion.div>

      {/* Flor Derecha */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute right-1 top-1/2 -translate-y-1/2 w-32 md:w-48 lg:w-64 select-none"
      >
        <Image
          src="/envelope/flor5.png" 
          alt="Decoración floral derecha"
          width={500}
          height={500}
          className="w-52 ml-12 md:ml-28 h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}