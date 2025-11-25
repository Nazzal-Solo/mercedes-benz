import React from "react";

const FindYourDealer: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Dealer
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Locate your nearest Mercedes-Benz dealer for sales, service, and
            support. Experience the luxury and excellence you deserve.
          </p>
        </div>

        {/* Search Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Enter ZIP code or city"
              className="w-full pl-10 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            FIND DEALERS
          </button>
        </div>

        {/* Service Types Section */}
        <div className="text-center">
          <h3 className="text-xl text-white mb-8">
            Or browse by service type:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <button className="bg-blue-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              New Vehicle Sales
            </button>
            <button className="bg-blue-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              Certified Pre-Owned
            </button>
            <button className="bg-blue-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              Service & Maintenance
            </button>
            <button className="bg-blue-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              Parts & Accessories
            </button>
            <button className="bg-blue-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              Financial Services
            </button>
            <button className="bg-blue-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
              Mercedes-Benz Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourDealer;
