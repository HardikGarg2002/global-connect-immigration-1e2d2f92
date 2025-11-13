import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import AboutConsultant from "@/components/AboutConsultant";
import ImmigrationProcess from "@/components/ImmigrationProcess";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutConsultant />
      <ImmigrationProcess />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default Index;
