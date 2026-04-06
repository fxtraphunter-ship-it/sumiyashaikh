import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-xl bg-white/[0.03] border border-purple-500/30 rounded-xl px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-xl font-bold"
              style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
            >
              <span className="text-white">
                Sumiya
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all text-sm"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}