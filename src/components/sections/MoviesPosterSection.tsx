"use client";
import Image from "next/image";



export function MoviesPosterSection() {

  const posters = [
    "/posters/image_240x336_1.jpg",
    "/posters/image_240x336_2.jpg",
    "/posters/image_240x336_3.jpg",
    "/posters/image_240x336_4.jpg",
    "/posters/image_240x336_5.jpg",
    "/posters/image_240x336_6.jpg",
    "/posters/image_240x336_7.jpg",
    "/posters/image_240x336_8.jpg",
    "/posters/image_240x336_9.jpg",
    "/posters/image_240x336_11.jpg"
  ];
  
  // const row1 = posters.slice(0, 5); // removed unused
  // const row2 = posters.slice(5, 10); // removed unused

  return (
    <section className="py-24 bg-black overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Eindeloos Entertainment</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Meer dan 50.000+ films en series. Altijd up-to-date met de nieuwste releases in 4K en FHD.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-0 mt-8">
        {/* Single Slider Row */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
          {/* Duplicate the array EXACTLY ONCE (2 sets total) for a seamless 50% translation loop */}
          {[...posters, ...posters].map((src, index) => (
            <div key={index} className="w-[200px] h-[300px] shrink-0 mx-3 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs text-center p-4">
                Poster {index % posters.length + 1}
              </div>
              <Image 
                src={src} 
                alt={`Premium IPTV 4K film & serie poster ${index % posters.length + 1} – bekijk via Premium Dutch IPTV`}
                width={200}
                height={300}
                className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-4">
                <span className="text-white font-bold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  4K / FHD
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
