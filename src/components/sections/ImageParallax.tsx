"use client";

interface ImageParallaxProps {
  imageUrl?: string;
  height?: string; // Permite valores como '400px', '50vh', etc.
}

export default function ImageParallax({ 
  imageUrl = "/envelope/imagen_3.jpg", 
  height = "400px" 
}: ImageParallaxProps) {
  return (
    <section 
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ height: height }}
    >
      <div
        className="absolute  inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundAttachment: "fixed", // Clave para el efecto parallax clásico
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay opcional para mejorar legibilidad si luego decides poner texto */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </section>
  );
}