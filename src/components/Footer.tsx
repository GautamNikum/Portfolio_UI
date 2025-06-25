
import { Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Gautam Nikum
              </span>
            </h3>
            <p className="text-gray-300 mb-4">
              Video Editor & UI/UX Designer creating High quality videos that inspire and engage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="/skills" className="text-gray-300 hover:text-purple-400 transition-colors">Skills</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-purple-400" />
                <span>gautamnikum147@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-purple-400" />
                <span>9171054803</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Gautam Nikum © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
