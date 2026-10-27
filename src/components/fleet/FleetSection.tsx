"use client";

import React, { useState } from "react";
import { Users, Briefcase, Zap, Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface FleetCategory {
  id: string;
  name: string;
  tagline: string;
  exampleModels: string;
  guests: number;
  luggage: number;
  isElectric?: boolean;
  features: string[];
  image: string;
}

const FLEET_CATEGORIES: FleetCategory[] = [
  {
    id: "business",
    name: "Business Class",
    tagline: "The premier standard for executive travel",
    exampleModels: "Mercedes-Benz E-Class, BMW 5 Series, Audi A6 or similar",
    guests: 3,
    luggage: 2,
    features: [
      "Complimentary 15 minutes wait time",
      "Chilled bottled water and multi-device phone chargers",
      "Handpicked, top-rated local chauffeurs",
    ],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "electric",
    name: "Electric Class",
    tagline: "100% emission-free luxury",
    exampleModels: "Mercedes-Benz EQS, BMW i7, Porsche Taycan, Lucid Air",
    guests: 3,
    luggage: 2,
    isElectric: true,
    features: [
      "Zero direct tailpipe emissions",
      "Whisper-quiet acoustic sanctuary",
      "Cutting-edge electric luxury performance",
    ],
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "first",
    name: "First Class",
    tagline: "Exceptional prestige and legroom",
    exampleModels: "Mercedes-Benz S-Class, BMW 7 Series, Audi A8 L",
    guests: 3,
    luggage: 2,
    features: [
      "Extended wheelbase with maximum rear cabin comfort",
      "Reclining executive seating with massage features",
      "Senior VIP-accredited chauffeurs",
    ],
    image: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "van",
    name: "Business Van / SUV",
    tagline: "Spacious luxury for travel parties and delegations",
    exampleModels: "Mercedes-Benz V-Class, Cadillac Escalade, Lincoln Navigator",
    guests: 5,
    luggage: 6,
    features: [
      "Substantial luggage capacity for groups and families",
      "Face-to-face conference seating arrangements",
      "Ideal for airport departures and roadshows",
    ],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
  },
];

export function FleetSection() {
  const [selectedId, setSelectedId] = useState(FLEET_CATEGORIES[0].id);
  const activeVehicle = FLEET_CATEGORIES.find((v) => v.id === selectedId) || FLEET_CATEGORIES[0];

  return (
    <section id="fleet" className="fleet-section py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white text-[#0F1319]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <FadeIn className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal tracking-tight text-[#0F1319] mb-3">
            Our vehicle classes.
          </h2>
          <p className="text-lg text-[#6E6E73] font-normal leading-relaxed">
            Only recent, high-end models equipped for ultimate comfort and discretion.
          </p>
        </FadeIn>

        {/* Vehicle Tabs with Micro-interactions */}
        <div className="flex gap-2.5 mb-8 md:mb-10 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {FLEET_CATEGORIES.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setSelectedId(v.id)}
              className={`snap-start shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                selectedId === v.id
                  ? "bg-[#0F1319] text-white shadow-md"
                  : "bg-[#FBF8F2] text-[#6E6E73] hover:text-[#0F1319] hover:bg-[#F3EFE6]"
              }`}
            >
              {v.isElectric && <Zap className="w-4 h-4 text-[#0F63BD]" />}
              <span>{v.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Vehicle Showcase Card with Animation */}
        <FadeIn key={activeVehicle.id} duration={0.4} y={12}>
          <div className="bg-[#FBF8F2] rounded-3xl p-5 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#0F63BD] block mb-2">
                  {activeVehicle.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-[#0F1319] mb-2">{activeVehicle.name}</h3>
                <p className="text-xs sm:text-sm text-[#6E6E73] mb-6 font-mono">{activeVehicle.exampleModels}</p>

                {/* Capacities */}
                <div className="flex items-center gap-6 py-4 border-y border-black/10 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#0F1319]">
                    <Users className="w-4 h-4 text-[#0F63BD]" />
                    <span>Up to {activeVehicle.guests} passengers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0F1319]">
                    <Briefcase className="w-4 h-4 text-[#0F63BD]" />
                    <span>Up to {activeVehicle.luggage} bags</span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {activeVehicle.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-[#0F1319]/80 font-light">
                      <Check className="w-4 h-4 text-[#0F63BD] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    const pickupInput = document.getElementById("pickup-location-input");
                    pickupInput?.focus();
                  }}
                  className="blacklane-btn-primary w-full sm:w-auto min-h-[48px] flex items-center justify-center px-6 py-3 text-sm font-medium hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#0F63BD]/20 cursor-pointer"
                >
                  Book {activeVehicle.name}
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 rounded-2xl overflow-hidden aspect-[16/10] bg-white shadow-sm group">
              <img
                src={activeVehicle.image}
                alt={activeVehicle.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
