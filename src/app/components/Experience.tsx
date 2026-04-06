import { motion } from "motion/react";
import { Award, Users, Briefcase, Star } from "lucide-react";

export default function Experience() {
  const stats = [
    {
      icon: Briefcase,
      value: "50+",
      label: "Projects Completed",
      description: "Delivered across multiple industries",
    },
    {
      icon: Users,
      value: "30+",
      label: "Happy Clients",
      description: "Building long-term partnerships",
    },
    {
      icon: Award,
      value: "5+",
      label: "Years Experience",
      description: "In design and digital creation",
    },
    {
      icon: Star,
      value: "100%",
      label: "Client Satisfaction",
      description: "Quality work, every time",
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 relative">
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
              Experience & Impact
            </span>
          </h2>
          <p
            className="text-white/60 text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Proven track record of delivering results
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Stat Card */}
                <div className="h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-full h-full text-purple-400" />
                  </div>

                  {/* Value */}
                  <div
                    className="text-5xl mb-2"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
                  >
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <h3
                    className="text-xl text-white mb-2"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                  >
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-white/50 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {stat.description}
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
