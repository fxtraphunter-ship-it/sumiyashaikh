import { motion } from "motion/react";

export default function ValueStrip() {
  const values = [
    "Designs that convert",
    "Content that engages",
    "Systems that grow your brand",
    "Designs that convert",
    "Content that engages",
    "Systems that grow your brand",
  ];

  return (
    <section className="py-12 overflow-hidden border-y border-white/10">
      <motion.div
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {values.map((value, index) => (
          <div key={index} className="flex items-center gap-12">
            <span
              className="text-3xl lg:text-4xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
            >
              {value}
            </span>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
