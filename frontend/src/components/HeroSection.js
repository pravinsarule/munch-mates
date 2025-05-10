import React, { useState, useEffect } from "react";

const HeroSection = () => {
  // Array of background images
  const images = [
    "https://static.wixstatic.com/media/623a24_ad26f6ba7a474830be3a88b985c86a8e~mv2.png/v1/fill/w_1920,h_757,al_c,q_90,enc_avif,quality_auto/623a24_ad26f6ba7a474830be3a88b985c86a8e~mv2.png",
    "https://static.wixstatic.com/media/7c969b_9c95cf348b17442ba77c6762aebc91cb~mv2.jpg/v1/fill/w_1901,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7c969b_9c95cf348b17442ba77c6762aebc91cb~mv2.jpg", 
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&auto=format&fit=crop", 
  ];




  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Optional: Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section
      className="min-h-[70vh] lg:h-screen flex items-center justify-center bg-cover bg-center text-center relative"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay for readability
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out", // Smooth transition
      }}
    >
      
      {/* Content */}
      <div className="max-w-2xl px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          Great food makes good times even better
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-white drop-shadow-md">
          Elevate your meals with premium private chefs near you.
        </p>
        <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;