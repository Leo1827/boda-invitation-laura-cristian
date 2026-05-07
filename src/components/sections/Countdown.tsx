"use client";

import { useCountdown } from "@/hooks/useCountdown";

export default function Countdown() {
  const time = useCountdown("2026-06-27T16:00:00");

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  const timeUnits = [
    { label: "Días", value: days },
    { label: "Horas", value: hours },
    { label: "Min", value: minutes },
    { label: "Seg", value: seconds },
  ];

  return (
    // Añadimos 'relative' y un overflow hidden para el pseudo-elemento
    <section className="bg-[#deb98860] text-[peru] pb-42 pt-10 px-4 flex flex-col items-center justify-center font-[family-name:var(--font-cormorant)] relative overflow-hidden">
      
      {/* 
        Este es el gradiente de desvanecido.
        'before:' crea un elemento extra.
        'bg-gradient-to-t' crea el degradado de abajo hacia arriba.
        'from-[#f3f0e9]' define el color sólido abajo.
        'to-transparent' define la transparencia arriba.
        'h-24' controla qué tan alto llega el efecto.
      */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f3f0e9] via-[#f3f0e9]/90 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Añadimos z-10 para que el texto esté por encima de la sección, pero por debajo del inicio del gradiente si este es muy alto */}
      <div className="flex flex-col items-center justify-center relative z-10">
        <h2 className="text-3xl md:text-4xl uppercase mb-2 opacity-90 font-light tracking-[0.2em]">
          Faltan
        </h2>
        
        <div className="flex gap-6 md:gap-12">
          {timeUnits.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-light mb-2 leading-none">
                {unit.value.toString().padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-widest opacity-80">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}