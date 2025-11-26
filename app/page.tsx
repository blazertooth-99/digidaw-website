"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import LandingPage from "@/app/home/page";
import Link from "next/link";

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);
  const firstBgRef = useRef<HTMLSpanElement>(null);
  const secBgRef = useRef<HTMLSpanElement>(null);
  const firstWordRef = useRef<HTMLSpanElement>(null);
  const secWordRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const topSplitRef = useRef<HTMLDivElement>(null);
  const bottomSplitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Text reveal animation
    tl.to(firstBgRef.current, { scaleX: 1, duration: 0.2 })
      .to(secBgRef.current, { scaleX: 1, duration: 0.2 })
      .to(
        [firstWordRef.current, secWordRef.current],
        { opacity: 1, duration: 0.1 },
        "-=0.1"
      )
      .to(firstBgRef.current, {
        scaleX: 0,
        transformOrigin: "right",
        duration: 0.2,
      })
      .to(secBgRef.current, {
        scaleX: 0,
        transformOrigin: "right",
        duration: 0.2,
      })
      // Button appears 0.5s after text animation
      .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.3 }, "+=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  const handleGetStarted = () => {
    const splitTl = gsap.timeline({
      onComplete: () => setShowLanding(true),
    });

    // Diagonal split animation
    splitTl
      .to(topSplitRef.current, {
        yPercent: -100,
        xPercent: -10,
        duration: 0.8,
        ease: "power3.inOut",
      })
      .to(
        bottomSplitRef.current,
        {
          yPercent: 100,
          xPercent: 10,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "<"
      );
  };

  // if (showLanding) {
  //   return <LandingPage />
  // }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Top diagonal split */}
      <div
        ref={topSplitRef}
        className="absolute inset-0 z-20 bg-[#5fbff9]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
        }}
      />

      {/* Bottom diagonal split */}
      <div
        ref={bottomSplitRef}
        className="absolute inset-0 z-20 bg-[#f06543]"
        style={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
        }}
      />

      {/* Intro content */}
      <div
        ref={introRef}
        className="relative z-30 flex h-full w-full flex-col items-center justify-center bg-white"
      >
        <div className="inline-block font-sans text-[15vmin] font-black leading-[1.205] text-[#353535]">
          {/* Hello */}
          <span className="relative inline-block">
            <span ref={firstWordRef} className="opacity-0">
              Hello{" "}
            </span>
            <span
              ref={firstBgRef}
              className="absolute left-0 top-0 z-10 block h-full w-full origin-left scale-x-0 bg-[#5fbff9]"
            />
          </span>
          <br />
          {/* World */}
          <span className="relative ml-[15vmin] inline-block">
            <span ref={secWordRef} className="opacity-0">
              World
            </span>
            <span
              ref={secBgRef}
              className="absolute left-0 top-0 z-10 block h-full w-full origin-left scale-x-0 bg-[#f06543]"
            />
          </span>
        </div>

        {/* Get Started Button */}
        <Link href="/home">
          <Button
            ref={buttonRef}
            // onClick={handleGetStarted}
            className="mt-12 translate-y-4 cursor-pointer rounded-full bg-[#353535] px-8 py-4 text-lg font-semibold text-white opacity-0 transition-colors hover:bg-[#5fbff9]"
          >
            Get Started &gt;
          </Button>
        </Link>
      </div>
    </div>
  );
}
