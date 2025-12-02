"use client";

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { url } from "inspector";

gsap.registerPlugin(ScrollTrigger);

const portraits = [
  {
    url: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=800&h=800&q=90&fit=crop&crop=faces&https%3A%2F%2Fimages.unsplash.com%2Fphoto-1524502397800-2eeaad7c3fe5%3Fq=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casual",
  },
  {
    url: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=800&h=800&q=90&fit=crop&crop=faces&https%3A%2F%2Fimages.unsplash.com%2Fphoto-1524502397800-2eeaad7c3fe5%3Fq=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jeans",
  },
  {
    url: "https://images.unsplash.com/photo-1551084804-4b60b3c10f9e?w=800&h=800&q=90&fit=crop&crop=faces&https%3A%2F%2Fimages.unsplash.com%2Fphoto-1524502397800-2eeaad7c3fe5%3Fq=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Dress",
  },
  {
    url: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&h=800&q=90&fit=crop&crop=faces&https%3A%2F%2Fimages.unsplash.com%2Fphoto-1524502397800-2eeaad7c3fe5%3Fq=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Polo",
  },
  {
    url: "https://images.unsplash.com/photo-1587631550085-2d4bed859ea9?w=800&h=800&q=90&fit=crop&crop=faces&https%3A%2F%2Fimages.unsplash.com%2Fphoto-1524502397800-2eeaad7c3fe5%3Fq=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Top Wear & Under Wear",
  },
];

const loader = ({ src }) => {
  return src;
};

export default function PortraitGallery() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const clickedRef = useRef<boolean[]>(portraits.map(() => false));
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  // 👇 Remove isReady state & trigger animations immediately
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Fade-in items
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );

      // Parallax Title
      gsap.to(titleRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      // Parallax gallery move up slightly
      gsap.to(galleryRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 3,
        },
      });

      // 🚀 Refresh to avoid wrong offsets
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // ✨ Click handler for expanding portraits
  const handleExpand = (index: number) => {
    const items = itemsRef.current.filter(Boolean) as HTMLDivElement[];

    clickedRef.current = clickedRef.current.map((_, i) =>
      i === index ? !clickedRef.current[i] : false
    );

    const isClicked = clickedRef.current[index];

    items.forEach((item, i) => {
      if (i === index) return;
      gsap.to(item, {
        width: isClicked ? "8vw" : "15vw",
        duration: 2,
        ease: "elastic.out(1, 0.6)",
      });
    });

    gsap.to(items[index], {
      width: isClicked ? "42vw" : "15vw",
      duration: 1.5,
      ease: "power1.out",
    });
  };

  return (
    <main
      ref={containerRef}
      id="portrait_gallery"
      className="trigger relative min-h-screen flex flex-col items-center justify-center py-10 bg-linear-to-b from-[#030303] to-[#fad9dc] to-80% select-none overflow-hidden"
    >
      <div ref={titleRef} className="title mb-8 text-center">
        {/* <Badge
          variant="secondary"
          className="mb-4 bg-white/20 text-white border-none backdrop-blur-sm"
        >
          Interactive Gallery
        </Badge> */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-b font-serif italic from-white to-rose-200">
            Portrait Collection
          </span>
        </h1>
        <p className="text-white/70 mt-2 text-lg">
          Click on any portrait to expand
        </p>
      </div>

      {/* <div ref={galleryRef} className="gallery text-center whitespace-nowrap overflow-hidden px-4">
        {portraits.map((portrait, index) => (
          <div
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            onClick={() => handleExpand(index)}
            className="w-[15vw] h-[75vh] bg-center inline-block mx-[1vw] rounded-[3vw] cursor-pointer shadow-2xl
              hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-shadow duration-300 relative group overflow-hidden"
            style={{
              backgroundImage: `url(${portrait.url})`,
              backgroundSize: "75vh",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-lg drop-shadow-lg">
                {portrait.name}
              </span>
            </div>
          </div>
        ))}
      </div> */}
      <div
        ref={galleryRef}
        className="gallery text-center whitespace-nowrap overflow-hidden px-4"
      >
        {portraits.map((portrait, index) => (
          <div
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            onClick={() => handleExpand(index)}
            className="w-[15vw] h-[75vh] bg-center inline-block mx-[1vw] rounded-2xl cursor-pointer shadow-lg
            hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-shadow duration-300 relative group overflow-hidden"
            style={{
              backgroundImage: `url(${portrait.url})`,
              backgroundSize: "75vh",
            }}
          >
            <Image
              fill
              loader={loader}
              src={portrait.url}
              alt={portrait.name}
              style={{ objectFit: "cover" }}
              className="grayscale-90 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-lg drop-shadow-lg">
                {portrait.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
