"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MarqueeItem from "./MarqueeItem";
import Logo3S from "@/app/images/logo/logo_3s_white.png";
import LogoBloods from "@/app/images/logo/logo_bloods_white.png";
import LogoAdundas from "@/app/images/logo/logo_adundas_white.png";
import LogoErigo from "@/app/images/logo/logo_erigo_white.png";
import LogoPB from "@/app/images/logo/logo_p_b_white.png";
import LogoHM from "@/app/images/logo/logo_h_m_white.png";
import { StaticImageData } from "next/image";

interface ImageItem {
  src: StaticImageData;
  alt: string;
}

const IMAGES: ImageItem[] = [
  {
    src: Logo3S,
    alt: "Logo 3 Second",
  },
  {
    src: LogoBloods,
    alt: "Logo Bloods",
  },
  {
    src: LogoAdundas,
    alt: "Logo Adundas",
  },
  {
    src: LogoErigo,
    alt: "Logo Erigo",
  },
  {
    src: LogoPB,
    alt: "Logo Pull&Bear",
  },
  {
    src: LogoHM,
    alt: "Logo H&M",
  },
];

export default function ImageMarquee() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(wrapperRef.current, {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: 20,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.play();
  };

  return (
    <div className="w-full overflow-hidden relative group">
      <div
        className="overflow-hidden whitespace-nowrap mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={wrapperRef} className="flex w-max">
          <div className="flex gap-8 px-4 items-center">
            {IMAGES.map((img, i) => (
              <MarqueeItem 
                key={`orig-${i}`} 
                src={img.src} 
                alt={img.alt} />
            ))}
          </div>

          {/* Duplicate */}
          <div className="flex gap-8 px-4 items-center">
            {IMAGES.map((img, i) => (
              <MarqueeItem 
                key={`dup-${i}`} 
                src={img.src} 
                alt={img.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
