import React, { useEffect, useState } from "react";
import { X, Star, Shield, Zap, Car, Leaf, ArrowRight } from "lucide-react";

interface CarDetailsProps {
  car: {
    name: string;
    category: string;
    price: string;
    image: string;
    features: string[];
    isElectric: boolean;
    isAMG: boolean;
  };
  onClose: () => void;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState(0);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Wait for animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // Different car views/images
  const carViews = [
    car.image, // Main image
    car.image, // Could be different angles
    car.image, // Interior view
    car.image, // Detail shots
  ];

  const handleArrowClick = () => {
    console.log("Arrow clicked! Current view:", currentView);
    setCurrentView((prev) => (prev + 1) % carViews.length);
  };
  const specifications = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance",
      value: car.isAMG
        ? "AMG Handcrafted Engine"
        : car.isElectric
        ? "Electric Motor"
        : "Turbocharged Engine",
      description: car.isElectric
        ? "Zero emissions, instant torque"
        : "Optimized for power and efficiency",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Safety",
      value: "Mercedes-Benz Safety",
      description: "Advanced driver assistance systems and crash protection",
    },
    {
      icon: <Car className="w-5 h-5" />,
      title: "Drive System",
      value: car.category === "SUVs" ? "4MATIC AWD" : "Rear-Wheel Drive",
      description: "Intelligent all-wheel drive system for optimal traction",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Efficiency",
      value: car.isElectric ? "Zero Emissions" : "Eco-Friendly",
      description: car.isElectric
        ? "100% electric, sustainable luxury"
        : "Advanced fuel efficiency technology",
    },
  ];

  const additionalFeatures = [
    "MBUX Infotainment System",
    "Ambient Lighting",
    "Premium Sound System",
    "Panoramic Sunroof",
    "Heated Seats",
    "Navigation System",
    "Bluetooth Connectivity",
    "Keyless Entry",
  ];

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 p-4 transition-all duration-300 ${
        isOpen ? "bg-opacity-75" : "bg-opacity-0"
      }`}
      onClick={(e) => {
        // Only close if clicking the backdrop itself, not its children
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        className={`bg-black border border-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 transform ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-black border-b border-gray-800 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Car className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{car.name}</h2>
              <p className="text-gray-400">
                {car.category} • {car.price}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-6">
              <div className="relative">
                <img
                  src={carViews[currentView]}
                  alt={car.name}
                  className="w-full h-80 object-cover rounded-lg transition-all duration-500"
                />
                {car.isAMG && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    AMG
                  </div>
                )}
                {car.isElectric && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ELECTRIC
                  </div>
                )}
                {/* View Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carViews.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentView(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                        index === currentView
                          ? "bg-white"
                          : "bg-white bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Specifications
                </h3>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-900 rounded-lg"
                    >
                      <div className="text-gray-400 mt-1">{spec.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-white">
                            {spec.title}
                          </h4>
                          <span className="text-gray-400 text-sm">
                            {spec.value}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {spec.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Additional Features
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {additionalFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
