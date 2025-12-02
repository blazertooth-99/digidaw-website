"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&q=90&fit=crop",
    "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800&h=800&q=90&fit=crop",
    "https://images.unsplash.com/photo-1512101903502-7eb0c9022c74?w=800&h=800&q=90&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=800&h=800&q=90&fit=crop",
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&h=800&q=90&fit=crop",
    "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=800&h=800&q=90&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1628102160424-5f4ab3404829?w=800&h=800&q=90&fit=crop",
    "https://images.unsplash.com/photo-1621784562807-cb450c2f5efc?w=800&h=800&q=90&fit=crop",
    "https://images.unsplash.com/photo-1711888386245-9ca3477a5977?w=800&h=800&q=90&fit=crop",
  ],
];

export default function VerticalImage() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 20,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          zIndex: 999,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.to(titleRef.current, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });
      //   ScrollTrigger.refresh();
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const additionalY = { val: 0 };
    let additionalYAnim: gsap.core.Tween | null = null;
    let offset = 0;

    const cols = colRefs.current.filter(Boolean) as HTMLDivElement[];
    const animations: gsap.core.Tween[] = [];

    cols.forEach((col, i) => {
      const imageElements = col.querySelectorAll(".image-item");

      // Duplicate images for loop
      imageElements.forEach((image) => {
        const clone = image.cloneNode(true) as HTMLElement;
        col.appendChild(clone);
      });

      // Set animation
      const allImages = col.querySelectorAll(".image-item");
      allImages.forEach((item) => {
        const columnHeight = col.clientHeight;
        const direction = i % 2 !== 0 ? "+=" : "-=";

        const anim = gsap.to(item, {
          y: direction + Number(columnHeight / 2),
          duration: 20,
          repeat: -1,
          ease: "none",
          modifiers: {
            y: gsap.utils.unitize((y) => {
              if (direction == "+=") {
                offset += additionalY.val;
                return (parseFloat(y) - offset) % (columnHeight * 0.5);
              } else {
                offset += additionalY.val;
                return (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
              }
            }),
          },
        });
        animations.push(anim);
      });
    });

    // const scrollTrigger = ScrollTrigger.create({
    //   trigger: sectionRef.current,
    //   start: "top 50%",
    //   end: "bottom 50%",
    //   onUpdate: (self) => {
    //     const velocity = self.getVelocity();
    //     if (velocity > 0) {
    //       if (additionalYAnim) additionalYAnim.kill();
    //       additionalY.val = -velocity / 2000;
    //       additionalYAnim = gsap.to(additionalY, { val: 0 });
    //     }
    //     if (velocity < 0) {
    //       if (additionalYAnim) additionalYAnim.kill();
    //       additionalY.val = -velocity / 3000;
    //       additionalYAnim = gsap.to(additionalY, { val: 0 });
    //     }
    //   },
    // });

    // return () => {
    //   animations.forEach((anim) => anim.kill());
    //   scrollTrigger.kill();
    // };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-linear-to-b from-[#fad9dc] to-[#030303] to-80% text-neutral-900 overflow-x-hidden"
    >
      {/* Main Section */}
      <section
        ref={sectionRef}
        className="flex items-center justify-center h-screen relative w-full overflow-visible mx-auto"
      >
        <div
          ref={titleRef}
          className="absolute text-center w-1/2 text-balance text-white"
        >
           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-b font-serif italic from-white to-rose-200">
            Find Your Style & Your Passion
          </span>
        </h1>
          <p className="font-semibold font-serif italic m-10 text-base md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <div
        ref={galleryRef}
        className="absolute inset-0 z-10 flex flex-row justify-center w-[160%] md:w-full overflow-hidden"
      >
        {images.map((column, colIndex) => (
          <div
            key={colIndex}
            ref={(el) => {
              colRefs.current[colIndex] = el;
            }}
            className={`flex flex-col flex-1 w-full ${
              colIndex === 1
                ? "self-end justify-self-end"
                : "self-start justify-self-start"
            }`}
          >
            {column.map((src, imgIndex) => (
              <div
                key={imgIndex}
                className="image-item w-full p-2 sm:p-3 md:p-4 brightness-40 grayscale hover:grayscale-0 hover:brightness-100 hover:z-9999 transition-all duration-300"
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Gallery image ${colIndex + 1}-${imgIndex + 1}`}
                  className="w-full overflow-hidden transition-transform duration-300 ease-out"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
