'use client';

import Image from 'next/image';
import type React from 'react';
import { useState } from 'react';

interface ImageData {
  src: string;
  caption: string;
}

interface FeaturedHomeSliderProps {
  images: ImageData[];
}

const FeaturedHomeSlider: React.FC<FeaturedHomeSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) {
    return (
      <div className="relative bg-white rounded-lg overflow-hidden h-96 flex items-center justify-center" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-lg overflow-hidden" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
      <div className="relative h-96">
        {images.map((imageData, index) => (
          <div
            key={`slide-${imageData.src}-${index}`}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="relative">
                <Image
                  src={imageData.src}
                  alt={imageData.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{imageData.caption}</h3>
                <p className="text-gray-600 mb-4">Luxury Summerlin West Home</p>
                <div className="flex space-x-4 text-sm text-gray-700">
                  <span>4+ beds</span>
                  <span>3+ baths</span>
                  <span>2,500+ sq ft</span>
                </div>
                <button type="button" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
            aria-label="Previous featured home"
          >
            ←
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
            aria-label="Next featured home"
          >
            →
          </button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((imageData, index) => (
            <button
              key={`dot-${imageData.src}-${index}`}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedHomeSlider;
