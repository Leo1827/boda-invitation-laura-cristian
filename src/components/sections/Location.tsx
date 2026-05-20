"use client";

const locations = [
  {
    title: "CEREMONIA",
    time: "4:00 PM",
    place: "Iglesia de Santa Cruz",
    mapUrl: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B47C54" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
      <path d="M12 2v3m-2-1.5h4" /> <path d="M12 5L5 11v11h14V11L12 5z" /> <path d="M10 22v-4a2 2 0 0 1 4 0v4" /> <path d="M12 11v2" /> </svg>

    ),
  },
  {
    title: "RECEPCIÓN",
    time: "6:00 PM",
    place: "Hacienda San Nicolás",
    mapUrl: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B47C54" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
        <path d="M8 16c1.5 0 3-1 3-3.5V4H5v8.5C5 15 6.5 16 8 16z" />
        <path d="M8 16v5m-3 0h6" />
        
        <path d="M16 16c-1.5 0-3-1-3-3.5V4h6v8.5c0 2.5-1.5 3.5-3 3.5z" />
        <path d="M16 16v5m-3 0h6" />
        
        <path d="M12 7c0-1 1-1.5 1.5-0.5.5-1 1.5-0.5 1.5.5 0 1-1.5 2-1.5 2s-1.5-1-1.5-2z" fill="#B47C54" stroke="none" />
      </svg>

    ),
  },
];

export default function Location() {
  return (
    <section className="relative w-full py-32 font-[family-name:var(--font-cormorant)] px-4 bg-[#F5F2ED] overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
      
      {/* Flores decorativas - Esquinas (Usa tus archivos PNG con transparencia) */}
      <div className="absolute top-0 -left-12 w-48 h-48 md:w-64 md:h-64 opacity-80 pointer-events-none rotate-90">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/047/311/950/small/a-vibrant-flower-png.png" 
              alt="" className="object-contain w-full h-full" />
      </div>

      <div className="absolute bottom-0 -right-1 w-48 h-48 md:w-64 md:h-64 opacity-80 pointer-events-none rotate-180">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/009/596/747/small/rose-flower-and-botanical-leaf-digital-painted-png.png" alt="" className="object-contain w-full h-full" />
      </div>

      {/* TÍTULO PRINCIPAL DE LA SECCIÓN */}
      <div className="relative z-10 text-center mb-10">
        <span className="text-[#B47C54] uppercase tracking-[0.3em] text-sm mb-4 block font-light">Donde comienza nuestra historia</span>
        <h1 className="text-4xl md:text-6xl font-light italic text-[#4A4A4A] serif">La Guajira</h1>
        <div className="w-24 h-[1px] bg-[#B47C54] mx-auto mt-6 opacity-50"></div>
      </div>

      {/* Contenedor Principal */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-62 relative z-10">
        {locations.map((loc, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Icono */}
            <div className="opacity-80 mb-4">{loc.icon}</div>

            {/* Título con estilo Serif elegante */}
            <h2 className="text-4xl md:text-3xl font-light leading-2 uppercase  text-[#B47C54] mb-6">
              {loc.title}
            </h2>

            {/* Detalles */}
            <div className="space-y-2 mb-2 font-light text-[#4A4A4A]">
              <p className="text-xl font-bold">{loc.time}</p>
              <p className="text-lg font-bold">{loc.place}</p>
            </div>

            {/* Botón con sombra profesional */}
            <a
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-14 py-1 bg-[#A65324] text-white rounded-md shadow-[4px_4px_10px_rgba(0,0,0,0.3)] hover:bg-[#8B4513] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              Ver mapa
            </a>
          </div>
        ))}
      </div>

      {/* Decoración Floral (Opcional - podrías usar tus imágenes aquí) */}
      <div className="absolute left-0 bottom-0 w-32 h-64 md:w-48 md:h-96 opacity-40 pointer-events-none">
        {/* Aquí iría la imagen lateral izquierda */}
      </div>
      <div className="absolute right-0 bottom-0 w-32 h-64 md:w-48 md:h-96 opacity-40 pointer-events-none transform scale-x-[-1]">
        {/* Aquí iría la imagen lateral derecha */}
      </div>

            {/* 
        Este es el gradiente de desvanecido.
        'before:' crea un elemento extra.
        'bg-gradient-to-t' crea el degradado de abajo hacia arriba.
        'from-[#f3f0e9]' define el color sólido abajo.
        'to-transparent' define la transparencia arriba.
        'h-24' controla qué tan alto llega el efecto.
      */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#deb98860] via-[#f3f0e9]/90 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}