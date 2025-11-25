import React, { useEffect, useState, useRef } from "react";
import { Award, Globe, Users, Zap, Shield, Star } from "lucide-react";

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Shield size={32} />,
      title: "Safety First",
      description:
        "Advanced safety systems that protect what matters most, with over 50 assistance systems available across our lineup.",
    },
    {
      icon: <Star size={32} />,
      title: "Luxury Redefined",
      description:
        "Uncompromising attention to detail and craftsmanship that creates the ultimate driving experience.",
    },
    {
      icon: <Zap size={32} />,
      title: "Electric Future",
      description:
        "Leading the charge in sustainable luxury mobility with our EQ electric vehicle lineup.",
    },
    {
      icon: <Award size={32} />,
      title: "Innovation Excellence",
      description:
        "Pioneering automotive technology and intelligent systems that enhance every journey.",
    },
  ];

  const achievements = [
    {
      number: "135+",
      label: "Years of Innovation",
      description: "Since 1886, we've been setting the standard",
    },
    {
      number: "50+",
      label: "Safety Systems",
      description: "Advanced driver assistance features",
    },
    {
      number: "450+",
      label: "Miles Range",
      description: "Electric range on EQS models",
    },
    {
      number: "2030",
      label: "Carbon Neutral",
      description: "Our commitment to sustainability",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Mercedes-Benz <span className="text-gray-400">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover the core values that drive Mercedes-Benz forward. From
              safety and luxury to innovation and sustainability, these
              principles guide everything we do.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-500 border border-gray-800 hover:border-gray-600 hover:transform hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-12 border border-gray-800 rounded-2xl mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-6 tracking-wide">
                Our Impact
              </h3>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`text-center ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-300 mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Promise */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed mb-8">
                "The best or nothing" isn't just our slogan—it's our promise.
                Every Mercedes-Benz vehicle represents our unwavering commitment
                to excellence, innovation, and the pursuit of automotive
                perfection.
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.mercedes-benz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-8 py-4 hover:bg-gray-200 transition-all duration-300 text-lg font-medium tracking-wide uppercase hover:scale-105"
                >
                  Explore Our Story
                </a>
                <a
                  href="https://www.mercedes-benz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent text-white px-8 py-4 border border-gray-600 hover:border-gray-400 hover:bg-gray-800/30 transition-all duration-300 text-lg font-medium tracking-wide uppercase hover:scale-105"
                >
                  Discover Innovation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
