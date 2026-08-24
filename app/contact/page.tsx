import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import MapSection from "@/components/sections/MapSection";
import ContactInfoCards from "@/components/sections/ContactInfoCards";

export default function ContactPage() {
  return (
    <div id="top">
      <Header />
      <PageHero title="Contact Us" crumb="Contact" />
      <ContactForm />
      <MapSection />
      <ContactInfoCards />
      <Footer />
    </div>
  );
}
