import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SiMercedes } from "react-icons/si";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      href: "#home",
      label: "Home",
      onClick: () => handleNavClick("#home"),
    },
    {
      href: "#models",
      label: "Models",
      onClick: () => handleNavClick("#models"),
    },
    {
      href: "#innovation",
      label: "Innovation",
      onClick: () => handleNavClick("#innovation"),
    },
    {
      href: "#about",
      label: "About",
      onClick: () => handleNavClick("#about"),
    },
    {
      href: "#contact",
      label: "Values",
      onClick: () => handleNavClick("#contact"),
    },
  ];

  const handleNavClick = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mercedes-Benz Logo */}
          <div className="flex-shrink-0">
            <a
              href="https://www.mercedes-benz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:scale-110 transition-transform duration-300"
            >
              <SiMercedes className="h-8 sm:h-10 w-auto text-white cursor-pointer" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={link.onClick}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <a
                href="https://www.mercedes-benz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1C1C1C] text-white px-6 py-2 rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 text-sm font-medium tracking-wide uppercase hover:shadow-lg hover:shadow-white/10"
              >
                Visit Mercedes
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  link.onClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase w-full text-left"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://www.mercedes-benz.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full mt-4 bg-[#1C1C1C] text-white px-6 py-2 rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 text-sm font-medium tracking-wide uppercase hover:shadow-lg hover:shadow-white/10 block text-center"
            >
              Visit Mercedes
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
