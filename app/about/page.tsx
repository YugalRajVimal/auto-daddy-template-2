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
      <section className="px-5 lg:px-16 py-16 lg:py-24 bg-orange text-center">
        <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
          <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">C</span>
          ar Troubles? We've Got You Covered
        </span>
        <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
          Restoring Your Vehicle, Solving Every Trouble
        </h2>
        <p className="mt-6 text-gray-100 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          At Auto 27, we understand how frustrating car troubles can be. Our dedicated team is here to provide top-notch solutions that get you back on the road with confidence. From diagnostics to repairs, we focus on restoring your vehicle after any issue—big or small—while ensuring peace of mind along the way.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-dark font-heading text-lg uppercase">
            <span className="bg-white text-orange px-4 py-2 rounded skew-btn tracking-wide">Call Us:</span>
            <a href="tel:2497771313" className="hover:underline underline-offset-4 transition-colors text-white font-bold">
              249 777 1313
            </a>
          </div>
        </div>
      </section>
      <p className="my-8 text-dark text-center text-2xl font-heading font-bold">
      We send automated Service reminders to customers to keep informed<br />
      about next due service.
    </p>
 
      <Footer />
    </div>
  );
}
