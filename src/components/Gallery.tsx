"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: string;
  src: string;
  type: "image" | "video";
  alt: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: "vid1",
    src: "/images/seven.mp4",
    type: "video",
    alt: "Tailor Made Collection Video 1",
  },
  {
    id: "img1",
    src: "/images/one.jpeg",
    type: "image",
    alt: "Tailor Made Ethnic Wear Collection 1",
  },
  {
    id: "img2",
    src: "/images/two.jpeg",
    type: "image",
    alt: "Tailor Made Ethnic Wear Collection 2",
  },
  {
    id: "img5",
    src: "/images/five.jpeg",
    type: "image",
    alt: "Tailor Made Ethnic Wear Collection 5",
  },
  {
    id: "img6",
    src: "/images/six.jpeg",
    type: "image",
    alt: "Tailor Made Ethnic Wear Collection 6",
  },
  {
    id: "vid2",
    src: "/images/eight.mp4",
    type: "video",
    alt: "Tailor Made Collection Video 2",
  },
  {
    id: "vid3",
    src: "/images/nine.mp4",
    type: "video",
    alt: "Tailor Made Collection Video 3",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Carousel */}
        <div className="relative mb-12">
          <motion.div
            className="relative h-80 md:h-[450px] lg:h-[550px] overflow-hidden rounded-2xl shadow-2xl bg-gray-900"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <AnimatePresence mode="wait">
              {currentItem.type === "image" ? (
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={currentItem.src}
                    alt={currentItem.alt}
                    fill
                    className="h-full w-full object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
                  />
                </motion.div>
              ) : (
                <motion.video
                  key={currentItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  src={currentItem.src}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  controls
                />
              )}
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Slide counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {carouselItems.length}
            </div>
          </motion.div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-2 md:gap-3 justify-center overflow-x-auto pb-4 snap-x">
          {carouselItems.map((item, index) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden snapshot-start border-2 transition-colors ${
                index === currentIndex
                  ? "border-amber-600 shadow-lg"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="h-full w-full object-cover"
                  sizes="80px"
                />
              ) : (
                <div className="relative h-full w-full bg-gray-800 flex items-center justify-center">
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="text-white text-lg">▶</div>
                  </div>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
