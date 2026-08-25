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
      <section className="bg-orange/95 px-5 lg:px-16 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto grid gap-12 sm:gap-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start bg-white/90 rounded-2xl shadow-lg p-8">
            <div>
              <h2 className="font-heading uppercase text-2xl sm:text-3xl font-bold text-orange mb-4 flex items-center gap-2">
                <span className="bg-orange text-white rounded-full px-3 py-1 text-base mr-2">01</span>
                Engine and Transmission
              </h2>
              <ul className="list-none space-y-3 text-dark/90 text-lg font-medium">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-orange rounded-full"></span>
                  Engine oil change
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-orange rounded-full"></span>
                  All Filters Change
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-orange rounded-full"></span>
                  Fluid Top-up
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-orange rounded-full"></span>
                  Belts and Houses
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-orange rounded-full"></span>
                  Diagnostic Checks
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-orange rounded-full"></span>
                  Injectors Check
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading uppercase text-xl font-bold text-orange mb-2 flex items-center gap-2">
                <span className="bg-orange text-white rounded-full px-2 py-1 text-base mr-2">02</span>
                Diagnose
              </h3>
              <p className="text-dark/80 text-base font-medium leading-relaxed rounded-lg bg-orange/10 p-4">
                We use <span className="font-semibold text-orange">Scan tools</span> to read Diagnostic Trouble Codes from your car's system, which monitors sensors and computers.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start bg-white/90 rounded-2xl shadow-lg p-8">
            <div>
              <h2 className="font-heading uppercase text-2xl sm:text-3xl font-bold text-orange mb-4 flex items-center gap-2">
                <span className="bg-orange text-white rounded-full px-3 py-1 text-base mr-2">03</span>
                Batteries
              </h2>
              <p className="text-dark/80 text-base font-medium">
                The interplay source of electrical energy to power start of Engine that co-function with:
              </p>
              <ul className="list-none space-y-2 text-dark/90 text-lg font-medium mt-3">
                {["Alternator", "Starter", "Connectors", "Relays", "ECUs"].map((item) => (
                  <li className="flex items-center gap-2" key={item}>
                    <span className="inline-block w-2 h-2 bg-orange rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading uppercase text-2xl sm:text-3xl font-bold text-orange mb-4 flex items-center gap-2">
                <span className="bg-orange text-white rounded-full px-3 py-1 text-base mr-2">04</span>
                TYRES-RIMs
              </h2>
              <p className="text-dark/80 text-base font-medium">
                Tyres and balancing maintenance ensure a smooth ride and car safety performance, through detailed care for the entire circumference.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start bg-white/90 rounded-2xl shadow-lg p-8">
            <div>
              <h2 className="font-heading uppercase text-2xl sm:text-3xl font-bold text-orange mb-4 flex items-center gap-2">
                <span className="bg-orange text-white rounded-full px-3 py-1 text-base mr-2">05</span>
                Air Conditioning
              </h2>
              <p className="text-dark/80 text-base font-medium">
                Car AC maintenance involves regular use in all seasons and professional checks to ensure efficiency and prevent costly breakdowns in Canada.
              </p>
            </div>
            <div>
              <h2 className="font-heading uppercase text-2xl sm:text-3xl font-bold text-orange mb-4 flex items-center gap-2">
                <span className="bg-orange text-white rounded-full px-3 py-1 text-base mr-2">06</span>
                Body Works
              </h2>
              <p className="text-dark/80 text-base font-medium">
                Apart of maintenance of engine, we also render services of body work that includes:
              </p>
              <ul className="list-none space-y-2 text-dark/90 text-lg font-medium mt-2">
                {["Replacement", "Denting", "Painting", "Welding etc."].map((item) => (
                  <li className="flex items-center gap-2" key={item}>
                    <span className="inline-block w-2 h-2 bg-orange rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
 
      {/* <Pricing /> */}
      <StylishRepairs />
      <ServiceBenefit />
      <Testimonial />
      <p className="my-8 text-dark text-center text-2xl font-heading font-bold">
      We send automated Service reminders to customers to keep informed<br />
      about next due service.
    </p>
      <Footer />
  
    </div>
  );
}
