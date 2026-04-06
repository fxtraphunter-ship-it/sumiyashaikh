import { motion } from "motion/react";
import heroImage from "figma:asset/96aebeb406354b4349d3e1ca166f0d49b2f89602.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 py-16 relative overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#0B0B0F] to-[#1a0a2e]"></div>
      
      {/* Enhanced orbs with glow */}
      <div className="absolute top-1/4 -left-96 w-[900px] h-[900px] bg-purple-600/[0.04] rounded-full blur-[160px]"></div>
      <div className="absolute bottom-1/4 -right-96 w-[900px] h-[900px] bg-blue-600/[0.04] rounded-full blur-[160px]"></div>

      {/* Content - TRUE 2 Column Split Layout */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE - Image (40% width - reduced & balanced) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end md:pr-8"
          >
            {/* Image container - Centered portrait with reduced size */}
            <div className="relative w-full max-w-[320px]">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <img
                  src={heroImage}
                  alt="Sumiya Shaikh"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Reduced decorative glow behind image */}
              <div className="absolute -inset-3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-[40px] -z-10 opacity-40"></div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Text Content (60% width - more space for text) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Badge - Small and subtle */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 shadow-lg shadow-purple-500/10 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-purple-300 text-[10px] tracking-[0.15em] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  Available for Projects
                </span>
              </div>
            </div>

            {/* Headline & Description - Compact spacing */}
            <div className="space-y-4">
              <h1
                className="text-[42px] leading-[1.1] tracking-[-0.02em]"
                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
              >
                <span className="text-white">
                  Sumiya Shaikh
                </span>
              </h1>
              
              <p
                className="text-lg text-white/60 tracking-[-0.005em] leading-[1.5]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                UI/UX Designer & Digital Experience Creator
              </p>

              <p
                className="text-sm text-white/40 leading-relaxed max-w-md"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                Helping brands turn ideas into meaningful digital experiences
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <div className="flex items-center gap-4">
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white text-sm shadow-[0_8px_30px_rgba(139,92,246,0.35)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.5)] transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  View My Work
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                >
                  Hire Me
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}