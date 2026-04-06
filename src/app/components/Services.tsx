import { motion } from "motion/react";
import { Palette, Pencil, Share2, Youtube, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance usability and create delightful experiences.",
    },
    {
      icon: Pencil,
      title: "Graphic Design",
      description: "Visual identity, branding, and marketing materials that make your brand stand out.",
    },
    {
      icon: Share2,
      title: "Social Media Design",
      description: "Eye-catching social media graphics optimized for engagement and brand consistency.",
    },
    {
      icon: Youtube,
      title: "YouTube Automation",
      description: "Complete YouTube growth systems including content strategy, optimization, and automation.",
    },
    {
      icon: Sparkles,
      title: "Content Creation",
      description: "Compelling content and copy that tells your story and connects with your audience.",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative">
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
              Services
            </span>
          </h2>
          <p
            className="text-white/60 text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Comprehensive creative solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group"
              >
                {/* Service Card */}
                <div className="h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-lg">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-full h-full text-purple-400" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl mb-2 text-white"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {service.description}
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