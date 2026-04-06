import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {/* Links */}
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-white/40 hover:text-purple-400 transition-colors text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              About
            </a>
            <a
              href="#work"
              className="text-white/40 hover:text-purple-400 transition-colors text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-white/40 hover:text-purple-400 transition-colors text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}