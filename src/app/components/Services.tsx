import { motion } from "motion/react";
import { Palette, Pencil, Film, Pen, Award, Users, Briefcase } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered interfaces that enhance usability and deliver exceptional experiences.",
    },
    {
      icon: Pencil,
      title: "Graphic Design",
      description: "Cohesive visual identities that communicate your brand story effectively.",
    },
    {
      icon: Pen,
      title: "Content Writing",
      description: "Writing compelling narratives that engage and convert audiences.",
    },
    {
      icon: Film,
      title: "YouTube & Video Editing",
      description: "Developing content strategies that scale channels and maximize reach with professional video editing.",
    },
  ];

  const stats = [
    { icon: Briefcase, value: "50+", label: "Projects" },
    { icon: Users, value: "30+", label: "Clients" },
    { icon: Award, value: "5+", label: "Years" },
  ];

  return (
    <section id="services" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - STANDARD importance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="mb-4">
            <span className="text-purple-400/50 text-[11px] tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Services
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em]"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
          >
            <span className="text-white">How I Can Help</span>
          </h2>
        </motion.div>

        {/* Services Grid - Optimized cards with reduced shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
              >
                {/* Optimized card - reduced shadow from 24px to 16px (33% reduction) */}
                <div className="h-full bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_20px_rgba(168,85,247,0.1)]">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 p-3 flex items-center justify-center mb-5 shadow-inner">
                    <Icon className="w-full h-full text-purple-400" strokeWidth={1.5} />
                  </div>

                  <h3
                    className="text-lg text-white mb-3 leading-tight tracking-wide"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-white/45 text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: '0.01em' }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats - Optimized shadow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        >
          <div className="grid grid-cols-3 gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="inline-flex w-12 h-12 rounded-xl bg-purple-500/10 p-3 items-center justify-center mb-4 shadow-[0_8px_16px_rgba(168,85,247,0.1)]">
                    <Icon className="w-full h-full text-purple-400" strokeWidth={1.5} />
                  </div>
                  <div
                    className="text-4xl mb-2.5 tracking-tight"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                  >
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                      {stat.value}
                    </span>
                  </div>
                  <p
                    className="text-white/40 text-sm tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  >
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}