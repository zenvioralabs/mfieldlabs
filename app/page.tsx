import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CorePhilosophy from "@/components/sections/CorePhilosophy";
import EngagementModels from "@/components/sections/EngagementModels";
import Capabilities from "@/components/sections/Capabilities";
import Differentiators from "@/components/sections/Differentiators";
import FinalPositioning from "@/components/sections/FinalPositioning";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <CorePhilosophy />
        <Capabilities />
        <EngagementModels />
        <Differentiators />
        <FinalPositioning />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
