"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextVerticalGallery() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 100, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 2,
              stagger: 0.3,
              ease: "back.out(1.7)",
              zIndex: 999,
            }
          );
          gsap.to(titleRef.current, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottm",
              scrub: 2,
            },
          });
        //   ScrollTrigger.refresh();
        }, containerRef);
        return () => ctx.revert();
      }, []);

      return (
        <div
        ref={containerRef}
        className="px-4 z-999 md:px-[10vw] h-full flex flex-col items-center justify-center overflow-visible w-full mx-auto"
      >
        {/* Fixed Title */}
        <div ref={titleRef}>
          <h1 className="relative top-1/2 items-center justify-center text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center max-w-4xl mx-auto px-4 pointer-events-none text-balance">
            Vertical image loop with scroll acceleration with GSAP
          </h1>
        </div>
      </div>
      )
}