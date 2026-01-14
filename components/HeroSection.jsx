"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, stagger } from "@/utils/animations";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [showHeroLogo, setShowHeroLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroLogo(false);
    }, 900); // animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden text-white bg-gradient-to-br from-green-950 via-green-900 to-red-900">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-red-400/20 rounded-full blur-3xl" />

      {/* Staggered Motion Container */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center"
      >

        {/* IMAGE / LOGO */}
        <motion.div
          variants={fadeUp}
          className="relative h-80 md:h-[420px] flex items-center justify-center md:order-2"
        >
          <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-md shadow-2xl" />

          {/* MOBILE → ANIMATED LOGO */}
          {showHeroLogo && (
            <motion.div
              layoutId="main-logo"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="md:hidden w-full h-full flex items-center justify-center"
            >
              <Image
                src="/logo.jpg"
                alt="Miracle Gul Business Hub Logo"
                width={180}
                height={180}
                className="object-contain"
                priority
              />
            </motion.div>
          )}

          {/* DESKTOP → NORMAL IMAGE */}
          <div className="hidden md:block w-full h-full relative">
            <Image
              src="/logo.jpg"
              alt="Miracle Gul Business Hub Logo"
              fill
              className="object-contain p-10"
              priority
            />
          </div>
        </motion.div>

        {/* TEXT CONTENT — 100% UNTOUCHED */}
        <motion.div variants={fadeUp} className="space-y-8 md:order-1">
          <p className="uppercase tracking-[0.3em] text-sm text-green-300 font-semibold">
            Global Export Company
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
            MIRACLE GUL <br />
            <span className="text-green-300">BUSINESS HUB SPC</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 max-w-xl">
            Your Gateway to Premium Quality Products
          </p>

          <p className="text-gray-200 max-w-lg leading-relaxed">
            Unlock endless possibilities with our top-quality exports. We are a
            trusted exporter of Agricultural & Allied Products, Coconuts & Allied
            Products, Food Products, Handicrafts, and more — proudly serving
            wholesalers and chain stores across the GCC.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-300 pt-4">
            <span>✓ GCC Export Specialists</span>
            <span>✓ Wholesale & Chain Stores</span>
            <span>✓ Premium Quality Assurance</span>
          </div>

          <div className="flex gap-6 pt-6">
            <a
              href="#contact"
              className="bg-white text-green-900 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#products"
              className="border border-white/60 px-8 py-4 rounded-2xl font-semibold backdrop-blur hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              Explore Products
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
