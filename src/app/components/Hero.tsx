import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#0B0B0F] to-[#1a0a2e] z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-blue-900/10 z-0"></div>
      
      {/* Subtle animated gradient orbs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1
              className="text-6xl lg:text-7xl xl:text-8xl leading-tight"
              style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
            >
              <span className="text-white/90">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sumiya Shaikh
              </span>
            </h1>
            
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl text-white/80"
              style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
            >
              Creative Designer & Digital Creator
            </h2>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            I design experiences that turn ideas into powerful visuals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-8 justify-center"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg flex items-center gap-3 shadow-xl shadow-purple-500/20 transition-all"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              View Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 text-white text-lg hover:bg-white/10 transition-all"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}