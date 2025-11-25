import React, { useEffect, useState, useRef } from 'react';
import { Code, Smartphone, Globe, Zap, Database, Shield } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies and modern frameworks.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Integration']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native Development', 'Cross-Platform', 'App Store Optimization']
    },
    {
      icon: <Globe size={40} />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies tailored to your business goals.',
      features: ['Market Analysis', 'Technology Roadmap', 'Growth Planning']
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance Optimization',
      description: 'Advanced optimization techniques to maximize your digital platform performance.',
      features: ['Speed Enhancement', 'Code Optimization', 'Infrastructure Scaling']
    },
    {
      icon: <Database size={40} />,
      title: 'Data Solutions',
      description: 'Robust data management and analytics solutions for informed decision making.',
      features: ['Data Architecture', 'Analytics Integration', 'Business Intelligence']
    },
    {
      icon: <Shield size={40} />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance frameworks for your business.',
      features: ['Security Audits', 'Compliance Management', 'Risk Assessment']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Our <span className="text-gray-400">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to elevate your business and drive sustainable growth 
              in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-black border border-gray-800 p-8 hover:border-gray-600 transition-all duration-500 hover:transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-500 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;