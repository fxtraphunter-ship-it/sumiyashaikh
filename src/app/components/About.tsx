import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="space-y-6 text-white/70 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            <p>
              I'm a creative professional who brings together design, strategy, and digital storytelling to create impactful brand experiences.
            </p>
            <p>
              With a strong focus on UI/UX design, graphic design, and content creation, I help businesses and individuals translate their vision into compelling visuals and growth-focused digital solutions.
            </p>
            <p>
              I believe great design isn't just about looking good—it's about solving problems, creating value, and making a lasting impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}