"use client";

export default function Message() {
  return (
    <section className="relative w-full bg-[#f3f0e9] py-20 overflow-hidden flex items-center justify-center min-h-[350px]">
      
      {/* Flor Izquierda - Se oculta o se ajusta en móviles muy pequeños */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-42 md:w-32 lg:w-36 opacity-90 select-none">
        <img 
          src="/envelope/flor4.png" // Asegúrate de poner tu SVG/PNG en la carpeta public
          alt="Decoración floral izquierda"
          className="w-20 md:w-52 h-auto object-contain"
        />
      </div>

      {/* Contenedor de Texto Central */}
      <div className="relative z-10 max-w-2xl text-center flex flex-col gap-4">
        <p className="text-[#4a4a4a] font-serif text-lg md:text-xl lg:text-lg leading-relaxed md:px-0 px-16">
          Con inmensa felicidad compartimos que hemos decidido dar el gran paso y unir nuestras vidas en matrimonio.
        </p>
        
        <p className="text-[#a6603f] font-[family-name:var(--font-pinyon)] text-3xl md:text-4xl lg:text-3xl px-12 md:px-32">
          Los invitamos a acompañarnos en este día tan especial.
        </p>
      </div>

      {/* Flor Derecha */}
      <div className="absolute right-1 top-1/2 -translate-y-1/2 w-32 md:w-48 lg:w-64 opacity-90 select-none">
        <img
          src="/envelope/flor5.png" // Asegúrate de poner tu SVG/PNG en la carpeta public
          alt="Decoración floral derecha"
          className="w-52 ml-12 md:ml-28 h-auto object-contain"
        />
      </div>

      {/* Estilo extra para simular el borde de la imagen si lo deseas */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5"></div>
    </section>
  );
}