"use client";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  Zap,
  Layers,
  Box,
  Hexagon,
  Circle,
  Activity,
  Command,
  Triangle,
  ArrowDown,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import HeroImage from "@/app/images/hero_banner.png";
import Floating1 from "@/app/images/floating_1.jpg";
import Floating2 from "@/app/images/floating_2.png";
import Floating3 from "@/app/images/floating_3.jpg";
import Floating4 from "@/app/images/floating_4.jpg";

export default function HeroPage() {
  return (
    <main className="relative min-h-screen w-full bg-linear-to-b from-gray-600 from-60% to-[#030303] text-white overflow-hidden font-sans selection:bg-blue-500/30 flex flex-col justify-between">
      {/* --- CSS Animations --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dashScroll {
          to { stroke-dashoffset: -200; }
        }
        @keyframes glowPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
        @keyframes drop {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-dash { animation: dashScroll 3s linear infinite; }
        .animate-glow { animation: glowPulse 8s ease-in-out infinite; }
        .animate-drop { animation: drop 3s linear infinite; }
        .animate-scroll { animation: scroll 40s linear infinite; }
        
        /* Delays for Staggered Entrance */
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>

      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Right Mist */}
        <div className="animate-glow absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-linear-to-b from-gray-400/20 to-rose-200 rounded-full blur-[120px]" />
        <Image
          src={HeroImage}
          alt="Youth Fashion Exclusive"
          fill
          className="grayscale-40 w-full min-h-screen object-cover"
        />
        {/* Bottom Left Mist */}
        {/* <div className="animate-glow absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-linear-to-t from-rose-200 to-transparent rounded-full blur-[100px] style={{ animationDelay: '2s' }}" /> */}
        {/* Center Spotlight */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-200 rounded-full blur-[130px] opacity-20" />
      </div>

      {/* --- Hero Section --- */}
      <section className="relative z-10 flex flex-col items-center justify-center grow px-4 text-center max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center">
          {/* Top Tag */}
          <div className="mb-10 inline-flex items-center gap-2 bg-[#1A1A1A]/80 backdrop-blur-sm border border-white/5 px-4 py-1.5 rounded-full cursor-pointer hover:bg-white/10 transition-all group shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-fade-up delay-100">
            <div className="w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-[10px]">Go</span>
            </div>
            <span className="text-xs font-medium text-gray-300">
              Find Our Best Collection About Fashion
            </span>
            <ArrowRight
              size={12}
              className="text-gray-500 group-hover:translate-x-1 group-hover:text-white transition-all"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 relative animate-fade-up delay-200">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-white to-gray-600">
              Elevate Your Elegant Fashion Here
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed font-light animate-fade-up delay-300">
            Designed for moments that matters
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 animate-fade-up delay-500">
            <button className="px-8 py-3.5 bg-[#111] hover:bg-[#222] hover:scale-105 border border-white/10 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-lg group">
              Let's Explore
              <ArrowDown
                size={14}
                className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
            <button className="px-8 py-3.5 bg-white text-black hover:bg-gray-200 hover:scale-105 rounded-full text-sm font-bold transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Our Products
            </button>
          </div>
        </div>

        {/* --- Center Vertical Lines (Visual Anchor) --- */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 h-[400px] w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent overflow-hidden pointer-events-none">
          <div className="w-full h-[50%] bg-gradient-to-b from-transparent to-white/50 blur-[1px] animate-drop"></div>
        </div>
        <div className="absolute top-[65%] left-[48%] h-[300px] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none">
          <div
            className="w-full h-[50%] bg-gradient-to-b from-transparent to-white/30 blur-[1px] animate-drop"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
        <div className="absolute top-[65%] left-[52%] h-[300px] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none">
          <div
            className="w-full h-[50%] bg-gradient-to-b from-transparent to-white/30 blur-[1px] animate-drop"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>
      </section>

      {/* --- Floating Nodes (Decorations) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none max-w-7xl mx-auto w-full h-full hidden lg:block animate-fade-up delay-700">
        {/* Node 1: Cortex (Top Left) */}
        <div
          className="absolute top-[30%] left-[8%] animate-float"
          style={{ animationDelay: "0s" }}
        >
          <div className="flex flex-col items-end gap-3 group">
            <div className="relative">
              {/* SVG Connector Line */}
              <svg className="absolute top-1/2 left-full ml-4 w-32 h-20 pointer-events-none overflow-visible -z-10 text-white/20">
                <path
                  d="M0 0 L 30 0 L 80 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="animate-dash"
                  strokeDasharray="5,5"
                />
                <circle
                  cx="80"
                  cy="40"
                  r="2"
                  fill="white"
                  className="opacity-50"
                />
              </svg>

              <div className="group w-[200px] h-[200px] bg-transparent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:border-white/30 transition-colors">
                <Image
                  src={Floating1}
                  alt="Hot Model"
                  width={500}
                  height={500}
                  className="brightness-80 group-hover:brightness-100 object-cover rounded-xl"
                />
                {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#1A1A1A] border border-white/20 rounded flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-white"></div>
                </div> */}
              </div>
            </div>
            <div className="text-right pr-2">
              <p className="text-base text-gray-500 font-mono tracking-wider text-center">
                Luxury
              </p>
            </div>
          </div>
        </div>

        {/* Node 2: Quant (Top Right) */}
        <div
          className="absolute top-[40%] right-[2%] animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex flex-col items-start gap-3 group">
            <div className="relative">
              {/* SVG Connector Line */}
              <svg
                className="absolute top-1/2 right-full mr-4 w-32 h-20 pointer-events-none overflow-visible -z-10 text-white/20"
                style={{ transform: "scaleX(-1)" }}
              >
                <path
                  d="M0 0 L 40 0 L 90 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="animate-dash"
                  strokeDasharray="5,5"
                />
              </svg>
              <div className="w-[200px] h-[200px] bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center group-hover:border-white/30 transition-colors">
                <Zap size={16} className="text-gray-300" />
              </div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2">
              <Image
                  src={Floating4}
                  alt="Hot Model"
                  width={500}
                  height={500}
                  className="brightness-80 object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="text-left pl-2">
              <p className="text-base text-gray-500 font-mono tracking-wider">
                Elegant
              </p>
            </div>
          </div>
        </div>

        {/* Node 3: Aelf (Bottom Left) */}
        <div
          className="absolute bottom-[20%] left-[10%] animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-4 group">
            <div className="w-[200px] h-[200px] bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center group-hover:border-white/30 transition-colors relative">
            <Image
                  src={Floating2}
                  alt="Hot Model"
                  width={500}
                  height={500}
                  className="brightness-80 object-cover rounded-xl"
                />
            </div>
            <div className="relative items-center jsutify-center text-right pr-2">
              <p className="text-base text-gray-500 font-mono tracking-wider text-center">
                Top Design
              </p>
            </div>
          </div>
          {/* Long horizontal line */}
          <div className="absolute top-5 left-14 w-40 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>

        {/* Node 4: Meeton (Bottom Right) */}
        <div
          className="absolute bottom-[20%] right-[20%] animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="flex flex-col items-center gap-2 group">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-base text-gray-500 font-mono tracking-wider">
                  Casual
                </p>
              </div>
              <div className="w-[200px] h-[200px] bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center group-hover:border-white/30 transition-colors">
              <Image
                  src={Floating3}
                  alt="Hot Model"
                  width={500}
                  height={500}
                  className="brightness-80 grayscale-50 object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute top-10 right-20 w-px h-20 bg-gradient-to-b from-white/10 to-transparent rotate-45"></div>
          </div>
        </div>
      </div>

      {/* --- ANIMATED FOOTER SECTION --- */}
      <footer className="relative w-full pb-8 pt-10 z-20 animate-fade-up delay-1000 mt-auto">
        {/* Footer Background Gradient */}
        <div className="relative w-full h-[150px] z-[-1]" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-end gap-8 lg:gap-0">
          {/* <div className="flex-shrink-0 mb-2 lg:mb-0">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                <ChevronDown size={14} />
              </div>
              <span className="text-xs text-gray-400 font-medium group-hover:text-white transition-colors">
                02/03 . Scroll down
              </span>
            </div>
          </div> */}

          {/* Center: Infinite Marquee Partners */}
          <div className="flex-1 w-full overflow-hidden px-10 relative mask-linear-fade">
            {/* CSS Mask for fading edges */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-transparent"></div>

            {/* Scrolling Container */}
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex gap-16 mx-8 items-center opacity-80 grayscale"
                >
                  <div className="flex items-center gap-2 font-bold text-xl hover:text-white hover:opacity-100 transition-all cursor-pointer">
                    <span className="w-0 h-0 border-[6px] border-transparent border-b-white mb-1"></span>{" "}
                    Vercel
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xl hover:text-white hover:opacity-100 transition-all cursor-pointer">
                    <Activity size={18} /> loom
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xl hover:text-white hover:opacity-100 transition-all cursor-pointer">
                    $ Cash App
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xl hover:text-white hover:opacity-100 transition-all cursor-pointer">
                    <div className="border border-current w-4 h-4 rounded-full flex items-center justify-center text-[8px]">
                      O
                    </div>{" "}
                    Loops
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xl hover:text-white hover:opacity-100 transition-all cursor-pointer">
                    _zapier
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xl hover:text-white hover:opacity-100 transition-all cursor-pointer">
                    ramp <ArrowUpRight size={12} />
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xl hover:text-white hover:opacity-100 transition-all cursor-pointer">
                    <Box size={16} /> Raycast
                  </div>
                  {/* Duplicate for seamless loop */}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pagination Slider */}
          <div className="flex-shrink-0 text-right mb-2 lg:mb-0">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-semibold">
              Digidaw
            </p>
            <div className="flex gap-1.5 justify-end items-center">
              <div className="w-8 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <div className="w-2 h-1 bg-white/20 rounded-full transition-all hover:bg-white/60 cursor-pointer"></div>
              <div className="w-2 h-1 bg-white/20 rounded-full transition-all hover:bg-white/60 cursor-pointer"></div>
              <div className="w-2 h-1 bg-white/20 rounded-full transition-all hover:bg-white/60 cursor-pointer"></div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
