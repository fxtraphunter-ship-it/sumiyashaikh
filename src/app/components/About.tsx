import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header - About is lowest hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="mb-4">
            <span className="text-purple-400/40 text-[11px] tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              About
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-8 leading-[1.15] tracking-[-0.01em]"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
          >
            <span className="text-white">
              Designing with Purpose
            </span>
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p 
              className="text-xl text-white/60 leading-relaxed tracking-wide" 
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.01em' }}
            >
              I'm a creative professional who believes great design is more than aesthetics—it's about solving real problems and creating meaningful impact.
            </p>
            <p 
              className="text-base text-white/45 leading-relaxed tracking-wide" 
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.01em' }}
            >
              With expertise spanning UI/UX design, graphic design, and digital content creation, I help brands and businesses translate their vision into compelling visual stories that resonate with audiences and drive measurable results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}