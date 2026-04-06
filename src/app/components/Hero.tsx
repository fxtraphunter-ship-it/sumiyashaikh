import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import heroImage from 'figma:asset/96aebeb406354b4349d3e1ca166f0d49b2f89602.png';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute top-20 left-0 right-0 bottom-0 z-0">
        <img 
          src={heroImage} 
          alt="Background"
          className="w-full h-full object-cover object-[center_20%]"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/80 via-[#0B0B0F]/85 to-[#0B0B0F]/90"></div>
        {/* Additional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      </div>

      {/* Content - Centered */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex items-center justify-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-2 shadow-lg"
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
              <TypeAnimation
                sequence={[
                  'UI/UX Designer',
                  2000,
                  'Visual Designer',
                  2000,
                  'YouTube Growth Specialist',
                  2000,
                  'Graphic Designer',
                  2000,
                  'Content Creator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                repeat={Infinity}
              />
              <br />
              <span className="text-white">
                + Multi-Skilled Creative Professional
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              I design high-converting visuals, build engaging content, and help brands grow through design and YouTube systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4 justify-center"
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
        </div>
      </div>
    </section>
  );
}