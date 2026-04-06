import { motion } from "motion/react";
import { Paintbrush, Layers, Youtube, PenTool, Video } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "Creating intuitive web & mobile interfaces that deliver exceptional user experiences and drive engagement.",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Paintbrush,
      title: "Graphic Design & Branding",
      description: "Developing compelling visual identities and brand materials that make your business stand out.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Youtube,
      title: "YouTube Automation & Thumbnails",
      description: "High-converting thumbnail designs and YouTube growth systems to maximize your channel's potential.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: PenTool,
      title: "Content Writing & Social Media",
      description: "Crafting engaging copy and social media content that resonates with your audience and drives action.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services to create polished, engaging content for your brand.",
      gradient: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
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
            className="text-5xl lg:text-6xl mb-4"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Comprehensive creative solutions to elevate your brand
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 rounded-full blur-3xl transition-opacity duration-500`}></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 mb-6 relative z-10`}
                >
                  <Icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <h3
                  className="text-2xl mb-3 relative z-10"
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-white/60 leading-relaxed relative z-10"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {service.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-20 blur-xl`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
