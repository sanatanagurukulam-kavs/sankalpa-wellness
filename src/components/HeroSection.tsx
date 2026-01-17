import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--gold-light)/0.15),_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--gold)/0.1),_transparent_60%)]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full opacity-50" />
      <div className="absolute bottom-32 right-16 w-48 h-48 border border-primary/10 rounded-full opacity-40" />
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary/40 rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary/30 rounded-full" />

      <div className="container-width text-center px-4 relative z-10">
        <div className="animate-fade-up">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
            For Conscious Vedantic Parenting
          </p>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 animate-fade-up delay-100">
          Sankalpa Vidya
        </h1>
        
        <div className="gold-divider mb-8 animate-fade-up delay-200" />
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 animate-fade-up delay-300 font-light leading-relaxed">
          In a world of pressure, comparison, screens, and uncertainty, children need more than answers.
        </p>

        <div className="max-w-2xl mx-auto mb-8 animate-fade-up delay-350">
          <p className="text-base md:text-lg text-foreground/80 mb-4">They need adults who can remain:</p>
          <ul className="text-muted-foreground space-y-2 text-left inline-block">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Calm and clear without control
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Present without pressure
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Steady during emotional storms
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
          <Button variant="gold" size="lg" onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}>
            Explore Programs
          </Button>
          <Button variant="gold-outline" size="lg" onClick={scrollToAbout}>
            Begin Your Journey
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
