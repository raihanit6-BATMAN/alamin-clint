"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";

interface NavigationColumn {
  heading: string;
  links: {
    label: string;
    href: string;
  }[];
}

const NAVIGATION_COLUMNS: NavigationColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "How Blacklane works", href: "/about/" },
      { label: "Career", href: "/career/" },
      { label: "Press", href: "/press/" },
      { label: "Blog", href: "/blog/" },
      { label: "Green initiatives", href: "/sustainability/" },
      { label: "Become a chauffeur partner", href: "/partners/" },
    ],
  },
  {
    heading: "Blacklane for Business",
    links: [
      { label: "Overview", href: "/business/" },
      { label: "Corporations", href: "/corporations/" },
      { label: "Travel agencies", href: "/travel-agencies/" },
      { label: "Strategic partnerships", href: "/strategic-partnerships/" },
    ],
  },
  {
    heading: "Top cities",
    links: [
      { label: "New York", href: "/countries/us/new-york/airport-transfer/" },
      { label: "London", href: "/countries/uk/london/airport-transfer/" },
      { label: "Berlin", href: "/countries/germany/berlin/airport-transfer/" },
      { label: "Los Angeles", href: "/countries/us/los-angeles/airport-transfer/" },
      { label: "Paris", href: "/countries/france/paris/airport-transfer/" },
      { label: "All cities", href: "/cities/" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "City-to-city rides", href: "/city-to-city/" },
      { label: "Limousine service", href: "/limousine-service/" },
      { label: "Chauffeur service", href: "/chauffeur-service/" },
      { label: "Private car service", href: "/car-service/" },
      { label: "Ground transportation", href: "/ground-transportation/" },
      { label: "Airport transfer", href: "/airport-transfer/" },
      { label: "All countries", href: "/countries/" },
    ],
  },
  {
    heading: "City-to-City rides",
    links: [
      { label: "New York - East Hampton", href: "/city-to-city/new-york-east-hampton/" },
      { label: "Los Angeles - San Diego", href: "/city-to-city/los-angeles-san-diego/" },
      { label: "Miami - Palm Beach", href: "/city-to-city/miami-palm-beach/" },
      { label: "London - Bristol", href: "/city-to-city/london-bristol/" },
      { label: "Dubai - Abu Dhabi", href: "/city-to-city/abu-dhabi-dubai/" },
      { label: "Paris - Reims", href: "/city-to-city/paris-reims/" },
    ],
  },
];

export function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [selectedCurrency, setSelectedCurrency] = useState("USD ($)");
  const [showLangModal, setShowLangModal] = useState(false);

  return (
    <footer id="footer" className="footer-section bg-[#FBF8F2] text-[#0F1319] border-t border-[#EEF1F3] pt-12 md:pt-16 pb-8 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row: Logo & App Store Download Badges */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-10 border-b border-[#EEF1F3] gap-6">
          <Link
            href="/"
            aria-label="Blacklane Homepage"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F1319] rounded-lg"
          >
            {/* Logo Mark matching Header */}
            <svg
              viewBox="0 0 250 150"
              className="h-[22px] sm:h-[26px] lg:h-[28px] w-auto fill-current text-[#0F1319] group-hover:opacity-85 transition-opacity shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <path d="M0 0 L173 0 L221 48 L197 72 L246 122 L222 148 L208 148 L231 124 L124 124 L74 74 L183 74 L207 49 L48 48 Z" />
            </svg>

            {/* Typography matching Header */}
            <span className="text-xl sm:text-2xl lg:text-[28px] font-serif font-normal tracking-tight text-[#0F1319] group-hover:opacity-85 transition-opacity leading-none">
              Blacklane
            </span>
          </Link>

          {/* App Store Download Badges */}
          <div className="flex items-center gap-3">
            <a
              href="https://blacklane.onelink.me/FzXX/iOSAppDownload"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the Apple App Store"
              className="inline-block transition-opacity hover:opacity-85"
            >
              <img
                src="https://static.blacklane.com/assets/_next/static/media/app-store-logo-dark.5dc6643c29136385.svg"
                alt="Download on the App Store"
                width={120}
                height={35}
                className="h-[35px] w-auto"
              />
            </a>
            <a
              href="https://blacklane.onelink.me/Jxjh/androidAppDownload"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className="inline-block transition-opacity hover:opacity-85"
            >
              <img
                src="https://static.blacklane.com/assets/_next/static/media/playstore-logo-dark.083f89dd5c62e18d.svg"
                alt="Get it on Google Play"
                width={120}
                height={35}
                className="h-[35px] w-auto"
              />
            </a>
          </div>
        </div>

        {/* Multi-Column Navigation Directory (5 Columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-12 md:py-16">
          {NAVIGATION_COLUMNS.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col">
              <h3 className="text-[16px] font-semibold text-[#0F1319] mb-4 tracking-tight">
                {column.heading}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#6E6E73] hover:text-[#0F63BD] transition-colors leading-relaxed inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Region / Currency Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between py-6 border-t border-[#EEF1F3] gap-4">
          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <button
              type="button"
              onClick={() => setShowLangModal(!showLangModal)}
              className="inline-flex items-center gap-2 text-sm text-[#0F1319] hover:text-[#0F63BD] transition-colors font-medium cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#0F1319]" />
              <span>{selectedLanguage}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#6E6E73]" />
            </button>

            {/* Currency Selector */}
            <div className="inline-flex items-center gap-1.5 text-sm text-[#0F1319] font-medium">
              <span className="text-[#6E6E73]">Currency:</span>
              <span className="text-[#0F1319]">{selectedCurrency}</span>
            </div>
          </div>

          {/* Social Media SVG Icons */}
          <div className="flex items-center gap-4 text-[#0F1319]">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/blacklane-gmbh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 text-[#0F1319] hover:text-[#0F63BD] transition-colors"
            >
              <svg
                width="20"
                height="20"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="currentColor"
              >
                <path
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M7 17V13.5V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M7 7.01L7.01 6.99889" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/blacklane/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1.5 text-[#0F1319] hover:text-[#0F63BD] transition-colors"
            >
              <svg
                width="20"
                height="20"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="currentColor"
              >
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                  stroke="currentColor"
                />
                <path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Blacklane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-1.5 text-[#0F1319] hover:text-[#0F63BD] transition-colors"
            >
              <svg
                width="20"
                height="20"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="currentColor"
              >
                <path
                  d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com/blacklane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="p-1.5 text-[#0F1319] hover:text-[#0F63BD] transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/user/blacklanelimo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-1.5 text-[#0F1319] hover:text-[#0F63BD] transition-colors"
            >
              <svg
                width="20"
                height="20"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="currentColor"
              >
                <path
                  d="M14 12L10.5 14V10L14 12Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z"
                  stroke="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 border-t border-[#EEF1F3] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-[#6E6E73]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <p className="font-semibold text-[#0F1319]">© 2026 Blacklane GmbH</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href="/terms/" className="hover:text-[#0F63BD] transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy/" className="hover:text-[#0F63BD] transition-colors">
                Privacy policy
              </Link>
              <Link href="/imprint/" className="hover:text-[#0F63BD] transition-colors">
                Legal notice
              </Link>
              <Link href="/accessibility/" className="hover:text-[#0F63BD] transition-colors">
                Accessibility
              </Link>
              <button
                type="button"
                className="hover:text-[#0F63BD] transition-colors cursor-pointer"
                onClick={() => alert("Cookie preferences dialog")}
              >
                Cookie Preferences
              </button>
            </div>
          </div>
          <p className="text-xs text-[#6E6E73]/70">The Global Chauffeur Service</p>
        </div>
      </div>
    </footer>
  );
}
