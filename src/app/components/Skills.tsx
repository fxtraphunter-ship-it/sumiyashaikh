import { motion } from "motion/react";
import { Palette, Pencil, FileText, Youtube, Film } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces with focus on usability and visual appeal.",
      priority: 1,
    },
    {
      icon: Pencil,
      title: "Graphic Design",
      description: "Designing brand identities, marketing materials, and visual content that tells your story.",
      priority: 2,
    },
    {
      icon: FileText,
      title: "Content Writing",
      description: "Crafting compelling copy and content that engages audiences and drives results.",
      priority: 3,
    },
    {
      icon: Youtube,
      title: "YouTube Automation & Mastery",
      description: "Building scalable YouTube systems, content strategies, and growth optimization.",
      priority: 4,
    },
    {
      icon: Film,
      title: "Basic Video Editing",
      description: "Editing videos with attention to pacing, storytelling, and visual coherence.",
      priority: 5,
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p
            className="text-white/60 text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A diverse skill set to bring your creative vision to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Glass Card */}
                <div className="h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10">
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-full h-full text-purple-400" />
                  </div>

                  {/* Priority Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                      {skill.priority}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl mb-3 text-white"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                  >
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-white/60 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}