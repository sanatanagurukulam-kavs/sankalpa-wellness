import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { FacilitatorSection } from "@/components/FacilitatorSection";
import { BooksSection } from "@/components/BooksSection";
import { VideosSection } from "@/components/VideosSection";
import { FAQsSection } from "@/components/FAQsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <BooksSection />
        <ProgramsSection />
        <FacilitatorSection />
        <VideosSection />
        <FAQsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
