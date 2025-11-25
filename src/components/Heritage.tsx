import React from "react";

const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mercedes-Benz Heritage
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            For over 135 years, Mercedes-Benz has been at the forefront of
            automotive innovation, setting the standard for luxury, performance,
            and engineering excellence.
          </p>
        </div>

        {/* Heritage Showcase with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Panel - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Intelligent Drive
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Advanced safety systems that protect what matters most
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Active Brake Assist with Cross-Traffic Function
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Blind Spot Assist with Exit Warning Function
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Active Lane Keeping Assist
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  PRE-SAFE® Sound and Impulse Side
                </li>
              </ul>
            </div>
            <a
              href="https://www.mercedes-benz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors duration-200 w-fit"
            >
              Learn More
            </a>
          </div>

          {/* Right Panel - Mercedes Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 h-full">
              <img
                src="/src/assets/Mercedes Images/AMG GT Coupe.jpg"
                alt="Mercedes-AMG GT Coupe"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold">Mercedes-AMG GT Coupe</p>
                <p className="text-xs text-gray-300">Performance Redefined</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Timeline with Images */}
        <div className="bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Our Legacy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-4">
                <img
                  src="/src/assets/Mercedes Images/S-Class Sedan.jpg"
                  alt="S-Class Heritage"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1886</div>
              <div className="text-sm text-gray-400 mb-2">First Automobile</div>
              <div className="text-xs text-gray-500">
                Karl Benz patents the first gasoline-powered automobile
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <img
                  src="/src/assets/Mercedes Images/EQS Sedan.jpg"
                  alt="EQS Electric"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1926</div>
              <div className="text-sm text-gray-400 mb-2">Brand Merger</div>
              <div className="text-xs text-gray-500">
                Daimler and Benz merge to form Mercedes-Benz
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <img
                  src="/src/assets/Mercedes Images/AMG C 63 S.jpg"
                  alt="AMG Performance"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-white mb-2">1954</div>
              <div className="text-sm text-gray-400 mb-2">
                Safety Innovation
              </div>
              <div className="text-xs text-gray-500">
                Introduction of the crumple zone safety concept
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <img
                  src="/src/assets/Mercedes Images/EQS SUV.jpg"
                  alt="Electric Future"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold text-white mb-2">Today</div>
              <div className="text-sm text-gray-400 mb-2">Electric Future</div>
              <div className="text-xs text-gray-500">
                Leading the charge in sustainable luxury mobility
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://www.mercedes-benz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors duration-200"
          >
            Discover Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
