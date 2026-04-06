import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "03368299388",
      href: "tel:03368299388",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Sumiyashaikh37@gmail.com",
      href: "mailto:Sumiyashaikh37@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sumiya88",
      href: "https://www.linkedin.com/in/sumiya88/",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
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
              Let's Connect
            </span>
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to bring your vision to life? Let's build something powerful together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3
                className="text-3xl mb-6"
                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
              >
                Get in Touch
              </h3>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={index}
                      href={contact.href}
                      target={contact.label === "LinkedIn" ? "_blank" : undefined}
                      rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} p-2 flex items-center justify-center`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <div
                          className="text-white/60 text-sm mb-1"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {contact.label}
                        </div>
                        <div
                          className="text-white group-hover:text-purple-300 transition-colors"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                        >
                          {contact.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8"
            >
              <h4
                className="text-2xl mb-3"
                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
              >
                Let's build something powerful
              </h4>
              <p
                className="text-white/70 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Whether you need design, content, or growth strategies, I'm here to help your brand stand out.
              </p>
              <motion.a
                href="mailto:Sumiyashaikh37@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Send a Message
                <Send className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Decorative Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-[3rem] p-12 overflow-hidden">
              {/* Gradient Orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10 space-y-8">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-white/60" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Available Now
                    </span>
                  </div>
                  <p className="text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Ready to take on new projects
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-4xl mb-2" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}>
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      24h
                    </span>
                  </div>
                  <p className="text-white/60" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Average response time
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <p className="text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                        Quality Guaranteed
                      </p>
                      <p className="text-white/60 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Premium work, every time
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
