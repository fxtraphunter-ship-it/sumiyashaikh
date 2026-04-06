import { motion } from "motion/react";
import { Palette, Pencil, FileText, Film } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting intuitive interfaces that blend aesthetics with usability.",
      priority: 1,
    },
    {
      icon: Pencil,
      title: "Graphic Design",
      description: "Building visual identities that communicate brand stories effectively.",
      priority: 2,
    },
    {
      icon: FileText,
      title: "Content Writing",
      description: "Writing compelling narratives that engage and convert audiences.",
      priority: 3,
    },
    {
      icon: Film,
      title: "YouTube & Video Editing",
      description: "Developing content strategies that scale channels and editing videos with attention to pacing and storytelling.",
      priority: 4,
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Skills is important but smaller than Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="mb-4">
            <span className="text-purple-400/50 text-[11px] tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Expertise
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em]"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
          >
            <span className="text-white">What I Do Best</span>
          </h2>
        </motion.div>

        {/* Skills Grid - SMALL CARDS with refined depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group"
              >
                {/* SMALL Card with subtle layering */}
                <div className="h-full bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_24px_rgba(168,85,247,0.08)]">
                  {/* Priority Badge - Compact */}
                  <div className="flex items-start justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 p-2.5 flex items-center justify-center shadow-inner">
                      <Icon className="w-full h-full text-purple-400" strokeWidth={1.5} />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center text-purple-300 text-[10px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      {skill.priority}
                    </div>
                  </div>

                  {/* Content - Refined spacing */}
                  <div className="space-y-2">
                    <h3
                      className="text-base text-white leading-tight tracking-wide"
                      style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
                    >
                      {skill.title}
                    </h3>

                    <p
                      className="text-white/45 leading-relaxed text-[13px]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.01em' }}
                    >
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}