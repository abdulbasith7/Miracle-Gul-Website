// Next.js (App Router) – Static Single Page Website
// File: app/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import AboutSections from "@/components/AboutSections";
import {
  Truck,
  Package,
  Globe,
  ShieldCheck,
  Handshake,
  Leaf,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Miracle Gul Business Hub SPC | Premium Exports & Imports",
  description:
    "Miracle Gul Business Hub SPC is a leading exporter of premium agricultural, coconut, food, handicraft and industrial products serving GCC countries with quality, trust and reliability.",
  keywords: [
    "GCC exporters",
    "agricultural exports",
    "coconut products exporter",
    "Indian food exports",
    "handicrafts export",
    "bulk wholesale supplier",
  ],
  openGraph: {
    title: "Miracle Gul Business Hub SPC",
    description: "Your Gateway to Premium Quality Products for GCC Markets",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="text-gray-800 scroll-smooth">
      {/* HERO */}
      {/* <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-red-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              MIRACLE GUL BUSINESS HUB SPC
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Your Gateway to Premium Quality Products
            </p>
            <p className="text-gray-200 max-w-xl">
              Unlock endless possibilities with our top-quality exports. We are a trusted
              exporter of Agricultural & Allied Products, Coconuts & Allied Products,
              Food Products, Handicrafts, and more — proudly serving wholesalers and
              chain stores across the GCC.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-white text-green-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Get in Touch
              </a>
              <a href="#products" className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-900 transition">
                Explore Products
              </a>
            </div>
          </div>

          <div className="relative h-64 md:h-96 w-full">
            <Image src="/logo.jpg" alt="Miracle Gul Logo" fill className="object-contain" />
          </div>
        </div>
      </section> */}
      <section className="relative overflow-hidden text-white bg-gradient-to-br from-green-950 via-green-900 to-red-900">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-red-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
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
              Unlock endless possibilities with our top-quality exports. We are
              a trusted exporter of Agricultural & Allied Products, Coconuts &
              Allied Products, Food Products, Handicrafts, and more — proudly
              serving wholesalers and chain stores across the GCC.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300 pt-4">
              <span className="flex items-center gap-2">
                ✓ GCC Export Specialists
              </span>
              <span className="flex items-center gap-2">
                ✓ Wholesale & Chain Stores
              </span>
              <span className="flex items-center gap-2">
                ✓ Premium Quality Assurance
              </span>
            </div>

            {/* CTA Buttons */}
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
          </div>

          {/* Right Logo Section */}
          <div className="relative h-80 md:h-[420px] flex items-center justify-center">
            <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-md shadow-2xl" />
            <Image
              src="/logo.jpg"
              alt="Miracle Gul Business Hub Logo"
              fill
              className="object-contain p-10"
              priority
            />
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Partner with MIRACLE GUL?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <Feature icon={<ShieldCheck />} title="Premium Quality" />
            <Feature icon={<Truck />} title="Timely Delivery" />
            <Feature icon={<Package />} title="Custom Packaging" />
            <Feature icon={<Handshake />} title="Dedicated Support" />
            <Feature icon={<Globe />} title="GCC Expertise" />
          </div>
        </div>
      </section>

      <AboutSections products={products} />

      {/* ABOUT */}
      {/* <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-center">About Us</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            Miracle Gul Business Hub SPC – Exports & Imports is a leading
            international trade company with over fifty premium products. Our
            journey began with a simple observation — the abundance of
            high-quality products in our region. We connected local farmers,
            artisans, and manufacturers to global GCC markets through fair trade
            and trusted partnerships.
          </p>
        </div>
      </section> */}

      {/* VISION & VALUES */}
      {/* <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Vision & Mission</h3>
            <p className="text-gray-100">
              Our mission is to be a leading GCC supplier of premium quality
              products, delighting customers with exceptional service while
              empowering farmers and producers with financial freedom through
              fair trade practices.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Core Values</h3>
            <div className="flex flex-wrap gap-3">
              {["Quality", "Integrity", "Trust", "Reliability"].map((v) => (
                <span key={v} className="px-5 py-2 bg-white/10 rounded-full">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* PRODUCTS */}
      {/* <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Product Range
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.title}
                className="group bg-white p-6 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="text-green-800 mb-3 group-hover:scale-110 transition">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ROADMAP */}
      {/* <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Growth Roadmap (2026 – 2030)
          </h2>
          <p className="text-lg text-gray-600">
            Expanding digitally, entering new global markets, diversifying into
            value-added products, strengthening infrastructure with
            manufacturing and warehousing, and establishing our own
            international brand across all GCC countries.
          </p>
        </div>
      </section> */}

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Let’s discuss how we can supply your business with top-quality
              products.
            </p>
            <p className="flex items-center gap-3 mb-3">
              <Mail /> Email: info@miraclegul.com
            </p>
            <p className="flex items-center gap-3">
              <Phone /> Phone: +971 XXXXXXXX
            </p>
          </div>
          <form
            action="https://formspree.io/f/xbddllzw"
            method="POST"
            className="bg-white text-gray-800 p-6 rounded-2xl shadow space-y-4"
          >
            <input
              className="w-full border p-3 rounded-xl"
              placeholder="Your Name"
              name="name"
            />
            <input
              className="w-full border p-3 rounded-xl"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="w-full border p-3 rounded-xl"
              rows={4}
              placeholder="Message"
              name="message"
            />
            <button className="w-full bg-green-800 text-white py-3 rounded-xl font-semibold hover:bg-green-900 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} MIRACLE GUL BUSINESS HUB SPC. All Rights
        Reserved.
      </footer>
    </main>
  );
}

function Feature({ icon, title }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition hover:-translate-y-1">
      <div className="flex justify-center text-green-800 mb-4">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}

const products = [
  {
    title: "Rice & Grains",
    desc: "Rice, wheat, maize, pulses and millets.",
    icon: <Leaf />,
  },
  {
    title: "Fresh & Dried Fruits",
    desc: "Fresh fruits and premium dried products.",
    icon: <Leaf />,
  },
  {
    title: "Coconut Products",
    desc: "Raw coconuts and value-added coconut products.",
    icon: <Leaf />,
  },
  {
    title: "Spices & Herbs",
    desc: "Dry chilli, ginger, turmeric and herbs.",
    icon: <Leaf />,
  },
  {
    title: "Nuts & Seeds",
    desc: "Cashew, peanuts, anjeer nuts and more.",
    icon: <Leaf />,
  },
  {
    title: "Handicrafts & Textiles",
    desc: "Artisan handicrafts and textile made-ups.",
    icon: <Leaf />,
  },
];
