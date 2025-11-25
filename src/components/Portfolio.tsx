import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
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

  const filters = ['All', 'Web Development', 'Mobile Apps', 'Digital Strategy'];

  const projects = [
    {
      title: 'Enterprise Platform',
      category: 'Web Development',
      description: 'Modern enterprise solution with advanced analytics and reporting capabilities.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      technologies: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Apps',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg',
      technologies: ['React Native', 'TypeScript', 'Firebase']
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Scalable e-commerce solution with advanced inventory management.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      technologies: ['Next.js', 'Stripe', 'MongoDB']
    },
    {
      title: 'Digital Transformation',
      category: 'Digital Strategy',
      description: 'Complete digital transformation strategy for Fortune 500 company.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg',
      technologies: ['Strategy', 'Analytics', 'Cloud']
    },
    {
      title: 'IoT Dashboard',
      category: 'Web Development',
      description: 'Real-time IoT monitoring dashboard with predictive analytics.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      technologies: ['Vue.js', 'Python', 'InfluxDB']
    },
    {
      title: 'Health & Wellness App',
      category: 'Mobile Apps',
      description: 'Comprehensive health tracking application with AI-powered insights.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
      technologies: ['Flutter', 'TensorFlow', 'AWS']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Our <span className="text-gray-400">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Explore our collection of successful projects and digital solutions that have 
              transformed businesses across various industries.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-white text-black'
                      : 'bg-transparent text-gray-400 border border-gray-600 hover:border-gray-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-black border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-500 hover:transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white text-black hover:bg-gray-200 transition-colors duration-300">
                      <ExternalLink size={16} />
                    </button>
                    <button className="p-2 bg-white text-black hover:bg-gray-200 transition-colors duration-300">
                      <Github size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-800 text-gray-400 tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;