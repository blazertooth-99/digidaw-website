"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function RevealText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(heroRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
      zIndex: 999
    }).from(
      featuresRef.current?.children || [],
      {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        zIndex: 999
      },
      "-=0.2",
    )
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen z-9999 bg-gradient-to-br from-[#2c2d2e] to-[#e2e8f0]">
      {/* Hero Section */}
      <div ref={heroRef} className="px-6 py-20 text-center">
        <h1 className="mb-6 text-balance text-5xl font-black text-[#353535] md:text-7xl">
          Welcome to the{" "}
          <span className="bg-gradient-to-r from-[#5fbff9] to-[#f06543] bg-clip-text text-transparent">Future</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-[#64748b] md:text-xl">
          Build amazing experiences with cutting-edge technology. Start your journey today and transform the way you
          work.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-[#353535] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#5fbff9]">
            Start Building
          </button>
          <button className="rounded-full border-2 border-[#353535] px-8 py-3 font-semibold text-[#353535] transition-colors hover:bg-[#353535] hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#5fbff9]/20">
            <svg className="h-6 w-6 text-[#5fbff9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-[#353535]">Lightning Fast</h3>
          <p className="text-[#64748b]">Optimized performance that keeps your applications running at peak speed.</p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f06543]/20">
            <svg className="h-6 w-6 text-[#f06543]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-[#353535]">Secure by Default</h3>
          <p className="text-[#64748b]">Enterprise-grade security built into every layer of the platform.</p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#353535]/10">
            <svg className="h-6 w-6 text-[#353535]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-[#353535]">Flexible Design</h3>
          <p className="text-[#64748b]">Customize and adapt to your needs with our modular architecture.</p>
        </div>
      </div>
    </div>
  )
}