import React from "react";
import { ArrowUp, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { SiMercedes } from "react-icons/si";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Vehicles: [
      { name: "All Models", href: "#models" },
      { name: "Sedans", href: "#models" },
      { name: "SUVs", href: "#models" },
      { name: "Electric Vehicles", href: "#models" },
      { name: "AMG Performance", href: "#models" },
      { name: "Certified Pre-Owned", href: "#" },
    ],
    Services: [
      { name: "Find a Dealer", href: "#contact" },
      { name: "Service & Parts", href: "#" },
      { name: "Financial Services", href: "#" },
      { name: "Mercedes me", href: "#" },
      { name: "Roadside Assistance", href: "#" },
      { name: "Warranty", href: "#" },
    ],
    Company: [
      { name: "About Mercedes-Benz", href: "#about" },
      { name: "Innovation", href: "#innovation" },
      { name: "Sustainability", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Investor Relations", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Mercedes-Benz Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <a
                href="https://www.mercedes-benz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <SiMercedes className="w-12 h-12 text-white mr-3 cursor-pointer" />
              </a>
              <span className="text-xl font-bold text-white tracking-wider">
                Mercedes-Benz
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The best or nothing. Experience luxury, innovation, and
              performance that has defined automotive excellence for over 135
              years.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 border border-gray-800 hover:border-gray-600 hover:scale-105"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-white mb-6 tracking-wide uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <div className="text-gray-400 text-sm">
              © 2024 Mercedes-Benz USA, LLC. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Legal Notice
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-xs text-gray-500">
              Developed by{" "}
              <span className="text-gray-400 font-medium">Fusion Mind</span>
            </div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105"
            >
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
              <span className="text-sm">Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
