"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight, User } from "lucide-react";
import { SignInModal } from "@/components/ui/Modals";

interface DropdownItem {
  name: string;
  href: string;
  badge?: string;
}

const SERVICES_ITEMS: DropdownItem[] = [
  { name: "City-to-City rides", href: "/city-to-city/", badge: "Fixed rates" },
  { name: "Chauffeur hailing", href: "/chauffeur-hailing/", badge: "On demand" },
  { name: "Airport transfers", href: "/airport-transfer/", badge: "Flight tracked" },
  { name: "Hourly hire", href: "/hourly-car-service/", badge: "2-24 hours" },
  { name: "Chauffeur service", href: "/chauffeur-service/" },
  { name: "Limousine service", href: "/limousine-service/" },
];

const BUSINESS_ITEMS: DropdownItem[] = [
  { name: "Overview", href: "/business/" },
  { name: "Corporations", href: "/corporations/" },
  { name: "Travel agencies", href: "/travel-agencies/" },
  { name: "Strategic partnerships", href: "/strategic-partnerships/" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);
  const businessTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
    setServicesOpen(true);
    setBusinessOpen(false);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleBusinessEnter = () => {
    if (businessTimeout.current) clearTimeout(businessTimeout.current);
    setBusinessOpen(true);
    setServicesOpen(false);
  };

  const handleBusinessLeave = () => {
    businessTimeout.current = setTimeout(() => {
      setBusinessOpen(false);
    }, 150);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60] h-[68px] sm:h-[76px] lg:h-[80px] w-full px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-white/15 shadow-sm transition-all duration-300">
        {/* Far Left: Clean Brand Logo Icon + Text aligned horizontally */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-[11px] shrink-0 group select-none bg-transparent"
          aria-label="Blacklane Homepage"
        >
          {/* White Geometric Ribbon 'B' Logo Icon (matching typography height) */}
          <svg
            viewBox="0 0 246 148"
            className="h-[22px] sm:h-[26px] lg:h-[28px] w-auto fill-current text-white group-hover:opacity-90 transition-opacity shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <path d="M0 0 L173 0 L221 48 L197 72 L246 122 L222 148 L208 148 L231 124 L124 124 L74 74 L183 74 L207 49 L48 48 Z" />
          </svg>

          {/* Typography */}
          <span className="text-xl sm:text-2xl lg:text-[28px] font-serif font-normal tracking-tight text-white group-hover:opacity-90 transition-opacity leading-none">
            Blacklane
          </span>
        </Link>

        {/* Far Right: Navigation menu & action buttons */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-8 ml-auto">
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* 'Our services' Hover Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-normal rounded-full transition-all duration-200 cursor-pointer ${
                  servicesOpen
                    ? "text-white bg-white/15"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>Our services</span>
                <ChevronDown
                  className={`w-4 h-4 text-white/70 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Services Dropdown Menu */}
              {servicesOpen && (
                <div
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                  className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="bg-[#141A23]/98 backdrop-blur-2xl border border-white/15 rounded-2xl p-2 shadow-2xl shadow-black/60">
                    <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                      Chauffeur Services
                    </div>
                    {SERVICES_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-normal text-white/90 hover:text-white hover:bg-white/10 transition-colors group"
                      >
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-[#AECFF3] group-hover:bg-[#0F63BD] group-hover:text-white transition-colors">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 'For business' Hover Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleBusinessEnter}
              onMouseLeave={handleBusinessLeave}
            >
              <button
                type="button"
                aria-expanded={businessOpen}
                onClick={() => setBusinessOpen(!businessOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-normal rounded-full transition-all duration-200 cursor-pointer ${
                  businessOpen
                    ? "text-white bg-white/15"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>For business</span>
                <ChevronDown
                  className={`w-4 h-4 text-white/70 transition-transform duration-200 ${
                    businessOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Business Dropdown Menu */}
              {businessOpen && (
                <div
                  onMouseEnter={handleBusinessEnter}
                  onMouseLeave={handleBusinessLeave}
                  className="absolute top-full left-0 pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="bg-[#141A23]/98 backdrop-blur-2xl border border-white/15 rounded-2xl p-2 shadow-2xl shadow-black/60">
                    <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                      Corporate Solutions
                    </div>
                    {BUSINESS_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2.5 rounded-xl text-sm font-normal text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* For chauffeurs Link */}
            <Link
              href="/partners/"
              className="px-3.5 py-2 text-[15px] font-normal text-white/85 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              For chauffeurs
            </Link>

            {/* Help Link */}
            <Link
              href="/help/"
              className="px-3.5 py-2 text-[15px] font-normal text-white/85 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              Help
            </Link>
          </nav>

          {/* Right Action Controls: 'Sign in', 'Book now' */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sign in Button: Hidden on mobile phones, shown on md+ and inside mobile drawer */}
            <button
              type="button"
              onClick={() => setSignInOpen(true)}
              className="header-signin-btn hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 shadow-sm transition-all cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-white/80" />
              <span>Sign in</span>
            </button>

            {/* Prominent 'Book now' CTA Button: Scaled gracefully on mobile phones */}
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                const pickupInput = document.getElementById("pickup-location-input");
                pickupInput?.focus();
              }}
              className="blacklane-btn-primary px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-md shadow-[#0F63BD]/30 hover:shadow-[#0F63BD]/50 hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <span>Book now</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Luxury Glass Drawer / Overlay */}
        {mobileOpen && (
          <div
            data-lenis-prevent
            className="lg:hidden fixed inset-x-0 top-[68px] sm:top-[76px] bottom-0 bg-[#0F1319]/98 backdrop-blur-2xl p-5 sm:p-7 overflow-y-auto border-t border-white/10 flex flex-col justify-between z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="space-y-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#AECFF3] mb-3">
                  Our Services
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {SERVICES_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <span className="font-medium text-sm">{item.name}</span>
                      {item.badge && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-[#AECFF3]">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#AECFF3] mb-3">
                  Business Solutions
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {BUSINESS_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block p-3 rounded-xl bg-white/5 text-white/90 hover:bg-white/10 hover:text-white text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1">
                <Link
                  href="/partners/"
                  onClick={() => setMobileOpen(false)}
                  className="block p-3 rounded-xl text-white/85 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors"
                >
                  For chauffeurs
                </Link>
                <Link
                  href="/help/"
                  onClick={() => setMobileOpen(false)}
                  className="block p-3 rounded-xl text-white/85 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors"
                >
                  Help & Support
                </Link>
              </div>
            </div>

            <div className="pt-6 pb-2 border-t border-white/10 mt-6">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setSignInOpen(true);
                }}
                className="w-full py-3.5 rounded-full bg-[#3E1DD1] hover:bg-[#4d2ce0] text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#3E1DD1]/25 active:scale-95 cursor-pointer"
              >
                <User className="w-4 h-4 text-white/80" />
                <span>Sign in</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Sign-in Modal */}
      <SignInModal isOpen={signInOpen} onClose={() => setSignInOpen(false)} />
    </>
  );
}

export { Navbar as Header };
export default Navbar;
