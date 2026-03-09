"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#aboutus" },
  { label: "Vision", href: "#vision" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* MOBILE LOGO TARGET */}
        <motion.div
          layoutId="main-logo"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="md:hidden w-[80px] h-10 -mt-14"
        >
          <Image
            src="/logo2.png"
            alt="Miracle Logo"
            width={100}
            height={60}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* DESKTOP LOGO */}
        <div className="hidden md:flex items-center gap-3">
          <Image
            src="/logo2.png"
            alt="Miracle Logo"
            width={100}
            height={60}
            className="object-contain"
          />
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wider uppercase text-muted-foreground hover-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
