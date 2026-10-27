"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ServiceDetailModal } from "@/components/ui/Modals";

interface ServiceCardData {
  category: string;
  title: string;
  body: string;
  image: string;
  href: string;
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    category: "Airport transfers",
    title: "Smooth landings, every time.",
    body: "Delayed flight? Chauffeurs track arrivals and adjust accordingly. Plus, you have 1 hour of complimentary wait time just in case.",
    image: "https://static.blacklane.com/assets/_next/static/media/1.879377e626f27fdd.webp",
    href: "/airport-transfer/",
  },
  {
    category: "Hourly and full day hire",
    title: "Seize the day.",
    body: "Reserve a dedicated chauffeur from 2 to 24 hours. They'll be on standby as long as you need them.",
    image: "https://static.blacklane.com/assets/_next/static/media/2.9ae17562d88c590d.webp",
    href: "/hourly-car-service/",
  },
  {
    category: "City-to-city",
    title: "Between cities, done better.",
    body: "Turn long-distance journeys into time well spent. Arrive refreshed, not stressed.",
    image: "https://static.blacklane.com/assets/_next/static/media/3.a05cc4329bbe2ee0.webp",
    href: "/city-to-city/",
  },
  {
    category: "Enterprise and agency solutions",
    title: "Corporate travel, simplified.",
    body: "One platform for companies and agencies to book, track, and account for every journey.",
    image: "https://static.blacklane.com/assets/_next/static/media/4.13f5624e9bdcc2ee.webp",
    href: "/business/",
  },
];

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // For desktop: 2 cards per view (maxIndex = 2)
  // For mobile: 1 card per view (maxIndex = 3)
  const maxIndex = isDesktop ? SERVICE_CARDS.length - 2 : SERVICE_CARDS.length - 1;

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    } else if (diff < -45) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
    setTouchStartX(null);
  };

  const currentDisplay = String(currentIndex + 1).padStart(2, "0");
  const totalDisplay = String(maxIndex + 1).padStart(2, "0");

  return (
    <>
      <section
        id="services"
        style={{ backgroundColor: "#b6d5f4" }}
        className="services-section relative z-20 px-4 sm:px-6 lg:px-8 bg-[#b6d5f4] text-[#0F1319] overflow-hidden will-change-[background-color]"
      >
        <div className="max-w-[1440px] mx-auto">
          {/* 1. Headline Block: Vertically positioned so "Arrive at your best." is centered while card tops peek in */}
          <div className="services-heading-wrapper pt-16 sm:pt-28 md:pt-36 lg:pt-40 flex flex-col justify-center items-center will-change-transform">
            <div className="services-heading-block text-center mx-auto max-w-5xl will-change-[opacity,transform,filter]">
              <h2 className="services-title font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-normal text-black tracking-tight leading-none text-center">
                Arrive at your best.
              </h2>
              <p className="services-subtitle mt-3 sm:mt-5 md:mt-6 text-base sm:text-xl md:text-2xl text-slate-800/80 font-normal text-center">
                Effortless journeys, tailored to you.
              </p>
            </div>
          </div>

          {/* 2. Slider Viewport & Track: Controlled by Stage 2 (70% - 95%) scroll reveal */}
          <div
            className="services-cards-wrapper relative mt-8 md:mt-12 pb-24 will-change-[opacity,transform]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden pb-4">
              <div
                className="flex transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] gap-6 md:gap-8"
                style={{
                  transform: isDesktop
                    ? `translateX(-${currentIndex * 50}%)`
                    : `translateX(calc(-${currentIndex} * (100% + 1.5rem)))`,
                }}
              >
                {SERVICE_CARDS.map((card, idx) => (
                  <div
                    key={idx}
                    className="service-card w-full md:w-[calc(50%-16px)] shrink-0 border-none bg-transparent p-0 shadow-none flex flex-col justify-between group"
                  >
                    <div>
                      {/* Big, Bold Service Preview Image (no outer borders, wide and bold) */}
                      <div className="w-full h-[320px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden mb-6 relative">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl md:rounded-3xl shadow-none group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>

                      {/* Clean Text Hierarchy directly beneath borderless images */}
                      <div className="px-1">
                        <span className="text-sm sm:text-base font-medium text-slate-800/80 tracking-[0.15px] block mb-2">
                          {card.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-[#0F1319] tracking-tight mb-3">
                          {card.title}
                        </h3>
                        <p className="text-sm sm:text-base font-light leading-relaxed text-[#0F1319]/80 mb-6">
                          {card.body}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Outlined Pill Button */}
                    <div className="px-1 pt-1 pb-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(card)}
                        className="inline-flex items-center gap-2 border border-black/30 hover:border-black text-[#0F1319] rounded-full px-5 py-2.5 transition-all duration-200 cursor-pointer font-medium text-sm group-hover:bg-black group-hover:text-white"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Slider Navigation Controls */}
            <div className="mt-8 flex items-center justify-between px-1">
              {/* Counter Display: 01 / 03 */}
              <div className="text-sm font-medium tracking-widest text-[#0F1319] font-mono">
                <span>{currentDisplay}</span>
                <span className="text-[#0F1319]/50 mx-1.5">/</span>
                <span className="text-[#0F1319]/50">{totalDisplay}</span>
              </div>

              {/* Circular Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  aria-label="Previous slide"
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    currentIndex === 0
                      ? "opacity-35 cursor-not-allowed bg-black/5 text-[#0F1319]"
                      : "bg-white/80 hover:bg-white active:scale-95 text-[#0F1319] shadow-sm hover:shadow-md border border-black/10"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  aria-label="Next slide"
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    currentIndex >= maxIndex
                      ? "opacity-35 cursor-not-allowed bg-black/5 text-[#0F1319]"
                      : "bg-white/80 hover:bg-white active:scale-95 text-[#0F1319] shadow-sm hover:shadow-md border border-black/10"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Details Modal */}
      <ServiceDetailModal
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </>
  );
}

export { ServicesSection as ServicesSlider };
export default ServicesSection;
