import React, { useEffect, useState, useRef } from "react";
import { Shield, Zap, Brain, Wifi, Car, Leaf } from "lucide-react";

const Innovation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Safety");
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

  const innovations = {
    Safety: {
      icon: <Shield size={40} />,
      title: "Intelligent Drive",
      description: "Advanced safety systems that protect what matters most",
      features: [
        "Active Brake Assist with Cross-Traffic Function",
        "Blind Spot Assist with Exit Warning Function",
        "Active Lane Keeping Assist",
        "PRE-SAFE® Sound and Impulse Side",
      ],
      image: "/src/assets/Mercedes Images/S-Class Sedan.jpg",
    },
    Electric: {
      icon: <Zap size={40} />,
      title: "EQS Technology",
      description: "Leading the electric revolution with sustainable luxury",
      features: [
        "450+ miles of range on a single charge",
        "Ultra-fast charging up to 200 kW",
        "HEPA air filtration system",
        "Over-the-air software updates",
      ],
      image: "/src/assets/Mercedes Images/EQS Sedan.jpg",
    },
    Autonomous: {
      icon: <Brain size={40} />,
      title: "DRIVE PILOT",
      description: "The future of autonomous driving is here",
      features: [
        "Level 3 autonomous driving capability",
        "Highway traffic jam assistance",
        "Advanced sensor fusion technology",
        "Machine learning algorithms",
      ],
      image: "/src/assets/Mercedes Images/AMG GT Coupe.jpg",
    },
    Connectivity: {
      icon: <Wifi size={40} />,
      title: "MBUX System",
      description: "Intelligent infotainment that learns and adapts",
      features: [
        "Natural language voice control",
        "Augmented reality navigation",
        "Personalized user profiles",
        "Mercedes me connect services",
      ],
      image: "/src/assets/Mercedes Images/EQS SUV.jpg",
    },
  };

  const tabs = Object.keys(innovations);
  const currentInnovation = innovations[activeTab as keyof typeof innovations];

  return (
    <section
      id="innovation"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Technology & <span className="text-gray-400">Innovation</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of mobility through cutting-edge technology,
              sustainable solutions, and intelligent systems that enhance every
              journey.
            </p>
          </div>

          {/* Innovation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:scale-105 ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "bg-transparent text-gray-400 border border-gray-600 hover:border-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Innovation Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="text-gray-400 mb-6">{currentInnovation.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
                {currentInnovation.title}
              </h3>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {currentInnovation.description}
              </p>

              <div className="space-y-4 mb-8">
                {currentInnovation.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://www.mercedes-benz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-3 hover:bg-gray-200 transition-all duration-300 text-lg font-medium tracking-wide uppercase hover:scale-105"
              >
                Learn More
              </a>
            </div>

            <div
              className={`${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={currentInnovation.image}
                  alt={currentInnovation.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Innovation Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-black border border-gray-800 hover:border-gray-600 transition-all duration-300">
              <Car size={32} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">50+</h4>
              <p className="text-gray-400">Safety & Assistance Systems</p>
            </div>
            <div className="text-center p-8 bg-black border border-gray-800 hover:border-gray-600 transition-all duration-300">
              <Zap size={32} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">450+</h4>
              <p className="text-gray-400">Miles Electric Range (EQS)</p>
            </div>
            <div className="text-center p-8 bg-black border border-gray-800 hover:border-gray-600 transition-all duration-300">
              <Leaf size={32} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">2030</h4>
              <p className="text-gray-400">Carbon Neutral Goal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
