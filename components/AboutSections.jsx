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
            Miracle Gulf Business Hub SPC – Exports & Imports is a leading
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
      <section className="py-32 bg-gradient-to-b from-black via-green-950 to-green-300 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-6"
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="uppercase tracking-widest text-sm font-semibold text-green-400 mb-4">
              Our Foundation
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Vision, Mission & Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Vision & Mission */}
            <motion.div variants={fadeUp} className="space-y-10">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  To become a trusted global trade partner and a benchmark GCC
                  supplier, recognized for delivering uncompromising quality,
                  transparency, and long-term value across international
                  markets.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  To connect farmers, artisans, and manufacturers with global
                  opportunities by building ethical supply chains, delivering
                  premium products, and fostering sustainable growth through
                  fair trade and strategic partnerships.
                </p>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Core Values That Guide Us
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Uncompromising Quality",
                    desc: "Every product meets stringent standards to exceed market expectations.",
                  },
                  {
                    title: "Integrity in Trade",
                    desc: "We operate with honesty, transparency, and ethical responsibility.",
                  },
                  {
                    title: "Trusted Partnerships",
                    desc: "Long-term relationships built on reliability and mutual respect.",
                  },
                  {
                    title: "Operational Excellence",
                    desc: "Consistent performance through efficiency, accountability, and innovation.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-black/30 border border-white/10 hover:border-green-400/40 transition"
                  >
                    <h4 className="font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="py-16 bg-gradient-to-b  from-green-300  to-white relative overflow-hidden">

      </section>

      {/* PRODUCTS */}
      <section id="products" className="pb-28 pt-10 bg-gray-50">
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
