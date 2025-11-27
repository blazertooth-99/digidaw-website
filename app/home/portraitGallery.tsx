"use client";

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const portraits = [
  { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", name: "Emma" },
  { url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", name: "Sophia" },
  { url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", name: "Olivia" },
  { url: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", name: "Ava" },
  { url: "https://images.unsplash.com/photo-1543357530-d91dab30fa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", name: "Mia" },
];

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
      duration: 2.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <main
      ref={containerRef}
      className="trigger relative min-h-screen flex flex-col items-center justify-center py-10 bg-linear-to-b from-[#030303] to-[#9d8ce0] to-80% select-none overflow-hidden"
    >
      <div ref={titleRef} className="title mb-8 text-center">
        <Badge
          variant="secondary"
          className="mb-4 bg-white/20 text-white border-none backdrop-blur-sm"
        >
          Interactive Gallery
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Portrait Collection
        </h1>
        <p className="text-white/70 mt-2 text-lg">
          Click on any portrait to expand
        </p>
      </div>

      <div ref={galleryRef} className="gallery text-center whitespace-nowrap overflow-hidden px-4">
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
      </div>
    </main>
  );
}
