"use client";

import { useState } from "react";

export default function Confirmation() {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/confirm", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    alert("Confirmado 🎉");
  };

  return (
    <section>
      <input
        placeholder="Tu nombre"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Confirmar</button>
    </section>
  );
}