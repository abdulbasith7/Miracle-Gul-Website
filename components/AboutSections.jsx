"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/utils/animations";
import Image from "next/image";

export default function AboutSections({ products }) {
  return (
    <>
      {/* ABOUT */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white from-5%  via-red-950 via-70%  to-black to-100%" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto px-6 text-center space-y-10"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-sm font-semibold text-green-700"
          >
            Who We Are
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold"
          >
            About Miracle Gul
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Miracle Gul Business Hub SPC – Exports & Imports is a leading
            international trade company offering over fifty premium products.
            Our journey began with a simple observation — the abundance of
            high-quality products in our region. We bridge local farmers,
            artisans, and manufacturers with global GCC markets through fair
            trade and trusted partnerships.
          </motion.p>
        </motion.div>
      </section>
      {/* <section className="h-37.5  bg-black"></section> */}

      {/* VISION & VALUES */}
      <section className="py-28 bg-gradient-to-b from-black via-green-900 to-white text-white relative overflow-hidden">
        {/* <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-400/20 rounded-full blur-3xl" /> */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeUp}>
            <h3 className="text-3xl font-bold mb-6">Vision & Mission</h3>
            <p className="text-gray-100 leading-relaxed">
              Our mission is to become a leading GCC supplier of premium-quality
              products, delighting customers with exceptional service while
              empowering farmers and producers with financial freedom through
              ethical and fair trade practices.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-3xl font-bold mb-6">Core Values</h3>
            <div className="flex flex-wrap gap-4">
              {["Quality", "Integrity", "Trust", "Reliability"].map((v, i) => (
                <motion.span
                  key={v}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white/10 rounded-full backdrop-blur-md border border-white/20"
                >
                  {v}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-28 bg-gray-50">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-extrabold text-center mb-16"
          >
            Our Product Range
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {products.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100"
              >
                {/* IMAGE */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    // src={"/products/rice.jpeg"}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 bg-white/90 text-green-800 p-3 rounded-xl shadow">
                    {p.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ROADMAP */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-gray-900" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto px-6 text-center space-y-8"
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-green-700">
            The Future
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Growth Roadmap (2026 – 2030)
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            Expanding digitally, entering new global markets, diversifying into
            value-added products, strengthening infrastructure through
            manufacturing and warehousing, and establishing our own
            international brand presence across all GCC countries.
          </p>
        </motion.div>
      </section>
    </>
  );
}
