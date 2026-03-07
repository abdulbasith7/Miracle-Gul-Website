// import { motion } from "framer-motion";
// import { ArrowRight, Globe, Shield, Truck } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";
// import logoEmblem from "@/assets/logo-emblem.png";
// import PaymentTermsBanner from "./PaymentTermsBanner";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
//   }),
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 1, ease: "easeOut" as const },
//   },
// };

// const badges = [
//   { icon: Globe, label: "GCC Export Specialists" },
//   { icon: Truck, label: "Wholesale & Chain Stores" },
//   { icon: Shield, label: "Premium Quality Assurance" },
// ];

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src={heroBg}
//           alt=""
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-background/70" />
//         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
//       </div>

//       {/* Decorative particles */}
//       {[...Array(5)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 rounded-full bg-primary/30"
//           style={{
//             left: `${15 + i * 18}%`,
//             top: `${20 + (i % 3) * 25}%`,
//           }}
//           animate={{
//             y: [0, -30, 0],
//             opacity: [0.2, 0.6, 0.2],
//           }}
//           transition={{
//             duration: 4 + i,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.8,
//           }}
//         />
//       ))}

//       {/* Content */}
//       <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Left: Text Content */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             className="space-y-8"
//           >
//             {/* Logo badge */}
//             <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3">
//               <div className="h-px w-12 bg-primary/50" />
//               <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary">
//                 Global Export Company
//               </span>
//             </motion.div>

//             {/* Main heading */}
//             <motion.div variants={fadeUp} custom={1}>
//               <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight">
//                 <span className="text-gradient-gold">MIRACLE</span>
//                 <br />
//                 <span className="text-foreground">BUSINESS</span>
//                 <br />
//                 <span className="text-foreground">HUB</span>
//               </h1>
//             </motion.div>

//             {/* Subtitle */}
//             <motion.p
//               variants={fadeUp}
//               custom={2}
//               className="text-lg sm:text-xl text-cream-muted max-w-lg leading-relaxed"
//             >
//               Your Gateway to Premium Quality Products. We are a trusted exporter
//               of Agricultural & Allied Products, Coconuts, Food Products,
//               Handicrafts — proudly serving the GCC & Middle East.
//             </motion.p>

//             {/* Badges */}
//             <motion.div
//               variants={fadeUp}
//               custom={3}
//               className="flex flex-wrap gap-3"
//             >
//               {badges.map(({ icon: Icon, label }) => (
//                 <div
//                   key={label}
//                   className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card text-sm text-foreground"
//                 >
//                   <Icon className="w-4 h-4 text-primary" />
//                   <span>{label}</span>
//                 </div>
//               ))}
//             </motion.div>

//             {/* CTAs */}
//             <motion.div
//               variants={fadeUp}
//               custom={4}
//               className="flex flex-wrap gap-4 pt-2"
//             >
//               <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-gold)]">
//                 <span className="relative z-10 flex items-center gap-2">
//                   Get in Touch
//                   <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                 </span>
//                 <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>
//               <button className="px-8 py-4 border border-primary/30 text-primary font-semibold rounded-lg transition-all duration-300 hover:border-primary/60 hover:bg-primary/5">
//                 Explore Products
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Right: Logo Emblem */}
//           <motion.div
//             variants={scaleIn}
//             initial="hidden"
//             animate="visible"
//             className="hidden lg:flex items-center justify-center"
//           >
//             <div className="relative">
//               {/* Glow ring */}
//               <div className="absolute -inset-8 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
//               <div className="absolute -inset-4 rounded-full border border-primary/10" />
//               <img
//                 src={logoEmblem}
//                 alt="Miracle Business Hub"
//                 className="w-72 h-72 xl:w-96 xl:h-96 object-contain relative z-10 animate-float drop-shadow-2xl"
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* Payment Terms Banner */}
//         <motion.div
//           variants={fadeUp}
//           custom={5}
//           initial="hidden"
//           animate="visible"
//           className="mt-16 lg:mt-24"
//         >
//           <PaymentTermsBanner />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
