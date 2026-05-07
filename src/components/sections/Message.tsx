"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Message() {
  return (
    <section className="relative w-full bg-[#f3f0e9] py-20 overflow-hidden flex items-center justify-center min-h-[350px]">
      
      {/* Flor Izquierda con entrada desde la izquierda */}
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

      {/* Contenedor de Texto Central con aparición gradual */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl text-center flex flex-col gap-4"
      >
        <p className="text-[#4a4a4a] font-[family-name:var(--font-cormorant)] text-lg md:text-xl lg:text-lg leading-relaxed md:px-0 px-16">
          Con inmensa felicidad compartimos que hemos decidido dar el gran paso y unir nuestras vidas en matrimonio.
        </p>
        
        <p className="text-[#a6603f] font-[family-name:var(--font-pinyon)] text-3xl md:text-4xl lg:text-3xl px-12 md:px-32">
          Los invitamos a acompañarnos en este día tan especial.
        </p>
      </motion.div>

      {/* Flor Derecha con entrada desde la derecha */}
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

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5"></div>
    </section>
  );
}