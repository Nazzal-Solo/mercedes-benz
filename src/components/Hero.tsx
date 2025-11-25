import React, { useEffect, useState } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import VideoModal from "./VideoModal";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWatchFilm = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const handleExploreModels = () => {
    const modelsSection = document.getElementById("models");
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
          alt="Mercedes-Benz Vehicle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            <span className="block text-white font-bold">
              The Best or Nothing
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#CCCCCC] mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Experience the pinnacle of automotive excellence with Mercedes-Benz.
            Where luxury meets innovation, and every journey becomes
            extraordinary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <button
              onClick={handleExploreModels}
              className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 text-base sm:text-lg font-medium tracking-wide uppercase hover:scale-105 border-2 border-white w-full sm:w-auto"
            >
              Explore Models
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
            <button
              onClick={handleWatchFilm}
              className="group bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-base sm:text-lg font-medium tracking-wide uppercase flex items-center gap-2 hover:scale-105 w-full sm:w-auto"
            >
              <Play size={18} />
              Watch Film
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex flex-col items-center gap-3">
            <p className="text-gray-300 text-sm font-light tracking-wide">
              Scroll to explore
            </p>
            <ChevronDown className="w-4 h-4 text-gray-300 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoUrl="https://www.youtube.com/embed/HRcKbig8LxQ?autoplay=1&mute=0&vq=hd1080&rel=0&modestbranding=1&si=-UJgFIjPMo8bxdDi"
        title="Mercedes-Benz: The Best or Nothing"
      />
    </section>
  );
};

export default Hero;
