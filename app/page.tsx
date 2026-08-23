import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import EngagementModels from "@/components/sections/EngagementModels";
import Capabilities from "@/components/sections/Capabilities";
import Differentiators from "@/components/sections/Differentiators";
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
        <Capabilities />
        <EngagementModels />
        <Differentiators />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
