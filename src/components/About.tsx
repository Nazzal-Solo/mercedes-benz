import React, { useEffect, useState, useRef } from "react";
import { Award, Globe, Users, Zap } from "lucide-react";
import { SiMercedes } from "react-icons/si";

const About: React.FC = () => {
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

  const milestones = [
    {
      year: "1886",
      title: "The Beginning",
      description:
        "Karl Benz patents the first automobile, laying the foundation for Mercedes-Benz.",
    },
    {
      year: "1926",
      title: "Mercedes-Benz Born",
      description:
        "Merger of Daimler and Benz creates the legendary Mercedes-Benz brand.",
    },
    {
      year: "2021",
      title: "Electric Future",
      description:
        "Launch of EQS marks our commitment to sustainable luxury mobility.",
    },
    {
      year: "2024",
      title: "Innovation Continues",
      description:
        "Leading the industry with autonomous driving and connected technologies.",
    },
  ];

  const achievements = [
    {
      icon: <Award size={32} />,
      title: "135+ Years",
      description: "Of automotive innovation and excellence",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Presence",
      description: "Available in over 200 countries worldwide",
    },
    {
      icon: <Users size={32} />,
      title: "170,000+",
      description: "Employees driving innovation daily",
    },
    {
      icon: <Zap size={32} />,
      title: "Future Ready",
      description: "Leading electric and autonomous vehicle development",
    },
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              About <span className="text-gray-400">Mercedes-Benz</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              For over 135 years, Mercedes-Benz has been synonymous with luxury,
              innovation, and performance. From inventing the automobile to
              pioneering electric mobility, we continue to shape the future of
              transportation.
            </p>
          </div>

          {/* Heritage Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center tracking-wide">
              Our Heritage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-gray-900 to-gray-800 p-6 hover:from-gray-800 hover:to-gray-700 transition-all duration-500 border border-gray-800 hover:border-gray-600 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-white mb-2 tracking-tight">
                    {milestone.year}
                  </div>
                  <h4 className="text-lg font-bold text-gray-300 mb-3 tracking-wide">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center tracking-wide">
              Our Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`group text-center p-8 bg-black border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:-translate-y-2 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300 mb-6 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 tracking-wide">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Promise */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed">
                "The best or nothing" isn't just our slogan—it's our promise.
                Every Mercedes-Benz vehicle represents our unwavering commitment
                to excellence, innovation, and the pursuit of automotive
                perfection.
              </blockquote>
              <div className="mt-8">
                <a
                  href="https://www.mercedes-benz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-110 transition-transform duration-300"
                >
                  <SiMercedes
                    className="w-16 h-16 text-white mx-auto animate-spin cursor-pointer"
                    style={{ animationDuration: "8s" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
