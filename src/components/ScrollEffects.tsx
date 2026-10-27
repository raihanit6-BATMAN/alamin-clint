"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollEffects() {
  useEffect(() => {
    let refreshTimer: NodeJS.Timeout;

    const ctx = gsap.context(() => {
      // 1. Hero Content & Booking Card Scroll Upwards over Fixed Background
      if (document.querySelector(".hero-section")) {
        gsap.to(".hero-content, .hero-booking-wrapper", {
          y: -60,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "30% top",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        // Toggle fixed background visibility once past hero to ensure clean stacking
        ScrollTrigger.create({
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          onLeave: () => gsap.set(".hero-fixed-bg", { autoAlpha: 0 }),
          onEnterBack: () => gsap.set(".hero-fixed-bg", { autoAlpha: 1 }),
        });
      }

      // Helper functions for Header seamless blend
      const setHeaderWhite = () => {
        const header = document.querySelector("header");
        if (header) {
          header.classList.add("header-light");
          header.classList.remove("header-dark");
        }
        gsap.to("header", {
          backgroundColor: "#ffffff",
          borderColor: "rgba(15, 19, 25, 0.08)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
          backdropFilter: "none",
          duration: 0.15,
          overwrite: "auto",
        });
        gsap.to(
          "header a, header nav button, header nav a, header button:not(.blacklane-btn-primary), header span:not(.blacklane-btn-primary *), header svg:not(.blacklane-btn-primary *)",
          {
            color: "#0f1319",
            duration: 0.15,
            overwrite: "auto",
          }
        );
        gsap.to("header .header-signin-btn", {
          backgroundColor: "rgba(15, 19, 25, 0.06)",
          borderColor: "rgba(15, 19, 25, 0.14)",
          duration: 0.15,
          overwrite: "auto",
        });
        gsap.set("header .blacklane-btn-primary, header .blacklane-btn-primary *", {
          color: "#ffffff",
        });
      };

      const setHeaderGlass = () => {
        const header = document.querySelector("header");
        if (header) {
          header.classList.add("header-dark");
          header.classList.remove("header-light");
        }
        gsap.to("header", {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          backdropFilter: "blur(12px)",
          duration: 0.15,
          overwrite: "auto",
        });
        gsap.to(
          "header a, header nav button, header nav a, header button:not(.blacklane-btn-primary), header span:not(.blacklane-btn-primary *), header svg:not(.blacklane-btn-primary *)",
          {
            color: "#ffffff",
            duration: 0.15,
            overwrite: "auto",
          }
        );
        gsap.to("header .header-signin-btn", {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.15)",
          duration: 0.15,
          overwrite: "auto",
        });
      };

      // 2. The 2nd Section ("Arrive at your best.") Percentage-Based Scroll Sequence:
      // Stage 1 (0% to 55%): Background strictly #b6d5f4. Only text block is shown with smooth luxury reveal (scale: 0.96 -> 1, opacity: 0 -> 1, y: 40 -> 0). Cards remain COMPLETELY HIDDEN.
      // Stage 2 (70% to 95%): Smoothly slide & fade service picture cards into view from bottom (opacity: 0 -> 1, y: 80 -> 0). Background STILL #b6d5f4.
      // Stage 3 (Exactly 100% full view / top top): Instant snap switch from #b6d5f4 to pure #ffffff. Sticky navbar turns pure white with black text.
      // Stage 4 (After 100% scroll past top top): Over next ~150px, headline and subtitle swiftly animate upward and completely vanish (y: -100px, opacity: 0).
      // Stage 5 (Reverse on scroll up): Reverses cleanly without jumping or glitching.
      if (document.querySelector("#services")) {
        // 1. Automatic Pop-Up Motion for Headline & Subtitle (Time-based / Not bound to mouse pointer)
        const headingElements = gsap.utils.toArray<HTMLElement>([
          ".services-title",
          ".services-subtitle",
        ]);

        if (headingElements.length > 0) {
          gsap.fromTo(
            headingElements,
            {
              opacity: 0,
              scale: 0.88,
              y: 40,
              filter: "blur(8px)",
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.75,
              ease: "back.out(1.6)",
              stagger: 0.15,
              scrollTrigger: {
                trigger: ".services-heading-block",
                start: "top 55%", // When text reaches 50%-55% threshold of viewport
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Master Entrance Timeline for Cards Reveal (0% to 100% of section entering viewport)
        const servicesEntranceTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#services",
            start: "top bottom",
            end: "top top",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });

        // Stage 1 (0% to 55%): Service cards start completely hidden
        gsap.set(".services-cards-wrapper", {
          opacity: 0,
          y: 80,
          pointerEvents: "none",
        });

        // Stage 2: 70% to 95% Scroll Progress (Pictures Reveal)
        if (document.querySelector(".services-cards-wrapper")) {
          servicesEntranceTl.fromTo(
            ".services-cards-wrapper",
            {
              opacity: 0,
              y: 80,
              pointerEvents: "none",
            },
            {
              opacity: 1,
              y: 0,
              pointerEvents: "auto",
              ease: "power2.out",
              duration: 0.25,
            },
            0.7 // Progress 0.70 -> 0.95
          );
        }

        // Stage 3: Exactly at 100% Full View (Instant Switch to Pure White)
        ScrollTrigger.create({
          trigger: "#services",
          start: "top top", // Exactly 100% viewport coverage
          end: "bottom 80px",
          onEnter: () => {
            gsap.set("#services", { backgroundColor: "#ffffff" });
            setHeaderWhite();
          },
          onLeaveBack: () => {
            gsap.set("#services", { backgroundColor: "#b6d5f4" });
            setHeaderGlass();
          },
          onLeave: () => {
            setHeaderGlass();
          },
          onEnterBack: () => {
            gsap.set("#services", { backgroundColor: "#ffffff" });
            setHeaderWhite();
          },
        });

        // Stage 4: After 100% Scroll (Slight Scroll Down -> Fast Upward Exit of Text)
        if (document.querySelector(".services-heading-wrapper")) {
          gsap.fromTo(
            ".services-heading-wrapper",
            { y: 0, opacity: 1 },
            {
              y: -100,
              opacity: 0,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: "#services",
                start: "top top",
                end: "+=150",
                scrub: true,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      }

      // 6. Sanctuary Text Entrance & Sequential Freeze-and-Peel Timeline
      const sanctuarySection = document.querySelector(".sanctuary-section");
      const slide1 = document.querySelector(".sanctuary-slide-1");
      const slide2 = document.querySelector(".sanctuary-slide-2");
      const slide3 = document.querySelector(".sanctuary-slide-3");

      if (sanctuarySection) {
        // 1. Autonomous Text Entrance Motion at ~70% Viewport
        const sanctuaryHeadingElements = gsap.utils.toArray<HTMLElement>([
          ".sanctuary-title",
          ".sanctuary-subtitle",
        ]);

        if (sanctuaryHeadingElements.length > 0) {
          gsap.fromTo(
            sanctuaryHeadingElements,
            {
              opacity: 0,
              y: 35,
              scale: 0.95,
              filter: "blur(6px)",
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: sanctuarySection,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // 2. Sequential Freeze-and-Peel Timeline with Scroll-Tied Text Exit
        if (slide1 && slide2 && slide3) {
          gsap.set(slide1, { yPercent: 0 });
          gsap.set(slide2, { yPercent: 0 });
          gsap.set(slide3, { yPercent: 0 });

          const isMobileViewport =
            typeof window !== "undefined" && window.innerWidth < 1024;

          const sanctuaryTl = gsap.timeline({
            scrollTrigger: {
              trigger: sanctuarySection,
              start: "top top",
              end: isMobileViewport ? "+=120%" : "+=300%",
              pin: true,
              pinSpacing: true,
              scrub: isMobileViewport ? 0.6 : 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Step 1: Text Block gracefully slides upward and fades out BEFORE Slide 1 starts peeling
          if (document.querySelector(".sanctuary-heading-block")) {
            sanctuaryTl.to(".sanctuary-heading-block", {
              y: -50,
              opacity: 0,
              ease: "power1.inOut",
              duration: isMobileViewport ? 0.35 : 0.5,
            });
          }

          // Step 2: Slide 1 peels upward (yPercent: -100) unveiling stationary Slide 2
          sanctuaryTl.to(slide1, {
            yPercent: -100,
            ease: isMobileViewport ? "power1.inOut" : "none",
            duration: 1,
          });

          // Step 3: Slide 2 peels upward (yPercent: -100) unveiling stationary Slide 3
          sanctuaryTl.to(slide2, {
            yPercent: -100,
            ease: isMobileViewport ? "power1.inOut" : "none",
            duration: 1,
          });
        }
      }

      // 7. Dynamic Navbar Color Sync for Final Light/White Sections:
      // ("Expect excellence" / Standards, "Our vehicle classes" / Fleet, and Footer)
      const standardsEl =
        document.querySelector("#standards") ||
        document.querySelector(".standards-section");
      const footerEl =
        document.querySelector("footer") ||
        document.querySelector("#footer") ||
        document.querySelector(".footer-section");

      if (standardsEl && footerEl) {
        ScrollTrigger.create({
          trigger: standardsEl,
          endTrigger: footerEl,
          start: "top 76px",
          end: "bottom top",
          onEnter: () => setHeaderWhite(),
          onLeaveBack: () => setHeaderGlass(),
          onEnterBack: () => setHeaderWhite(),
        });
      }

      // Individual section listeners for direct anchor scroll or modal jumps (#fleet, footer)
      const finalLightSections = ["#standards", "#fleet", "footer"];
      finalLightSections.forEach((selector) => {
        const targetEl = document.querySelector(selector);
        if (targetEl) {
          ScrollTrigger.create({
            trigger: targetEl,
            start: "top 76px",
            end: "bottom 76px",
            onEnter: () => setHeaderWhite(),
            onEnterBack: () => setHeaderWhite(),
            onLeaveBack: () => {
              if (selector === "#standards") {
                setHeaderGlass();
              }
            },
          });
        }
      });
    });

    // Ensure ScrollTrigger accurately calculates positions after DOM render
    refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleWindowLoad);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("load", handleWindowLoad);
      ctx.revert();
    };
  }, []);

  return null;
}

export { ScrollEffects };
