"use client";

import { useEffect } from "react";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import ServiceIcons from "@/components/sections/ServiceIcons";
import CoreFeatures from "@/components/sections/CoreFeatures";
import About from "@/components/sections/About";
import Reliable from "@/components/sections/Reliable";
import Services from "@/components/sections/Services";
import Brands from "@/components/sections/Brands";
import ServiceBenefit from "@/components/sections/ServiceBenefit";
import Stats from "@/components/sections/Stats";
import Pricing from "@/components/sections/Pricing";
import Offer from "@/components/sections/Offer";
import Testimonial from "@/components/sections/Testimonial";
import EstimateRepairCost from "@/components/sections/EstimateRepairCost";

// Custom hook to scroll to top smoothly on any link click
function useSmoothScrollToTopOnLinkClick() {
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      // Only respond to left-clicks on anchor tags that are not modified (cmd/ctrl/shift)
      const target = event.target as HTMLElement;
      const anchor = target.closest("a");
      if (
        anchor &&
        anchor.tagName === "A" &&
        !(anchor as HTMLAnchorElement).target &&
        !event.defaultPrevented &&
        event.button === 0 &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        // Allow default navigation, but also scroll to top smoothly
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
      }
    };

    document.addEventListener("click", handleLinkClick, true);
    return () => {
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, []);
}

export default function Home() {
  useSmoothScrollToTopOnLinkClick();

  return (
    <>
      <Preloader />
      <div id="top">
        <Header />
        <Hero />
        <ServiceIcons />
        <CoreFeatures />
        <About />
        <Reliable />
        <Services />
        <Brands />
        <ServiceBenefit />
        <Stats />
        {/* <Pricing /> */}
        <Offer />
        <Testimonial />
        <EstimateRepairCost />
        <p className="my-8 text-dark text-center text-2xl font-heading font-bold">
          We send automated Service reminders to customers to keep informed
          <br />
          about next due service.
        </p>
        <Footer />
      </div>
    </>
  );
}
