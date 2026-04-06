import { motion } from "motion/react";
import { Heart, Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: 'Urbanist, sans-serif' }}
            >
              Sumiya Shaikh
            </motion.div>
            <p className="text-white/60" style={{ fontFamily: 'Poppins, sans-serif' }}>
              UI/UX & Visual Designer + YouTube Growth Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}>
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Home", "Work", "Services", "About", "Skills", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}>
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:03368299388"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Phone className="w-4 h-4" />
                03368299388
              </a>
              <a
                href="mailto:Sumiyashaikh37@gmail.com"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Mail className="w-4 h-4" />
                Sumiyashaikh37@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sumiya88/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © 2026 Sumiya Shaikh. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-purple-400 fill-purple-400" />
            <span>and creativity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
