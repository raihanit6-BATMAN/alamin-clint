"use client";

import React from "react";
import { Luggage, Sliders, BatteryCharging } from "lucide-react";

export function SanctuarySection() {
  return (
    <section
      id="sanctuary"
      className="sanctuary-section relative w-full h-screen min-h-screen overflow-hidden bg-white select-none"
    >
      {/* 1. Centered Top Heading Block (Autonomous entrance + Scroll-tied exit) */}
      <div className="sanctuary-heading-block absolute top-6 sm:top-12 md:top-16 inset-x-0 z-40 text-center px-4 sm:px-6 pointer-events-none will-change-[opacity,transform]">
        <h2 className="sanctuary-title text-2xl sm:text-5xl md:text-6xl font-editorial font-normal tracking-tight text-white mb-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] will-change-[opacity,transform,filter]">
          Step in. Breathe out.
        </h2>
        <p className="sanctuary-subtitle text-xs sm:text-base md:text-lg text-white/90 font-normal max-w-xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] will-change-[opacity,transform,filter]">
          Thoughtful details and discreet service transform every journey into your personal sanctuary.
        </p>
      </div>

      {/* 2. Full-Screen Edge-to-Edge Slides Container */}
      <div className="sanctuary-container w-full h-screen min-h-screen relative overflow-hidden">
        {/* =========================================
            SLIDE 3: "Recharge your batteries" (Base z-10)
           ========================================= */}
        <div className="sanctuary-slide sanctuary-slide-3 absolute inset-0 w-full h-screen min-h-screen overflow-hidden z-10 will-change-transform">
          {/* Full Image */}
          <img
            src="/pic 123/tuch.webp"
            alt="Recharge your batteries - Universal charging and calm cabin"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

          {/* Frosted Glass Info Pill */}
          <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-10 md:left-16 right-4 sm:right-auto max-w-md sm:max-w-lg z-20 pointer-events-none">
            <div className="blacklane-glass-card p-4 sm:p-7 rounded-2xl border border-white/20 backdrop-blur-xl bg-black/40 shadow-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#AECFF3] border border-white/10 shrink-0">
                  <BatteryCharging className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-lg sm:text-2xl font-editorial font-normal text-white tracking-tight">
                  Recharge your batteries
                </h3>
              </div>
              <p className="text-xs sm:text-[15px] text-white/90 leading-relaxed font-light">
                Stay connected and recharged on the move with fast universal multi-device cables, chilled bottled water, and undisturbed quiet.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            SLIDE 2: "You set the tone" (Middle z-20)
           ========================================= */}
        <div className="sanctuary-slide sanctuary-slide-2 absolute inset-0 w-full h-screen min-h-screen overflow-hidden z-20 will-change-transform">
          {/* Full Image */}
          <img
            src="/pic 123/woman.jpg"
            alt="You set the tone - Personalized climate and audio preferences"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

          {/* Frosted Glass Info Pill */}
          <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-10 md:left-16 right-4 sm:right-auto max-w-md sm:max-w-lg z-20 pointer-events-none">
            <div className="blacklane-glass-card p-4 sm:p-7 rounded-2xl border border-white/20 backdrop-blur-xl bg-black/40 shadow-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#AECFF3] border border-white/10 shrink-0">
                  <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-lg sm:text-2xl font-editorial font-normal text-white tracking-tight">
                  You set the tone
                </h3>
              </div>
              <p className="text-xs sm:text-[15px] text-white/90 leading-relaxed font-light">
                Sit back and relax. Music, acoustic insulation, and interior climate are adjusted exactly to your personal preferences.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            SLIDE 1: "A welcome like no other" (Top z-30)
           ========================================= */}
        <div className="sanctuary-slide sanctuary-slide-1 absolute inset-0 w-full h-screen min-h-screen overflow-hidden z-30 will-change-transform">
          {/* Full Image */}
          <img
            src="/pic 123/men.webp"
            alt="A welcome like no other - Chauffeur greeting and luggage handling"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

          {/* Frosted Glass Info Pill */}
          <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-10 md:left-16 right-4 sm:right-auto max-w-md sm:max-w-lg z-20 pointer-events-none">
            <div className="blacklane-glass-card p-4 sm:p-7 rounded-2xl border border-white/20 backdrop-blur-xl bg-black/40 shadow-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#AECFF3] border border-white/10 shrink-0">
                  <Luggage className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-lg sm:text-2xl font-editorial font-normal text-white tracking-tight">
                  A welcome like no other
                </h3>
              </div>
              <p className="text-xs sm:text-[15px] text-white/90 leading-relaxed font-light">
                The door is opened for you. Your luggage is stowed. Everything is taken care of from the moment you step up to your car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SanctuarySection as ExperienceSection };
export default SanctuarySection;
