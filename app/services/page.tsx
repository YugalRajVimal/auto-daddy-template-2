import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceList from "@/components/sections/ServiceList";
import Pricing from "@/components/sections/Pricing";
import StylishRepairs from "@/components/sections/StylishRepairs";
import ServiceBenefit from "@/components/sections/ServiceBenefit";
import Testimonial from "@/components/sections/Testimonial";

export default function ServicesPage() {
  return (
    <div id="top">
      <Header />
      <PageHero title="Our Services" crumb="Our Services" />
      <ServiceList />
      <Pricing />
      <StylishRepairs />
      <ServiceBenefit />
      <Testimonial />
      <Footer />
    </div>
  );
}
