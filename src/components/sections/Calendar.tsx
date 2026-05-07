"use client";
import { motion } from "framer-motion";

export default function CalendarSection() {
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const eventDay = 27;

  return (
    <section className="relative bg-[#F2F2E4] md:py-16 px-6 md:px-12 overflow-hidden font-[family-name:var(--font-cormorant)]">
      
      {/* Flores decorativas - Esquinas (Usa tus archivos PNG con transparencia) */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 opacity-80 pointer-events-none">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/596/747/small/rose-flower-and-botanical-leaf-digital-painted-png.png" 
                alt="" className="object-contain w-full h-full" />
        </div>

        <div className="absolute bottom-0 -right-24 w-48 h-48 md:w-64 md:h-64 opacity-80 pointer-events-none">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/047/311/950/small/a-vibrant-flower-png.png" alt="" className="object-contain w-full h-full" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-8">
        
            {/* Lado Izquierdo: El Gran Día (Aparece abajo en móvil) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-[#A64D1B]"
            >
                <h2 className="text-3xl md:text-4xl leading-2 uppercase font-light mb-4">
                    El Gran Día
                </h2>
                <span className="text-4xl md:text-5xl font-[family-name:var(--font-pinyon)] lowercase family-cursive">
                    Junio
                </span>

                {/* Calendario */}
                <div className="w-full mb-8 md:max-w-sm border-t border-b border-[#A64D1B]/30 py-2">
                    <div className="grid grid-cols-7 text-center mb-2 text-sm tracking-wider font-bold">
                        {daysOfWeek.map(day => <div key={day}>{day}</div>)}
                    </div>
                
                    <div className="grid border-t grid-cols-7 text-center gap-y-2 text-lg">
                        {days.map(day => (
                        <div key={day} className="relative flex justify-center items-center">
                            <span className={`${day === eventDay ? 'z-10 text-white' : 'text-zinc-700'}`}>
                            {day}
                            </span>
                            {day === eventDay && (
                            <div className="absolute inset-0 flex justify-center items-center">
                                <svg viewBox="0 0 23 23" className="w-8 h-8 fill-[#A64D1B]">
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
                className="relative flex my-8 justify-center items-end h-[500px] md:h-[450px] w-full"
            >
                {/* Imagen Principal en Arco */}
                <div className="relative w-64 h-96 md:w-70 md:h-[450px] overflow-hidden rounded-full shadow-lg">
                <img 
                    src="https://framerusercontent.com/images/abaLQ4Kzbz9hqZ62puuSyXfb1Y.jpg?scale-down-to=1024&width=1280&height=1920" 
                    alt="El Beso" 
                    className="object-cover w-full h-full"
                />
                </div>

                {/* Imagen Secundaria Flotante */}
                <div className="absolute right-2 md:right-0 w-40 h-52 md:w-48 md:h-64 overflow-hidden shadow-2xl border-4 border-white z-20">
                <img 
                    src="https://framerusercontent.com/images/4FMEJGzrYIoK5h7b4sAvhUoQCG0.jpg?scale-down-to=1024&width=1920&height=2880" 
                    alt="Detalle" 
                    className="object-cover w-full h-full"
                />
                </div>
            </motion.div>

        </div>

    </section>
  );
}