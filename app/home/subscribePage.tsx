import React, { useState, useEffect, useRef } from "react";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

const SubscribeOverlay = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLImageElement | null>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // if (!window.gsap) return;
    // const gsap = window.gsap;
    const ctx = gsap.context(() => {
        const tl = gsap.timeline();
  
        if (isOpen) {
          document.body.style.overflow = "hidden";
  
          tl.to(containerRef.current, {
            x: "0%",
            duration: 0.8,
            ease: "power3.inOut",
          })
            .fromTo(
              contentRef.current,
              { scale: 1.1, filter: "grayscale(100%)" },
              {
                scale: 1,
                filter: "grayscale(0%)",
                duration: 1,
                ease: "power2.out",
              },
              "-=0.4"
            )
            .fromTo(
              elementsRef.current,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
              },
              "-=0.6"
            );
        } else {
          document.body.style.overflow = "auto";
          tl.to(containerRef.current, {
            x: "100%",
            duration: 0.7,
            ease: "expo.inOut",
          });
        }
      }, containerRef); 
  
      return () => ctx.revert(); 
    }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col md:flex-row bg-[#1c1c1c] text-[#f0f0f0] translate-x-full will-change-transform"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-4 hover:rotate-90 transition-transform duration-500 text-white mix-blend-difference"
      >
        <X size={32} />
      </button>

      {/* Gambar Kiri Overlay */}
      <div className="hidden md:block w-1/2 h-full bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img
          ref={contentRef}
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1200&auto=format&fit=crop"
          alt="Model Overlay"
          className="w-full h-full object-cover will-change-transform"
        />
        <div className="absolute bottom-12 left-12 z-20">
          <h2 className="text-6xl font-serif italic text-white/90">
            Exclusive
          </h2>
        </div>
      </div>

      {/* Form Kanan */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-24 bg-[#e8e6e1] text-[#1c1c1c]">
        <div ref={(el) => (elementsRef.current[0] = el)}>
          <div className="flex items-center gap-4 mb-6 opacity-60">
            <div className="h-[1px] w-12 bg-black"></div>
            <p className="text-xs tracking-[0.3em] uppercase">Newsletter</p>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-[0.9]">
            Unlock <br />{" "}
            <span className="italic font-light text-[#8c3a3a]">
              The Archive
            </span>
          </h2>
          <p className="text-lg opacity-70 mb-12 font-light max-w-md leading-relaxed">
            Bergabunglah dengan lingkaran dalam kami untuk kurasi mingguan
            tentang seni, mode, dan budaya.
          </p>
        </div>

        <form
          ref={(el) => (elementsRef.current[1] = el)}
          className="w-full max-w-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative border-b border-black/20 pb-4 mb-10 group focus-within:border-black transition-colors duration-500">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent text-xl placeholder-black/30 focus:outline-none py-2 font-serif italic"
            />
          </div>

          <button className="w-full bg-[#1c1c1c] text-[#f0f0f0] py-5 px-8 flex justify-between items-center group hover:bg-[#8c3a3a] transition-colors duration-500">
            <span className="text-sm tracking-[0.2em] uppercase">
              Subscribe
            </span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const mainImgRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    // if (!window.gsap) return;
    // const gsap = window.gsap;
    const ctx = gsap.context(() => {
        // Intro Animation
        gsap.fromTo(
        mainImgRef.current,
        { opacity: 0, scale: 1.15 },
        { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" }
        );

        gsap.fromTo(
        heroTextRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
        );
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-linear-to-b from-[#030303] to-[#9d8ce0] to-80% text-[#1a1a1a] overflow-hidden py-10 font-sans">
      <SubscribeOverlay
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />

      {/* --- MAIN LAYOUT (12 Columns) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 h-screen border-t border-l border-gray-300 m-10">
        {/* === SECTION KIRI (IMAGE UTAMA) === */}
        <div className="lg:col-span-7 flex flex-col md:flex-row border-r border-b border-gray-300 relative h-[50vh] lg:h-auto overflow-hidden group">
          {/* Vertical Brand Bar */}
          <div className="hidden md:flex w-16 lg:w-20 border-r border-gray-300 flex-col justify-between py-10 items-center bg-[#f9f7f2] z-10">
            <span className="rotate-180 writing-vertical-rl text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400">
              Since 2024
            </span>
            <div className="h-24 w-[1px] bg-gray-300"></div>
            <h1 className="rotate-180 writing-vertical-rl text-3xl font-serif tracking-widest text-[#1a1a1a]">
              BY DIGIDAW
            </h1>
          </div>

          {/* Main Image Container */}
          <div className="flex-1 relative h-full overflow-hidden bg-[#e0ded8]">
            {/* Text "MUSE" dibelakang gambar (sedikit) */}
            <div
              ref={heroTextRef}
              className="absolute bottom-0 right-0 z-20 pointer-events-none mix-blend-exclusion px-4 lg:px-10"
            >
              <h1 className="text-[20vw] lg:text-[11rem] leading-none font-serif text-[#f4f1ea] opacity-90 italic">
                Muse
              </h1>
            </div>

            <div className="w-full h-full relative p-6 md:p-10 flex items-center justify-center">
              <div className="w-full h-full relative overflow-hidden shadow-2xl">
                <img
                  ref={mainImgRef}
                  src="https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=900&auto=format&fit=crop"
                  alt="Main Editorial"
                  className="w-full h-full object-cover object-center will-change-transform transition-transform duration-[1.5s] ease-in-out hover:scale-110 filter grayscale-90 group-hover:grayscale-0"
                />
                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 bg-black/5 pointer-events-none mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>

        {/* === SECTION KANAN (CONTENT GRID) === */}
        <div className="lg:col-span-5 flex flex-col h-full bg-[#f4f1ea]">
          {/* 1. TOP BLOCK: GET ACCESS (Dominant CTA) */}
          <div
            className="h-[45%] border-b border-gray-300 relative group cursor-pointer overflow-hidden"
            onClick={() => setIsSubscribeOpen(true)}
          >
            {/* Background Image dengan efek Zoom halus */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover object-[50%_20%] transition-transform duration-1000 group-hover:scale-110 filter brightness-50 group-hover:brightness-100"
                alt="Fashion Walk"
              />
              <div className="absolute inset-0 bg-[#8c3a3a]/0 group-hover:bg-[#8c3a3a]/80 transition-colors duration-500 mix-blend-multiply"></div>
            </div>

            {/* Content Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-6 text-center">
              <p className="text-xs tracking-[0.4em] uppercase mb-4 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                Exclusive Access
              </p>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-6 drop-shadow-md group-hover:drop-shadow-none transition-all">
                The Collection
              </h2>
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:text-[#8c3a3a] transition-all duration-500">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* 2. BOTTOM BLOCK: 3-COLUMN GRID */}
          <div className="h-[55%] grid grid-cols-2 md:grid-cols-3">
            {/* Cell A: Text Quote */}
            <div className="col-span-2 md:col-span-1 border-r border-b border-gray-300 p-8 flex flex-col justify-between bg-[#f9f7f2]">
              <div className="w-8 h-[1px] bg-black/20"></div>
              <p className="font-serif text-lg leading-relaxed text-gray-800">
                <span className="text-4xl float-left mr-2 font-serif text-[#8c3a3a]">
                  "
                </span>
                Style is a way to say who you are without having to speak.
              </p>
              <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mt-4">
                Rachel Zoe
              </div>
            </div>

            {/* Cell B: Perfume/Product Shot (Vertical) */}
            <div className="col-span-1 border-r border-b border-gray-300 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1565679871226-33cfa91bedae?q=80&w=6004&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                alt="Detail Shot"
              />
              <div className="absolute bottom-4 left-4 text-xs text-white/80 bg-black/20 px-2 py-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Details
              </div>
            </div>

            {/* Cell C: Black Box & Hands */}
            <div className="col-span-1 flex flex-col border-b border-gray-300">
              {/* Black Box */}
              <div
                className="h-1/2 bg-[#1c1c1c] text-[#f4f1ea] p-4 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-[#8c3a3a] transition-colors duration-500 relative overflow-hidden"
                onClick={() => setIsSubscribeOpen(true)}
              >
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">
                  Latest
                </p>
                <h3 className="text-xl font-serif italic">Get Access Now!</h3>
                <ArrowRight className="w-4 h-4 mt-2 opacity-50" />
              </div>

              {/* Hands Image */}
              <div className="h-1/2 relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=600&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Hands Jewelry"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .writing-vertical-rl { writing-mode: vertical-rl; }
        .will-change-transform { will-change: transform; }
      `}</style>
    </div>
  );
}
