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

export default function Home() {
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
        <Pricing />
        <Offer />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}
