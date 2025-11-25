import React, { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Zap,
  Shield,
  Star,
  Loader2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import CarDetails from "./CarDetails";

const Models: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingModel, setLoadingModel] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);
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

  const categories = [
    "All",
    "Sedans",
    "SUVs",
    "Electric",
    "AMG",
    "Coupes",
    "Roadsters",
    "Luxury",
  ];

  const models = [
    // ---- Sedans ----
    {
      name: "A-Class Sedan",
      category: "Sedans",
      price: "Starting at $35,000",
      image: "/src/assets/Mercedes Images/A-Class Sedan.jpg",
      features: ["Compact Luxury", "MBUX System", "Turbocharged Engine"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "C-Class Sedan",
      category: "Sedans",
      price: "Starting at $43,550",
      image: "/src/assets/Mercedes Images/C-Class Sedan.jpg",
      features: ["Sport Styling", "MBUX Technology", "Efficient Performance"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "E-Class Sedan",
      category: "Sedans",
      price: "Starting at $56,750",
      image: "/src/assets/Mercedes Images/E-Class Sedan.jpg",
      features: ["Luxury Comfort", "Driver Assistance", "MBUX Infotainment"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "S-Class Sedan",
      category: "Sedans",
      price: "Starting at $109,800",
      image: "/src/assets/Mercedes Images/S-Class Sedan.jpg",
      features: ["Luxury Interior", "Advanced Safety", "Premium Sound"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "Maybach S-Class",
      category: "Luxury",
      price: "Starting at $229,000",
      image: "/src/assets/Mercedes Images/Maybach S-Class.jpg",
      features: [
        "Executive Rear Seats",
        "Exclusive Leather",
        "Ultimate Comfort",
      ],
      isElectric: false,
      isAMG: false,
    },

    // ---- SUVs ----
    {
      name: "GLA SUV",
      category: "SUVs",
      price: "Starting at $37,500",
      image: "/src/assets/Mercedes Images/GLA SUV.jpg",
      features: ["Compact SUV", "4MATIC AWD", "Smart Interior"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "GLB SUV",
      category: "SUVs",
      price: "Starting at $39,950",
      image: "/src/assets/Mercedes Images/GLB SUV.jpg",
      features: ["3rd Row Seating", "Off-Road Package", "Digital Cockpit"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "GLC SUV",
      category: "SUVs",
      price: "Starting at $47,100",
      image: "/src/assets/Mercedes Images/GLC SUV.jpg",
      features: ["All-Terrain", "Panoramic Sunroof", "MBUX Navigation"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "GLE SUV",
      category: "SUVs",
      price: "Starting at $56,750",
      image: "/src/assets/Mercedes Images/GLE SUV.jpg",
      features: ["Spacious Interior", "4MATIC AWD", "Luxury Features"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "GLS SUV",
      category: "SUVs",
      price: "Starting at $81,800",
      image: "/src/assets/Mercedes Images/GLS SUV.jpg",
      features: ["7-Seat Capacity", "Executive Interior", "MBUX for All Rows"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "G-Class",
      category: "SUVs",
      price: "Starting at $139,900",
      image: "/src/assets/Mercedes Images/G-Class.jpg",
      features: ["Iconic Design", "Extreme Off-Road", "Luxury SUV"],
      isElectric: false,
      isAMG: false,
    },

    // ---- Coupes & Roadsters ----
    {
      name: "CLA Coupe",
      category: "Coupes",
      price: "Starting at $39,250",
      image: "/src/assets/Mercedes Images/CLA Coupe.jpg",
      features: ["Sporty Design", "Turbocharged Engine", "Luxury Cabin"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "CLS Coupe",
      category: "Coupes",
      price: "Starting at $72,950",
      image: "/src/assets/Mercedes Images/CLS Coupe.jpg",
      features: ["Four-Door Coupe", "Luxury Cabin", "Advanced Safety"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "SL Roadster",
      category: "Roadsters",
      price: "Starting at $137,400",
      image: "/src/assets/Mercedes Images/SL Roadster.jpg",
      features: ["Convertible Luxury", "Twin-Turbo Engine", "Sport Handling"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "AMG GT Coupe",
      category: "AMG",
      price: "Starting at $118,600",
      image: "/src/assets/Mercedes Images/AMG GT Coupe.jpg",
      features: ["Handcrafted Engine", "Track Performance", "Racing Heritage"],
      isElectric: false,
      isAMG: true,
    },

    // ---- Electric (EQ Series) ----
    {
      name: "EQA",
      category: "Electric",
      price: "Starting at $48,000",
      image: "/src/assets/Mercedes Images/EQA.jpg",
      features: [
        "Compact Electric SUV",
        "Navigation with Charging",
        "Zero Emissions",
      ],
      isElectric: true,
      isAMG: false,
    },
    {
      name: "EQB",
      category: "Electric",
      price: "Starting at $52,750",
      image: "/src/assets/Mercedes Images/EQB.jpg",
      features: ["Electric SUV", "3rd Row Seating", "MBUX with AI"],
      isElectric: true,
      isAMG: false,
    },
    {
      name: "EQC",
      category: "Electric",
      price: "Starting at $67,900",
      image: "/src/assets/Mercedes Images/EQC.jpg",
      features: ["Electric SUV", "Sustainable Luxury", "MBUX Display"],
      isElectric: true,
      isAMG: false,
    },
    {
      name: "EQE Sedan",
      category: "Electric",
      price: "Starting at $74,900",
      image: "/src/assets/Mercedes Images/EQE Sedan.jpg",
      features: ["Luxury Electric Sedan", "Long Range", "MBUX Hyperscreen"],
      isElectric: true,
      isAMG: false,
    },
    {
      name: "EQS Sedan",
      category: "Electric",
      price: "Starting at $102,310",
      image: "/src/assets/Mercedes Images/EQS Sedan.jpg",
      features: ["450+ Mile Range", "Ultra-Fast Charging", "Zero Emissions"],
      isElectric: true,
      isAMG: false,
    },
    {
      name: "EQS SUV",
      category: "Electric",
      price: "Starting at $104,400",
      image: "/src/assets/Mercedes Images/EQS SUV.jpg",
      features: ["Electric SUV", "Spacious Luxury", "Hyperscreen"],
      isElectric: true,
      isAMG: false,
    },

    // ---- AMG Performance ----
    {
      name: "AMG C 63 S",
      category: "AMG",
      price: "Starting at $78,250",
      image: "/src/assets/Mercedes Images/AMG C 63 S.jpg",
      features: ["Handcrafted AMG Engine", "Sport Exhaust", "Track Ready"],
      isElectric: false,
      isAMG: true,
    },
    {
      name: "AMG E 63 S",
      category: "AMG",
      price: "Starting at $112,800",
      image: "/src/assets/Mercedes Images/AMG E 63 S.jpg",
      features: ["Super Sedan", "Handcrafted AMG V8", "Track Performance"],
      isElectric: false,
      isAMG: true,
    },
    {
      name: "AMG G 63",
      category: "AMG",
      price: "Starting at $179,000",
      image: "/src/assets/Mercedes Images/AMG G 63.jpg",
      features: ["Iconic G-Wagon", "AMG V8 Engine", "Extreme Luxury SUV"],
      isElectric: false,
      isAMG: true,
    },
    {
      name: "AMG GT Black Series",
      category: "AMG",
      price: "Starting at $325,000",
      image: "/src/assets/Mercedes Images/AMG GT Black Series.jpg",
      features: ["AMG 720hp V8", "Carbon Fiber Design", "Track Monster"],
      isElectric: false,
      isAMG: true,
    },

    // ---- Additional Models ----
    {
      name: "A-Class Hatchback",
      category: "Sedans",
      price: "Starting at $33,650",
      image: "/src/assets/Mercedes Images/A-Class Hatchback.jpg",
      features: ["Compact Design", "MBUX System", "Efficient Engine"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "GLC Coupe",
      category: "Coupes",
      price: "Starting at $50,200",
      image: "/src/assets/Mercedes Images/GLC Coupe.jpg",
      features: ["Sporty SUV", "Panoramic Roof", "4MATIC AWD"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "GLE Coupe",
      category: "Coupes",
      price: "Starting at $75,950",
      image: "/src/assets/Mercedes Images/GLE Coupe.jpg",
      features: ["Luxury Coupe SUV", "Executive Interior", "Advanced Tech"],
      isElectric: false,
      isAMG: false,
    },
    {
      name: "AMG A 35",
      category: "AMG",
      price: "Starting at $45,500",
      image: "/src/assets/Mercedes Images/AMG A 35.jpg",
      features: ["AMG Performance", "Sport Suspension", "Track Mode"],
      isElectric: false,
      isAMG: true,
    },
    {
      name: "AMG CLA 45",
      category: "AMG",
      price: "Starting at $55,400",
      image: "/src/assets/Mercedes Images/AMG CLA 45.jpg",
      features: ["AMG 4-Cylinder", "Sport Exhaust", "Performance Package"],
      isElectric: false,
      isAMG: true,
    },
    {
      name: "AMG SL 63",
      category: "Roadsters",
      price: "Starting at $178,000",
      image: "/src/assets/Mercedes Images/AMG SL 63.jpg",
      features: ["AMG V8 Power", "Convertible Luxury", "Track Performance"],
      isElectric: false,
      isAMG: true,
    },
    {
      name: "EQE SUV",
      category: "Electric",
      price: "Starting at $89,900",
      image: "/src/assets/Mercedes Images/EQE SUV.jpg",
      features: ["Electric SUV", "Long Range", "MBUX Hyperscreen"],
      isElectric: true,
      isAMG: false,
    },
    {
      name: "AMG EQS 53",
      category: "AMG",
      price: "Starting at $147,500",
      image: "/src/assets/Mercedes Images/AMG EQS 53.jpg",
      features: ["AMG Electric", "Performance Sound", "Track Mode"],
      isElectric: true,
      isAMG: true,
    },
    {
      name: "Maybach GLS",
      category: "Luxury",
      price: "Starting at $175,000",
      image: "/src/assets/Mercedes Images/Maybach GLS.jpg",
      features: [
        "Ultimate Luxury SUV",
        "Executive Seating",
        "Chauffeur Package",
      ],
      isElectric: false,
      isAMG: false,
    },
  ];

  const filteredModels =
    activeCategory === "All"
      ? models
      : models.filter((model) => {
          if (activeCategory === "Electric") return model.isElectric;
          if (activeCategory === "AMG") return model.isAMG;
          return model.category === activeCategory;
        });

  const displayedModels = filteredModels.slice(0, visibleCount);
  const hasMoreModels = visibleCount < filteredModels.length;

  const loadMore = () => {
    setLoadingMore(true);
    // Simulate loading for 1.5 seconds
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, filteredModels.length));
      setLoadingMore(false);
    }, 1500);
  };

  const showLess = () => {
    setVisibleCount(6);
  };

  const openCarDetails = (car: any) => {
    setSelectedCar(car);
  };

  const closeCarDetails = () => {
    setSelectedCar(null);
  };

  const resetVisibleCount = () => {
    setVisibleCount(6);
  };

  const handleLearnMore = (model: any) => {
    setLoadingModel(model.name);
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoadingModel(null);
      openCarDetails(model);
    }, 2000);
  };

  // Reset visible count when category changes
  useEffect(() => {
    resetVisibleCount();
  }, [activeCategory]);

  return (
    <section
      id="models"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
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
              Our <span className="text-gray-400">Models</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover the complete Mercedes-Benz lineup. From luxury sedans to
              high-performance AMG models and innovative electric vehicles.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:scale-105 ${
                    activeCategory === category
                      ? "bg-white text-black"
                      : "bg-transparent text-gray-400 border border-gray-600 hover:border-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedModels.map((model, index) => (
              <div
                key={index}
                className={`group bg-black border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-500 hover:transform hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {model.isElectric && (
                      <span className="flex items-center gap-1 text-xs px-2 py-1 bg-green-600 text-white font-medium tracking-wide">
                        <Zap size={12} />
                        EV
                      </span>
                    )}
                    {model.isAMG && (
                      <span className="flex items-center gap-1 text-xs px-2 py-1 bg-red-600 text-white font-medium tracking-wide">
                        <Star size={12} />
                        AMG
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handleLearnMore(model)}
                      className="p-2 bg-white text-black hover:bg-gray-200 transition-colors duration-300 hover:scale-105"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                    {model.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-lg font-light">
                    {model.price}
                  </p>

                  <div className="space-y-2 mb-6">
                    {model.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-500 text-sm"
                      >
                        <Shield size={14} className="mr-2 text-gray-600" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="https://www.mercedes-benz.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-black py-2 px-4 hover:bg-gray-200 transition-all duration-300 text-sm font-medium tracking-wide uppercase hover:scale-105 text-center"
                    >
                      Visit Mercedes
                    </a>
                    <button
                      onClick={() => handleLearnMore(model)}
                      disabled={loadingModel === model.name}
                      className="flex-1 bg-transparent text-white py-2 px-4 border border-gray-600 hover:border-gray-400 hover:bg-gray-800/30 transition-all duration-300 text-sm font-medium tracking-wide uppercase hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loadingModel === model.name ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Loading...</span>
                        </>
                      ) : (
                        "Learn More"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More / Show Less Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {hasMoreModels && (
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="group bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all duration-300 font-semibold tracking-wide uppercase disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 min-w-[160px]"
                >
                  {loadingMore ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                      <span>Load More</span>
                      <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              )}

              {visibleCount > 6 && (
                <button
                  onClick={showLess}
                  className="group bg-gray-800 text-white px-8 py-4 hover:bg-gray-700 transition-all duration-300 font-semibold tracking-wide uppercase flex items-center gap-3 rounded-lg border border-gray-600 hover:border-gray-500 shadow-md hover:shadow-lg hover:scale-105 min-w-[160px]"
                >
                  <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                  <span>Show Less</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Car Details Modal */}
      {selectedCar && (
        <CarDetails car={selectedCar} onClose={closeCarDetails} />
      )}
    </section>
  );
};

export default Models;
