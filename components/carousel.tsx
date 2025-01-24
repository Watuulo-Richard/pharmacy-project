"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const carouselItems = [
  {
    image: "/1.jpg",
    title: "Caring for a better life with medication",
    subtitle: "Rhoncus mattis rhoncus urna neque viverra.",
  },
  {
    image: "/2.jpg",
    title: "Healthcare Doesn’t Have To Be Expensive.",
    subtitle: "Anytime, Anywhere",
  },
  {
    image: "/3.jpg",
    title: "Optimization for Healthcare Content with medication",
    subtitle: "With Telemedicine",
  },
];

export default function CustomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="object-cover object-center w-full h-full"
              width={500}
              height={300}
            />
            <div className="absolute inset-0 bg-gray-800/50" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 bottom-0 md:bottom-1/4 md:top-1/2 text-center  flex flex-col items-center justify-end p-6 text-white">
        <h2 className="text-3xl font-bold mb-2">
          {carouselItems[currentSlide].title}
        </h2>
        <p className="text-xl mb-8">{carouselItems[currentSlide].subtitle}</p>
        <div className="flex space-x-2 mb-4">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <div className="">
            <Button>
                <Link href="#">Book Now</Link>
            </Button>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors "
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}