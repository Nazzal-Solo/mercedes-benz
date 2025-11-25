import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
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

  const articles = [
    {
      title: 'The Future of Digital Transformation',
      excerpt: 'Exploring emerging technologies and their impact on business innovation and growth strategies.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    },
    {
      title: 'Artificial Intelligence in Enterprise',
      excerpt: 'How AI is revolutionizing enterprise operations and creating new opportunities for optimization.',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'AI & ML',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
    },
    {
      title: 'Sustainable Tech Solutions',
      excerpt: 'Building environmentally conscious technology solutions for a sustainable digital future.',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Latest <span className="text-gray-400">Insights</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and innovations in technology 
              and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className={`group bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden hover:from-gray-800 hover:to-gray-700 transition-all duration-500 border border-gray-800 hover:border-gray-600 hover:transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs px-2 py-1 bg-white text-black font-medium tracking-wide">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-gray-200 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>

                  <button className="group/button flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium tracking-wide">
                    Read More
                    <ArrowRight size={14} className="group-hover/button:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-transparent text-white px-8 py-4 border border-gray-600 hover:border-gray-400 hover:bg-gray-800/30 transition-all duration-300 text-lg font-medium tracking-wide">
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;