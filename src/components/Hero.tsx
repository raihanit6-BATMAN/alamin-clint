"use client";

import React from "react";
import Image from "next/image";
import { BookingWidget } from "@/components/booking/BookingWidget";

export function Hero() {
  return (
    <section className="hero-section relative z-10 min-h-[100svh] sm:min-h-[850px] lg:min-h-[960px] w-full flex flex-col justify-end pt-24 pb-8 sm:pb-16 bg-transparent">
      {/* 1. Hero Luxury Background: Crisp 2K rendering without compression, excessive zoom, or distortion */}
      <div
        className="hero-fixed-bg fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/hero-bg.webp"
          alt="Luxury chauffeur opening sedan door for executive passenger"
          fill
          priority={true}
          quality={100}
          unoptimized={true}
          sizes="100vw"
          className="hero-bg object-cover object-center w-full h-full transform-none filter-none"
        />
        {/* Clean sibling overlay without blur to preserve sharp car and cityscape details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* 2. Hero Content & Booking Widget Grouped Together in the Lower Viewport */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title: Positioned directly above the booking widget toggles (mb-6 to mb-8), sitting at chest level, centered */}
        <div className="hero-content w-full text-center mx-auto mb-5 sm:mb-8 will-change-transform">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight sm:leading-[58px] md:leading-[68px] lg:leading-[72px] tracking-[0.25px] font-editorial text-[#AECFF3] font-normal max-w-4xl mx-auto drop-shadow-md text-center">
            Your chauffeur awaits.
          </h1>
        </div>

        {/* Booking Card Container */}
        <div className="hero-booking-wrapper w-full">
          <div className="booking-card w-full will-change-transform">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero as HeroSection };
export default Hero;
