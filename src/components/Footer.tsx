
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sikora-green text-sikora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/7903c528-82ad-4aa2-88b8-47d0889f0278.png" 
                alt="Sikora Logo" 
                className="h-8"
              />
            </div>
            <p className="text-sikora-cream/80 max-w-md mb-4 leading-relaxed">
              Every sip tells a story of tradition, heritage, and the warmth of Indian chai culture. 
              Crafted with love, served with memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sikora-cream/70 hover:text-sikora-orange transition-colors">
                Facebook
              </a>
              <a href="#" className="text-sikora-cream/70 hover:text-sikora-orange transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sikora-cream/70 hover:text-sikora-orange transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/story" className="text-sikora-cream/80 hover:text-sikora-orange transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sikora-cream/80 hover:text-sikora-orange transition-colors">
                  Shop Teas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sikora-cream/80 hover:text-sikora-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sikora-cream/80">
              <li>hello@sikora.tea</li>
              <li>+91-9929003003</li>
              <li>Raj House, Jodhpur, Rajasthan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sikora-cream/20 mt-8 pt-8 text-center text-sikora-cream/60">
          <p>&copy; 2024 Sikora. All rights reserved. Every sip, a story.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
