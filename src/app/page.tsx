"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';


const images = [

  // THE MET 
  "IMG_0024.jpg", "IMG_0025.jpg", "IMG_0030.jpg",
  "IMG_0057.jpg", "IMG_0062.jpg", "IMG_0064.jpg",
  "IMG_0066.jpg", "IMG_0067.jpg",

  "IMG_0084.jpg", "IMG_0085.jpg", "IMG_0086.jpg", "IMG_0088.jpg",
  "IMG_0094.jpg", "IMG_0101.jpg", "IMG_0105.jpg",

  "IMG_0174.jpg", "IMG_0177.jpg", "IMG_9755.jpg", "IMG_9766.jpg",
  "IMG_9767.jpg", "IMG_9772.jpg", "IMG_9773.jpg", "IMG_9775.jpg",


  "IMG_9776.jpg", "IMG_9779.jpg", "IMG_9785.jpg", "IMG_9788.jpg",
  "IMG_9791.jpg", "IMG_9793.jpg", "IMG_9796.jpg", "IMG_9797.jpg",
  "IMG_9798.jpg", "IMG_9799.jpg", "IMG_9800.jpg", "IMG_9801.jpg",

  "IMG_9806.jpg",
  "IMG_9814.jpg", "IMG_9815.jpg", "IMG_9816.jpg", "IMG_9826.jpg",
  "IMG_9847.jpg", "IMG_9853.jpg", "IMG_9869.jpg", "IMG_9870.jpg",
  "IMG_9922.jpg"
];

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="h-dvh overflow-y-auto overflow-x-hidden bg-[#ebebeb] relative selection:bg-black selection:text-white">
      <audio ref={audioRef} src="/images/nyc/ambience.m4a" loop />
      <div className="fixed bottom-8 right-8 z-100 mix-blend-difference text-white font-sans text-xs tracking-widest uppercase flex flex-col items-end gap-3">
        <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
          {/* <span>Vol</span> */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24 h-1 accent-white cursor-pointer bg-white rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
          />
        </div>
        <button
          onClick={toggleAudio}
          className="hover:opacity-50 transition-opacity cursor-pointer"
        >
          {isPlaying ? "[ Pause Audio ]" : "[ Play Audio ]"}
        </button>
      </div>


      {/* <div className="flex flex-col items-center"> */}
      <div className="fixed inset-0 z-50 pointer-events-none flex flex-col ml-4 mt-4">
        <h1 className="text-7xl font-serif italic tracking-tighter leading-none">nyc.</h1>
        <p className="opacity-80 text-sm tracking-widest mt-2">04.30 — 05.04</p>
      </div>


      <div className="w-full px-4 md:px-16 lg:px-32 grid grid-cols-3 gap-x-6 gap-y-16 pb-64 mt-16">
        {/* <div className="fixed top-72 left-8 z-50 pointer-events-none mix-blend-difference text-white flex flex-col items-start">
          <h1 className="text-7xl font-serif italic tracking-tighter leading-none mb-1">new york city.</h1>
          <p className="opacity-80 text-sm tracking-widest mt-2">04.30 — 05.04</p>
        </div> */}


        {images.map((img, i) => (
          <div
            key={img}
            className={`relative shadow-xl shadow-black/10 hover:z-40 cursor-pointer w-full group transition-transform duration-500 ${i % 3 === 1 ? "translate-y-24 md:translate-y-48" : i % 3 === 2 ? "translate-y-12 md:translate-y-24" : ""
              }`}
          >
            <div className="relative w-full aspect-square overflow-hidden bg-black/5 grayscale-80 group-hover:grayscale-0 transition-all duration-700">
              <Image
                src={`/images/nyc/${img}`}
                alt={img}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                quality={75}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-dvh overflow-hidden relative">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/images/nyc/test.mp4" type="video/mp4" />
        </video>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white">
          <h2 className="text-4xl font-serif leading-tight">
            subway chimes, airpod maxes, wired earbuds, airpods, honking at every single intersection, skyscrapers, scaffolding, pigeons, tweakers, arguments, delivery drivers, people watching
          </h2>
        </div>
      </div>
    </main>
  );
}
