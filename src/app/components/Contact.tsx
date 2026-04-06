import { motion } from "motion/react";
import { Mail, Linkedin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
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
              Let's Work Together
            </span>
          </h2>
          <p
            className="text-white/60 text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Let's build something amazing together
          </p>
        </motion.div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl"
          >
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white mb-2 text-sm font-semibold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-2 text-sm font-semibold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2 text-sm font-semibold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Email Card */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-full h-full text-purple-400" />
                </div>
                <div>
                  <h3
                    className="text-lg text-white mb-1"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:Sumiyashaikh37@gmail.com"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Sumiyashaikh37@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-full h-full text-purple-400" />
                </div>
                <div>
                  <h3
                    className="text-lg text-white mb-1"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                  >
                    LinkedIn
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/sumiya88/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    linkedin.com/in/sumiya88
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-full h-full text-purple-400" />
                </div>
                <div>
                  <h3
                    className="text-lg text-white mb-1"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                  >
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/923368299388"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple-400 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    +92 336 8299388
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Message */}
            <div className="backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6">
              <p
                className="text-white/80 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Have a project in mind? Let's discuss how we can work together to bring your vision to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}