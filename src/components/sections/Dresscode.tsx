"use client";

import { useState } from "react";

export default function DressCode() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 font-sans text-neutral-800">
      {/* Botón de Apertura Elegante */}
      <div className="text-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative inline-flex flex-col items-center justify-center px-8 py-4 overflow-hidden border border-neutral-300 rounded-none bg-transparent transition-all duration-500 ease-out hover:border-neutral-800 focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className="font-serif text-xs tracking-[0.2em] uppercase text-neutral-500 group-hover:text-neutral-900 transition-colors duration-300">
            Código de Vestimenta
          </span>
          <span className="font-serif text-xl tracking-wide text-neutral-800 mt-1">
            Boda en la Playa
          </span>
          
          {/* Indicador sutil de despliegue */}
          <div className="mt-3 relative w-4 h-4 text-neutral-400 group-hover:text-neutral-800 transition-colors duration-300">
            <span className={`absolute inset-0 top-[6px] left-1 w-2 h-[1px] bg-current transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-[35deg]'}`}></span>
            <span className={`absolute inset-0 top-[6px] right-1 w-2 h-[1px] bg-current transition-transform duration-300 ${isOpen ? '-rotate-45' : '-rotate-[35deg]'}`}></span>
          </div>
        </button>
      </div>

      {/* Contenedor Desplegable Animado */}
      <div
        className={`grid transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-12" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden border border-neutral-100 bg-neutral-50/50 backdrop-blur-sm p-6 sm:p-10 rounded-none shadow-sm">
          
          {/* Grid Principal: Caballeros & Damas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative">
            
            {/* Divisor vertical para pantallas grandes */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-200 -translate-x-1/2" />

            {/* SECCIÓN: CABALLEROS */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-3">
                {/* Icono minimalista de traje (Thin stroke) */}
                <svg className="w-5 h-5 text-neutral-600 stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 3h16l-3 9H7L4 3z" />
                  <path d="M12 3v18M7 12v9m10-9v9" />
                </svg>
                <h3 className="font-serif text-2xl tracking-wide text-neutral-800">Caballeros</h3>
              </div>

              <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
                <p className="font-medium text-neutral-800 tracking-wide uppercase text-[11px] text-neutral-500">Permitido & Sugerido</p>
                <ul className="space-y-2.5 list-none pl-0">
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">✓</span>
                    <span>Formal de playa / Semi-formal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">✓</span>
                    <span>Traje ligero o combinación de pantalón de vestir con saco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">✓</span>
                    <span>Camisa formal o guayabera elegante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">✓</span>
                    <span>Corbata opcional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">✓</span>
                    <span>Todos los colores y patrones son bienvenidos</span>
                  </li>
                </ul>

                <div className="pt-2 space-y-2">
                  <p className="font-medium text-neutral-800 tracking-wide uppercase text-[11px] text-neutral-500">A evitar</p>
                  <ul className="space-y-1.5 text-neutral-500 text-xs">
                    <li className="flex items-center gap-2">
                      <span className="text-red-400/80">✕</span>
                      <span className="line-through decoration-neutral-300">No jeans</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400/80">✕</span>
                      <span className="line-through decoration-neutral-300">No camisas hawaianas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SECCIÓN: DAMAS */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-3">
                {/* Icono minimalista de vestido (Thin stroke) */}
                <svg className="w-5 h-5 text-neutral-600 stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M8 3h8l2 5-3 3v10H9V11L6 8l2-5z" />
                </svg>
                <h3 className="font-serif text-2xl tracking-wide text-neutral-800">Damas</h3>
              </div>

              <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
                <p className="font-medium text-neutral-800 tracking-wide uppercase text-[11px] text-neutral-500">Permitido & Sugerido</p>
                <ul className="space-y-2.5 list-none pl-0">
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">✓</span>
                    <span>Formal veraniego / Summer chic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">✓</span>
                    <span>Vestidos largos o midi, telas ligeras y elegantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neutral-400 mt-0.5">✓</span>
                    <span>Colores vivos, tropicales o estampados (¡todos son bienvenidos!)</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <p className="font-medium text-neutral-800 tracking-wide uppercase text-[11px] text-neutral-500 mb-2">Restricción especial</p>
                  <div className="flex items-start gap-2.5 bg-stone-100 p-3 border-l-2 border-stone-400 text-xs text-stone-700">
                    <span className="text-stone-500 font-serif">i</span>
                    <p>
                      <strong className="text-stone-900 font-normal">No color blanco:</strong> Reservado exclusivamente para la novia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Nota de Cierre / Concepto */}
          <div className="mt-10 pt-6 border-t border-neutral-200 text-center">
            <p className="font-serif italic text-sm text-neutral-800 tracking-wide">
              La idea es un look elegante pero fresco, acorde a una boda en la <b>La Guajira</b>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}