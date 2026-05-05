"use client";

import { useCountdown } from "@/hooks/useCountdown";

export default function Countdown() {
  const time = useCountdown("2026-12-20T16:00:00");

  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  return (
    <div className="text-center">
      <h2 className="text-xl">Faltan</h2>
      <p className="text-4xl font-bold">{days} días</p>
    </div>
  );
}