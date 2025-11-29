import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BooksSection } from "@/components/BooksSection";
import { VideosSection } from "@/components/VideosSection";
import { BlogSection } from "@/components/BlogSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DonationsSection } from "@/components/DonationsSection";
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
        <VideosSection />
        <BlogSection />
        <TestimonialsSection />
        <DonationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
