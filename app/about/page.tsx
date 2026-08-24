import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/sections/About";
import VideoBanner from "@/components/sections/VideoBanner";
import Reliable from "@/components/sections/Reliable";
import CtaStrip from "@/components/sections/CtaStrip";
import AboutHighlight from "@/components/sections/AboutHighlight";
import Team from "@/components/sections/Team";
import Testimonial from "@/components/sections/Testimonial";

export default function AboutPage() {
  return (
    <div id="top">
      <Header />
      <PageHero title="About Us" crumb="About Us" />
      <About />
      <VideoBanner />
      <Reliable />
      <CtaStrip />
      <AboutHighlight />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}
