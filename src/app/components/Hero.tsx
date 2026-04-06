import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 backdrop-blur-md bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Available for Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl leading-tight"
              style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                UI/UX & Visual Designer
              </span>
              <br />
              <span className="text-white">
                + YouTube Growth Specialist
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70 max-w-xl leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              I design high-converting visuals, build engaging content, and help brands grow through design and YouTube systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center gap-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                View Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-[3rem] blur-3xl"></div>

              {/* Glass Container */}
              <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-[3rem] p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1720118727697-5bc1648e9a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjcmVhdGl2ZSUyMHdvbWFuJTIwZGVzaWduZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc1Mzc4MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sumiya Shaikh - Creative Professional"
                  className="relative w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 backdrop-blur-md bg-purple-500/10 border border-purple-500/20 rounded-2xl px-6 py-4"
            >
              <div className="text-purple-300 font-bold text-2xl" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                5+
              </div>
              <div className="text-white/60 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Skills
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -left-8 backdrop-blur-md bg-blue-500/10 border border-blue-500/20 rounded-2xl px-6 py-4"
            >
              <div className="text-blue-300 font-bold text-2xl" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                100%
              </div>
              <div className="text-white/60 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Dedicated
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
