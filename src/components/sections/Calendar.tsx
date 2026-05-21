"use client";
import { motion } from "framer-motion";

export default function CalendarSection() {
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
    /*
    Agosto 2026 empieza en sábado.
    Dom=0 Lun=1 Mar=2 Mié=3 Jue=4 Vie=5 Sáb=6
    */
  const firstDayOffset = 6;
  const eventDay = 8;

  return (
    <section className="relative bg-[#f3f0e9] md:py-16 px-6 md:px-12 overflow-hidden font-[family-name:var(--font-cormorant)]">
      
      {/* Flores decorativas - Esquinas (Usa tus archivos PNG con transparencia) */}
        <div className="absolute top-48 md:top-0 left-0 w-32 h-32 md:w-64 md:h-[680px] object-cover
                sepia-[0.25]
                saturate-[0.65]
                brightness-[1.08]
                contrast-[0.88]
                hue-rotate-[2deg]
                opacity-30 pointer-events-none">
            <img src="/envelope/hojas_palmera.png" 
                alt="" className="object-contain w-full md:h-full h-[900px]" />
        </div>

        <div className="absolute bottom-0 -right-24 w-48 h-48 md:w-64 md:h-64 object-cover
                sepia-[0.25]
                saturate-[0.65]
                brightness-[1.08]
                contrast-[0.88]
                hue-rotate-[2deg]
                opacity-40 mr-8 pointer-events-none">
            <img src="/envelope/palmera_2.png" alt="" className="object-contain w-full h-full" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-8 mb-4">
        
            {/* Lado Izquierdo: El Gran Día (Aparece abajo en móvil) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-[#A64D1B]"
            >
                <h2 className="text-3xl md:text-4xl leading-2 uppercase font-light mb-0 mt-4">
                    El Gran Día
                </h2>
                <span className="text-5xl md:text-5xl font-[family-name:var(--font-pinyon)] lowercase family-cursive">
                    Agosto
                </span>

                {/* Calendario */}
                <div className="w-full mb-8 md:max-w-sm border-t border-b border-[#A64D1B]/30 py-2">
                    <div className="grid grid-cols-7 text-center mb-2 text-sm tracking-wider font-bold">
                        {daysOfWeek.map(day => <div key={day}>{day}</div>)}
                    </div>
                
                    <div className="grid border-t grid-cols-7 text-center text-lg">

                        {/* ESPACIOS VACÍOS */}
                        {Array.from({ length: firstDayOffset }).map((_, i) => (
                            <div key={`empty-${i}`} />
                        ))}

                        {/* DÍAS */}
                        {days.map(day => (
                            <div
                            key={day}
                            className="relative flex justify-center items-center h-8"
                            >
                            <span
                                className={`
                                relative z-10
                                ${day === eventDay ? "text-white" : "text-zinc-700"}
                                `}
                            >
                                {day}
                            </span>

                            {day === eventDay && (
                                <div className="absolute inset-0 flex justify-center items-center">
                                <svg
                                    viewBox="0 0 23 23"
                                    className="w-8 h-8 fill-[#A64D1B]"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                </div>
                            )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Lado Derecho: Fotos (Aparece arriba en móvil) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex justify-center items-end h-[400px] md:h-[450px] w-full"
            >
                {/* Imagen Principal en Arco */}
                <div className="relative w-64 h-96 md:w-70 md:h-[450px] overflow-hidden rounded-full shadow-lg">
                <img 
                    src="/envelope/image_iglesia.webp" 
                    alt="El Beso" 
                    className="object-cover w-full h-full"
                />
                </div>

                {/* Imagen Secundaria Flotante */}
                <div className="absolute right-2 md:right-0 w-40 h-52 md:w-48 md:h-64 overflow-hidden shadow-2xl border-4 border-white z-20">
                <img 
                    src="/envelope/image_5.webp" 
                    alt="Detalle" 
                    className="object-cover w-full h-full"
                />
                </div>
            </motion.div>

        </div>

    </section>
  );
}