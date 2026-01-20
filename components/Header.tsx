"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">

        {/* MOBILE LOGO TARGET */}
        <motion.div
          layoutId="main-logo"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="md:hidden w-[80px] h-10"
        >
          <Image
            src="/logo.jpg"
            alt="Miracle Gulf Logo"
            width={100}
            height={60}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* DESKTOP LOGO */}
        <div className="hidden md:flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Miracle Gulf Logo"
            width={100}
            height={60}
            className="object-contain"
          />
        </div>

      </div>
    </header>
  );
};

export default Header;
