"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const handleRestart = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setPlaying(true);
  };

  return (
    <section className="border-b-1 relative h-screen w-full overflow-hidden flex flex-col items-center justify-start pt-20 md:pt-18">

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        {/* Cambia esta canción por la tuya */}
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>

      {/* Fondo del mar */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.pexels.com/photos/7070907/pexels-photo-7070907.jpeg"
          alt="Mar"
          fill
          priority
          className="object-cover object-center brightness-[0.55]"
        />
      </div>

      {/* Imagen principal */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">

        {/* CONTENEDOR CON DESVANECIDO */}
        <div
          className="
            relative
            w-[85%]
            h-[78%]
            md:w-[45%]
            md:h-[80%]
            overflow-hidden

          
          "
        >
          <Image
            src="/envelope/imagen_1.jpg"
            alt="Daniela y Cristian"
            fill
            priority
            className="
              object-cover
              object-center
              scale-105
            "
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Texto */}
      <div className="relative z-10 text-white px-4 flex flex-col items-center">

        <p className="font-[family-name:var(--font-pinyon)] italic text-4xl md:text-4xl mb-4 drop-shadow-md">
          Nuestra boda
        </p>

        <h1 className="flex flex-col items-center gap-2 drop-shadow-lg font-[family-name:var(--font-cormorant)]">
          <span className="text-5xl md:text-6xl font-light tracking-widest uppercase">
            Daniela &
          </span>

          <span className="text-5xl md:text-6xl font-light tracking-widest uppercase">
            Cristian
          </span>
        </h1>

        <div className="mt-8 flex items-center gap-4 text-lg md:text-xl font-[family-name:var(--font-pinyon)] tracking-[0.2em] drop-shadow-md">
          <span className="border-t border-white/80 w-8 md:w-12 block"></span>
          27 · 06 · 2026
          <span className="border-t border-white/80 w-8 md:w-12 block"></span>
        </div>

        {/* REPRODUCTOR */}
        <div className="mt-[24rem] md:mt-72 flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full shadow-2xl">

          {/* Play / Pause */}
          <button
            onClick={handlePlayPause}
            className="
              w-12 h-12
              rounded-full
              bg-white/20
              hover:bg-white/30
              transition-all
              duration-300
              flex items-center justify-center
            "
          >
            {playing ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-1" />
            )}
          </button>

          {/* Reiniciar */}
          <button
            onClick={handleRestart}
            className="
              w-11 h-11
              rounded-full
              bg-white/10
              hover:bg-white/20
              transition-all
              duration-300
              flex items-center justify-center
            "
          >
            <RotateCcw className="w-4 h-4 text-white" />
          </button>

          {/* Texto */}
          <div className="flex flex-col leading-none">
            <span className="text-xs uppercase tracking-[0.25em] text-white/60">
              Reproduciendo
            </span>

            <span className="text-sm md:text-base font-light tracking-wide">
              Nuestra canción
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}