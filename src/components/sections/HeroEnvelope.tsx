"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroEnvelope() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);

    // Simula animación + redirección
    setTimeout(() => {
      router.push("/invitacion");
    }, 2000);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-arena">
      {!open ? (
        <div
          onClick={handleOpen}
          className="cursor-pointer bg-white p-10 rounded-xl shadow-xl text-center"
        >
          <h1 className="text-3xl font-bold">D & C</h1>
          <p>Abrir invitación</p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl">
            Los rumores son ciertos... 💍
          </h2>
        </div>
      )}
    </div>
  );
}