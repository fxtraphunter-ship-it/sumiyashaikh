import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:block"
    >
      <motion.a
        href="#work"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
      >
        <span className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          ></motion.div>
        </div>
        <ChevronDown className="w-5 h-5" />
      </motion.a>
    </motion.div>
  );
}
