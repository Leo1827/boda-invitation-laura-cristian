"use client";

import { useCountdown } from "@/hooks/useCountdown";

export default function Countdown() {
  // Asumiendo que useCountdown devuelve los ms restantes
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
    <section className="bg-[#deb98860] text-[peru] py-12 px-4 flex flex-col items-center justify-center font-[family-name:var(--font-cormorant)]">
      <h2 className="text-3xl md:text-4xl tracking-[aem] uppercase mb-10 opacity-90 font-light">
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
    </section>
  );
}