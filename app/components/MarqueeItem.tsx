"use client";

import Image from "next/image";

interface MarqueeItemProps {
  src: string;
  alt: string;
}

export default function MarqueeItem({ src, alt }: MarqueeItemProps) {
  return (
    <div className="relative w-[150px] h-24 py-10 rounded-xl overflow-hidden shadow-lg shrink-0 transition-all duration-300 brightness-50 hover:brightness-80 opacity-90 hover:scale-105 cursor-pointer">
      <Image src={src} alt={alt} className="w-30 h-10 object-contain" />

      <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2 text-center text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity">
        {alt}
      </div>
    </div>
  );
}
