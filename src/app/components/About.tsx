import { motion } from "motion/react";
import { Award, Users, Zap } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: Award,
      value: "5+",
      label: "Core Skills",
    },
    {
      icon: Users,
      value: "50+",
      label: "Projects Completed",
    },
    {
      icon: Zap,
      value: "100%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
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

          <div className="space-y-4 text-white/70 text-lg leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p>
              Sumiya Shaikh is a creative and multi-skilled professional with experience in graphic design, UI/UX design, social media management, content creation, and video editing.
            </p>
            <p>
              She focuses on creating engaging visual content, developing brand identities, and building digital experiences that support business growth.
            </p>
            <p>
              With a passion for combining design aesthetics with strategic thinking, Sumiya helps brands stand out in the digital landscape through compelling visuals and growth-focused content strategies.
            </p>
          </div>

          {/* CTA */}
          <motion.a
            href="https://www.linkedin.com/in/sumiya88/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Connect on LinkedIn
          </motion.a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Stats Cards - Horizontal Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-3 flex items-center justify-center mb-4">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div
                    className="text-3xl mb-1"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
                  >
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <div
                    className="text-white/60 text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 max-w-4xl mx-auto text-center"
          >
            <h3
              className="text-2xl mb-3"
              style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
            >
              Design Philosophy
            </h3>
            <p
              className="text-white/70"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Creating meaningful digital experiences that blend aesthetics with functionality, always keeping the end-user and business goals in focus.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}