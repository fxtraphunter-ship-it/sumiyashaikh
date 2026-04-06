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
          className="text-center mb-12"
        >
          <h2
            className="text-5xl lg:text-6xl mb-3"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Let's build something powerful together
          </p>
        </motion.div>

        {/* Contact Info Cards - Compact Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.label === "LinkedIn" ? "_blank" : undefined}
                rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-5 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${contact.gradient} p-2 flex items-center justify-center`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div
                    className="text-white/60 text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {contact.label}
                  </div>
                </div>
                <div
                  className="text-white group-hover:text-purple-300 transition-colors text-sm"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                >
                  {contact.value}
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Section - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
            <h4
              className="text-2xl mb-3"
              style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
            >
              Ready to Start Your Project?
            </h4>
            <p
              className="text-white/70 mb-6 max-w-xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Whether you need design, content, or growth strategies, I'm here to help your brand stand out.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="https://wa.me/923368299388"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Send a Message
                <Send className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sumiya88/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}