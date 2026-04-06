import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          {/* Copyright */}
          <p
            className="text-white/50 text-sm flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {new Date().getFullYear()} Sumiya Shaikh. Crafted with{" "}
            <Heart className="w-4 h-4 text-purple-400 fill-purple-400" /> for amazing projects.
          </p>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <a
              href="#home"
              className="text-white/40 hover:text-purple-400 transition-colors text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Home
            </a>
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
