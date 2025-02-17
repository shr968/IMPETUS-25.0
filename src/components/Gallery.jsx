import React, { useState, useEffect } from "react";
import Section from "./Section";

// Import images from the assets folder
import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img3.jpg";
import image4 from "../assets/images/img1.jpg";
import image5 from "../assets/images/img2.jpg";

// Import icons
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <Section>
      <center>
        <h4 className="h4 mb-12 text-4xl text-white-500">TRIP DOWN THE MEMORY LANE!</h4>
      </center>
      <div className="relative mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-2/3 p-4">
        {/* Slideshow */}
        <div className="relative flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-[70%] max-h-[500px] rounded-lg shadow-lg transition-transform duration-500"
            onClick={openLightbox}
          />
          {/* Stylish Navigation Buttons */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 md:p-3"
            onClick={prevImage}
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600 md:p-3"
            onClick={nextImage}
            aria-label="Next Image"
          >
            <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
          onClick={closeLightbox}
        >
          <div className="relative max-w-3xl mx-auto p-4 bg-white rounded-lg">
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold"
              onClick={closeLightbox}
            >
              ×
            </button>
            <img
              src={images[currentIndex]}
              alt={`Lightbox Image ${currentIndex + 1}`}
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
                onClick={prevImage}
              >
                Prev
              </button>
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
                onClick={nextImage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
