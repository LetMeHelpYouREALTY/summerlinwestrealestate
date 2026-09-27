'use client';

import React, { useState } from 'react';

interface Property {
  id: number;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
}

interface SlideImage {
  src: string;
  caption: string;
}

type FeaturedHomeSliderProps = {
  images?: SlideImage[];
};

const FeaturedHomeSlider: React.FC<FeaturedHomeSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (images?.length) {
    const nextSlide = () =>
      setCurrentSlide((prev) => (prev + 1) % images.length);
    const prevSlide = () =>
      setCurrentSlide((prev) =>
        prev === 0 ? images.length - 1 : prev - 1,
      );

    return (
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-80">
          {images.map((image, index) => (
            <div
              key={image.caption}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.caption}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-center">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          aria-label="Previous community photo"
        >
          ←
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          aria-label="Next community photo"
        >
          →
        </button>
      </div>
    );
  }

  // Sample data - replace with your actual property data
  const featuredProperties: Property[] = [
    {
      id: 1,
      address: "123 Desert Vista Dr, Summerlin West",
      price: "$750,000",
      beds: 4,
      baths: 3,
      sqft: "2,850",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      address: "456 Mountain View Ln, Summerlin West",
      price: "$895,000",
      beds: 5,
      baths: 4,
      sqft: "3,200",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      address: "789 Canyon Ridge Ct, Summerlin West",
      price: "$1,250,000",
      beds: 6,
      baths: 5,
      sqft: "4,100",
      image: "/api/placeholder/400/300"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? featuredProperties.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-96">
        {featuredProperties.map((property, index) => (
          <div
            key={property.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Property Image</span>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {property.price}
                </h3>
                <p className="text-gray-600 mb-4">{property.address}</p>
                <div className="flex space-x-4 text-sm text-gray-700">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft} sq ft</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        aria-label="Previous featured home"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        aria-label="Next featured home"
      >
        →
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredProperties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedHomeSlider;