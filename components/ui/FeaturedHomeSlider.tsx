"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Property {
  id: number;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
}

export type FeaturedSliderImage = {
  src: string;
  caption: string;
};

type FeaturedHomeSliderProps = {
  images?: FeaturedSliderImage[];
};

const defaultProperties: Property[] = [
  {
    id: 1,
    address: "123 Desert Vista Dr, Summerlin West",
    price: "$750,000",
    beds: 4,
    baths: 3,
    sqft: "2,850",
    image: "/api/placeholder/400/300",
  },
  {
    id: 2,
    address: "456 Mountain View Ln, Summerlin West",
    price: "$895,000",
    beds: 5,
    baths: 4,
    sqft: "3,200",
    image: "/api/placeholder/400/300",
  },
  {
    id: 3,
    address: "789 Canyon Ridge Ct, Summerlin West",
    price: "$1,250,000",
    beds: 6,
    baths: 5,
    sqft: "4,100",
    image: "/api/placeholder/400/300",
  },
];

const FeaturedHomeSlider: React.FC<FeaturedHomeSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (images && images.length > 0) {
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) =>
        prev === 0 ? images.length - 1 : prev - 1,
      );
    };

    const current = images[currentSlide];

    return (
      <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={current.src}
            alt={current.caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-xl font-semibold text-white">{current.caption}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/75"
          aria-label="Previous neighborhood"
        >
          ←
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/75"
          aria-label="Next neighborhood"
        >
          →
        </button>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  const featuredProperties = defaultProperties;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? featuredProperties.length - 1 : prev - 1,
    );
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative h-96">
        {featuredProperties.map((property, index) => (
          <div
            key={property.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="grid h-full grid-cols-1 md:grid-cols-2">
              <div className="flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">Property Image</span>
              </div>
              <div className="flex flex-col justify-center p-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">
                  {property.price}
                </h3>
                <p className="mb-4 text-gray-600">{property.address}</p>
                <div className="flex space-x-4 text-sm text-gray-700">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft} sq ft</span>
                </div>
                <button
                  type="button"
                  className="mt-4 rounded bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/75"
        aria-label="Previous featured home"
      >
        ←
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/75"
        aria-label="Next featured home"
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {featuredProperties.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedHomeSlider;
