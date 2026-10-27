"use client";

import React from "react";
import Link from "next/link";
import { Users, Briefcase, Navigation, Phone, MessageSquare, Shield, Check, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function AppSection() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-[#AECFF3] text-[#0F1319] overflow-hidden relative">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 1. Left Column: Big bold serif heading, subtitle & official download badges */}
          <FadeIn className="lg:col-span-5 flex flex-col justify-center text-left">
            <h2 className="text-4xl sm:text-6xl lg:text-[64px] leading-[1.1] sm:leading-[1.15] font-editorial font-normal tracking-[0.25px] text-[#0F1319] mb-5">
              We move with you.
            </h2>
            <p className="text-lg sm:text-xl lg:text-[22px] leading-relaxed font-sans font-normal text-[#0F1319]/80 mb-10 max-w-lg">
              Have all your journeys in the palm of your hand with the Blacklane app.
            </p>

            {/* Official Store Badges */}
            <div className="flex flex-wrap items-center gap-3.5">
              {/* Badge 1: Official Apple App Store Badge */}
              <a
                href="https://blacklane.onelink.me/FzXX/iOSAppDownload"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the Apple App Store"
                className="h-11 px-4 bg-black hover:opacity-85 active:scale-95 text-white rounded-xl inline-flex items-center gap-2.5 transition-all shadow-sm hover:shadow-md cursor-pointer border border-black/10 shrink-0"
              >
                {/* Official Apple Icon */}
                <svg
                  className="w-[22px] h-[22px] fill-current text-white shrink-0"
                  viewBox="0 0 170 170"
                  aria-hidden="true"
                >
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.07-7.73-7.85-12.09-14.34-6.43-9.58-11.41-20.44-14.94-32.59-3.53-12.14-5.3-23.75-5.3-34.81 0-16.14 4.13-29.62 12.39-40.43 8.26-10.82 18.77-16.35 31.54-16.61 4.58 0 10.15 1.25 16.71 3.77 6.56 2.51 10.74 3.83 12.54 3.96 1.8-.13 6.13-1.48 12.98-4.07 6.86-2.59 12.19-3.83 16-3.73 11.75.52 21.32 4.67 28.71 12.46 7.39 7.78 12.15 17.51 14.28 29.18-10.45 6.32-15.62 15.11-15.52 26.37.1 9.94 3.97 18.32 11.61 25.13 7.64 6.81 16.79 10.72 27.46 11.74-2.17 6.44-4.89 13.06-8.17 19.86zM119.22 33.04c0-7.46 2.66-14.45 7.99-20.97 5.33-6.52 11.94-10.84 19.84-12.97.13 1.05.2 2.04.2 2.97 0 7.33-2.73 14.39-8.19 21.17-5.46 6.78-12.15 11.08-20.07 12.9-.27-1.05-.4-2.08-.4-3.1z" />
                </svg>
                <div className="flex flex-col text-left justify-center">
                  <span className="text-[10px] font-normal tracking-tight text-white/80 leading-none">
                    Download on the
                  </span>
                  <span className="text-[15px] font-semibold tracking-tight text-white font-sans leading-tight mt-0.5">
                    App Store
                  </span>
                </div>
              </a>

              {/* Badge 2: Official Google Play Badge */}
              <a
                href="https://blacklane.onelink.me/Jxjh/androidAppDownload"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="h-11 px-4 bg-black hover:opacity-85 active:scale-95 text-white rounded-xl inline-flex items-center gap-2.5 transition-all shadow-sm hover:shadow-md cursor-pointer border border-black/10 shrink-0"
              >
                {/* Official Colorful Google Play Vector Icon */}
                <svg
                  className="w-[20px] h-[20px] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3.6 1.8C3.3 2.1 3.2 2.6 3.2 3.2v17.6c0 .6.1 1.1.4 1.4l.1.1 9.9-9.9v-.2L3.6 1.8z"
                    fill="#00D7FE"
                  />
                  <path
                    d="M17.1 15.6l-3.5-3.5v-.2l3.5-3.5.1.1 4.1 2.3c1.2.7 1.2 1.8 0 2.5l-4.2 2.3z"
                    fill="#FFCE00"
                  />
                  <path
                    d="M17.1 15.6L13.6 12.1 3.3 22.2c.4.4 1.1.5 1.8.1l12-6.7z"
                    fill="#FF334B"
                  />
                  <path
                    d="M17.1 8.4L5.1 1.7C4.4 1.3 3.7 1.4 3.3 1.8l10.3 10.3 3.5-3.7z"
                    fill="#00E676"
                  />
                </svg>
                <div className="flex flex-col text-left justify-center">
                  <span className="text-[9px] font-medium tracking-wider text-white/80 uppercase leading-none">
                    GET IT ON
                  </span>
                  <span className="text-[15px] font-semibold tracking-tight text-white font-sans leading-tight mt-0.5">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </FadeIn>

          {/* 2. Right Column: Layered UI Presentation with Delay FadeIn */}
          <FadeIn delay={0.15} className="lg:col-span-7 relative flex items-center justify-center lg:justify-end min-h-[420px] sm:min-h-[480px]">
            
            {/* Background Desktop / Web Interface Mockup */}
            <div className="w-full max-w-[560px] bg-white rounded-3xl border border-white/80 shadow-[0_20px_50px_rgba(15,19,25,0.12)] p-4 sm:p-5 relative transform -translate-x-2 sm:-translate-x-6 hover:shadow-2xl transition-all duration-300">
              
              {/* Window Title Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-black/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="px-3 py-1 rounded-full bg-black/5 text-[11px] font-mono text-black/60 tracking-tight flex items-center gap-1.5">
                  <span>blacklane.com</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Booking Route Header */}
              <div className="bg-[#FBF8F2] rounded-xl p-3 mb-4 flex items-center justify-between text-xs">
                <div className="font-medium text-[#0F1319]">
                  JFK Airport <span className="text-[#0F63BD] mx-1">→</span> The Plaza Hotel, NYC
                </div>
                <div className="text-black/50">Today, 2:30 PM</div>
              </div>

              {/* Vehicle Options */}
              <div className="space-y-2.5">
                {/* Business Class */}
                <div className="p-3 sm:p-3.5 rounded-xl border border-[#0F63BD] bg-[#0F63BD]/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-10 rounded-lg bg-black/5 flex items-center justify-center text-xs font-semibold text-black/40">
                      SEDAN
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-[#0F1319]">Business Class</span>
                        <span className="text-[10px] bg-[#0F63BD] text-white px-1.5 py-0.5 rounded font-medium">Selected</span>
                      </div>
                      <div className="text-xs text-black/60">Mercedes-Benz E-Class, BMW 5 Series</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-base text-[#0F1319]">$164.20</div>
                    <div className="text-[10px] text-black/50">All-inclusive</div>
                  </div>
                </div>

                {/* First Class */}
                <div className="p-3 sm:p-3.5 rounded-xl border border-black/5 bg-white hover:bg-black/[0.02] transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-10 rounded-lg bg-black/5 flex items-center justify-center text-xs font-semibold text-black/40">
                      LUXURY
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-[#0F1319]">First Class</span>
                      <div className="text-xs text-black/60">Mercedes-Benz S-Class, BMW 7 Series</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-base text-[#0F1319]">$228.50</div>
                    <div className="text-[10px] text-black/50">All-inclusive</div>
                  </div>
                </div>

                {/* Business Van / SUV */}
                <div className="p-3 sm:p-3.5 rounded-xl border border-black/5 bg-white hover:bg-black/[0.02] transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-10 rounded-lg bg-black/5 flex items-center justify-center text-xs font-semibold text-black/40">
                      SUV/VAN
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-[#0F1319]">Business Van / SUV</span>
                      <div className="text-xs text-black/60">Mercedes-Benz V-Class, Cadillac Escalade</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-base text-[#0F1319]">$256.00</div>
                    <div className="text-[10px] text-black/50">All-inclusive</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Foreground Mobile Phone Screen Mockup */}
            <div className="absolute right-0 sm:right-4 bottom-[-16px] sm:bottom-[-24px] w-[220px] sm:w-[260px] bg-[#0F1319] rounded-[36px] sm:rounded-[44px] p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border-4 border-[#1E242E] z-20">
              
              {/* Speaker notch */}
              <div className="w-20 sm:w-24 h-4 bg-[#1E242E] rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-black/80 inline-block mr-2" />
                <span className="w-7 h-1 rounded-full bg-black/80 inline-block" />
              </div>

              {/* App Screen Content */}
              <div className="bg-[#141A23] rounded-[28px] sm:rounded-[34px] overflow-hidden p-3 sm:p-3.5 text-white">
                
                {/* Route Map Visual Simulation */}
                <div className="relative h-28 sm:h-36 rounded-2xl bg-[#090C10] p-2 mb-3 overflow-hidden border border-white/5">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  {/* Route trajectory SVG */}
                  <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
                    <path
                      d="M 20 100 Q 80 40 130 70 T 180 20"
                      stroke="#0F63BD"
                      strokeWidth="3"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                    {/* Origin Pin */}
                    <circle cx="20" cy="100" r="4" fill="#AECFF3" />
                    {/* Destination Pin */}
                    <circle cx="180" cy="20" r="5" fill="#0F63BD" stroke="white" strokeWidth="1.5" />
                    {/* Chauffeur Vehicle Location Beacon */}
                    <circle cx="110" cy="58" r="5" fill="#27C93F" />
                    <circle cx="110" cy="58" r="10" fill="#27C93F" fillOpacity="0.3" className="animate-ping" />
                  </svg>

                  <div className="absolute bottom-2 left-2 bg-[#0F1319]/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-mono text-[#AECFF3]">
                    ETA: 4 mins
                  </div>
                </div>

                {/* Chauffeur Live Tracking Card */}
                <div className="bg-white/5 rounded-2xl p-2.5 border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="text-[11px] font-semibold text-white">Marcus V.</div>
                    <div className="flex items-center text-[10px] text-amber-400">
                      <Star className="w-2.5 h-2.5 fill-current mr-0.5" />
                      <span>4.98</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-white/50 mb-2">Mercedes-Benz E-Class • B-KL 8842</div>
                  <div className="flex items-center gap-1.5 text-[9px] text-[#AECFF3] bg-[#0F63BD]/20 px-2 py-1 rounded-full">
                    <Navigation className="w-2.5 h-2.5" />
                    <span>Chauffeur on the way</span>
                  </div>
                </div>

              </div>
            </div>

          </FadeIn>

        </div>
      </div>
    </section>
  );
}
