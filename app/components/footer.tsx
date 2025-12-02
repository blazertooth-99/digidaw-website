"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import DigidawLogo from "@/app/images/digidaw_logo.png";
import Image from "next/image";

const marqueeItems = [
  "AMAZING DESIGN",
  "BRAND NEWS",
  "BRAND GROWTH",
  "FASHION WEEK",
];

const pagesLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
];

export function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeInner = marqueeInnerRef.current;
    if (!marqueeInner) return;

    const singleSetWidth = marqueeInner.scrollWidth / 4;

    gsap.set(marqueeInner, { x: 0 });

    gsap.to(marqueeInner, {
      x: -singleSetWidth,
      duration: 15,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => Number.parseFloat(x) % singleSetWidth),
      },
    });
  }, []);

  return (
    <footer className="bg-linear-to-b from-[#fad9dc] to-[#030303]">
      <div
        ref={marqueeRef}
        className="overflow-hidden border-b border-white/10 py-4"
      >
        <div ref={marqueeInnerRef} className="flex w-max">
          {[...Array(4)].map((_, setIndex) =>
            marqueeItems.map((item, index) => (
              <span
                key={`set-${setIndex}-${index}`}
                className="mx-8 text-sm font-semibold tracking-widest text-white uppercase flex items-center gap-8"
              >
                <span className="text-rose-400">✱</span>
                {item}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10">
        <h2 className="text-4xl md:text-5xl font-light text-white italic font-serif flex items-center gap-3">
          Let's Contact Us
          <ArrowUpRight className="w-8 h-8 text-rose-400" />
        </h2>
        <Link
          href="/contact"
          className="px-6 py-2.5 rounded-full border-2 border-white/70 text-white text-sm font-medium hover:bg-rose-400 hover:text-white/70 transition-all duration-300"
        >
          Get In Touch
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-tight"
            >
              {/* DIGI<span className="text-rose-400">DAW</span> */}
              <div className="w-[150px] h-[100px] md:w-[200px] md:h-[150px]">
                <Image src={DigidawLogo} alt="Digidaw Logo" />
              </div>
            </Link>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm tracking-wide border-b border-white/20 pb-2">
              Pages
            </h4>
            <ul className="space-y-3">
              {pagesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group relative text-white/70 text-sm hover:text-white transition-colors duration-300 inline-block"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-rose-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm tracking-wide border-b border-white/20 pb-2">
              Contact Info
            </h4>
            <div className="space-y-2 text-white/70 text-sm">
              <p>123 Fashion Street,</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">info@digidaw.com</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm tracking-wide border-b border-white/20 pb-2">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/30 text-white hover:bg-rose-300 hover:border-rose-500 hover:text-[#030303] transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/50 text-xs">All Right Reserved ©</p>
        <div className="flex gap-4 text-white/50 text-xs">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span>/</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
