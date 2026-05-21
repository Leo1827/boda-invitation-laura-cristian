"use client";

import { useState } from "react";

export default function Confirmation() {
  const whatsappNumber = "573023120469"; // TU NÚMERO

  const handleWhatsAppConfirm = () => {
    if (!name.trim()) return;

    const message = `
      Hola ✨
      Mi nombre es ${name} y deseo confirmar mi asistencia.
      Será un honor acompañarlos en este día tan especial 🤍
        `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const [name, setName] = useState("");

  /* =====================================================
     ENVIAR CONFIRMACIÓN
  ===================================================== */
  const handleSubmit = async () => {
    await fetch("/api/confirm", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    alert("Confirmado 🎉");
  };

  return (
    <section className="relative w-full overflow-hidden">

      {/* ===================================================
         OVERLAY OSCURO
      =================================================== */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* ===================================================
         LÍNEAS DECORATIVAS
      =================================================== */}
      <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-[0] z-20">

        <svg
          viewBox="0 0 1440 160"
          className="w-full h-32"
          preserveAspectRatio="none"
        >

          {/* Línea 1 */}
          <path
            d="M0,90 C300,40 1100,150 1440,80"
            fill="none"
            stroke="#bfa880"
            strokeWidth="3"
            opacity="0.6"
          />

          {/* Línea 2 */}
          <path
            d="M0,60 C400,130 900,10 1440,100"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.4"
          />

          {/* Línea 3 */}
          <path
            d="M0,110 C500,20 1000,180 1440,70"
            fill="none"
            stroke="#a8c0b8"
            strokeWidth="4"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* ===================================================
         FORMA SUPERIOR
      =================================================== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-20">

        <svg
          viewBox="0 0 1440 120"
          className="block w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32V0H0Z"
          />
        </svg>
      </div>

      {/* ===================================================
         FONDO PRINCIPAL
      =================================================== */}
      <div
        className="
          relative
          h-[850px]
          bg-cover
          bg-center
          flex
          items-center
          justify-center
        "
        style={{
          backgroundImage: "url('/envelope/image_6.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* =================================================
           CONTENIDO
        ================================================= */}
        <div className="relative z-30 text-center text-white px-6 max-w-4xl">

          {/* TÍTULO */}
          <h2
            className="
              text-3xl
              md:text-5xl
              font-light
              leading-relaxed
              font-[family-name:var(--font-cormorant)]
            "
          >
            Lo más importante de este gran día es compartirlo con las personas que amamos.
          </h2>

          {/* TEXTO */}
          <p
            className="
              max-w-2xl
              mx-auto
              mt-6
              text-lg
              md:text-xl
              opacity-90
              font-light
            "
          >
            ¡Reserva la fecha! Estamos contando los días para celebrar juntos.
          </p>

          {/* =================================================
             ICONO CALENDARIO
          ================================================= */}
          <div className="flex justify-center mt-6">

            <svg
              className="w-16 h-16 text-[#bfa880] animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10m-13 9h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          {/* =================================================
             FORMULARIO
          ================================================= */}
          <div className="mt-6 flex flex-col items-center gap-5">

            {/* INPUT */}
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full
                max-w-md
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-full
                px-6
                py-4
                text-white
                placeholder:text-white/60
                outline-none
                focus:border-[#bfa880]
                transition
              "
            />

            {/* BOTÓN */}
            <button
              onClick={handleWhatsAppConfirm}
              disabled={!name.trim()}
              className="
                group
                relative
                overflow-hidden
                bg-[#bfa880]
                hover:bg-[#a88f6c]
                disabled:bg-white/10
                disabled:border
                disabled:border-white/10
                disabled:text-white/40
                text-black
                px-10
                py-4
                rounded-full
                shadow-2xl
                transition-all
                duration-500
                hover:scale-105
                font-light
                tracking-[0.15em]
                uppercase
                flex
                items-center
                gap-3
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                "
              />

              {/* Icono WhatsApp */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 relative z-10"
              >
                <path d="M20.52 3.48A11.8 11.8 0 0012.07 0C5.52 0 .2 5.32.2 11.87c0 2.1.55 4.15 1.6 5.97L0 24l6.36-1.67a11.87 11.87 0 005.71 1.46h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.43-8.44zM12.08 21.8a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.77.99 1-3.67-.24-.38a9.88 9.88 0 01-1.52-5.28c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.9 7c0 5.46-4.44 9.9-9.9 9.9zm5.43-7.43c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.15-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.53.08-.8.38-.27.3-1.04 1.01-1.04 2.47s1.06 2.88 1.2 3.08c.15.2 2.1 3.2 5.08 4.48.7.3 1.26.48 1.7.62.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35z" />
              </svg>

              <span className="relative z-10">
                Confirmar
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================
         FORMA INFERIOR
      =================================================== */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">

        <svg
          viewBox="0 0 1440 120"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            fill="#F5F2ED"
            d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32V0H0Z"
          />
        </svg>
      </div>
    </section>
  );
}