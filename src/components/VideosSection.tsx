import { Play, ExternalLink, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideosSection() {
  return (
    <section id="videos" className="section-padding bg-ivory">
      <div className="container-width">
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Video Library
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Watch & Reflect
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This video library is a living space for reflection, inquiry, and inner growth. 
            Here you will find both short and long videos rooted in Vedantic wisdom and self-inquiry. 
            Whether you have a few minutes or more time to sit with the teachings, these videos 
            are here to support your journey inward through clarity, contemplation, and conscious living.
          </p>
        </div>

        {/* Video Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Short Videos Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-gold transition-all duration-300 group">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Video className="w-10 h-10 text-primary" />
              </div>
              <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                🎬 Short Videos
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Short Videos
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Brief reflections, simple insights, and contemplative reminders for everyday life—created 
                to bring clarity and awareness into daily moments.
              </p>
              <Button variant="gold-outline" size="lg" className="w-full" asChild>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  Explore Short Videos
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Long Videos Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-gold transition-all duration-300 group">
            <div className="aspect-video bg-gradient-to-br from-charcoal/10 to-charcoal/5 relative overflow-hidden flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-charcoal/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-10 h-10 text-charcoal ml-1" fill="currentColor" />
              </div>
              <div className="absolute top-4 left-4 bg-charcoal/90 text-cream text-xs px-3 py-1 rounded-full font-medium">
                🎥 Long Videos
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Long Videos
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                In-depth talks, teachings, and guided explorations into Vedanta, self-inquiry, 
                and inner transformation for those who wish to go deeper.
              </p>
              <Button variant="gold-outline" size="lg" className="w-full" asChild>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  Explore Long Videos
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Button variant="gold" size="lg" asChild>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              View All Videos
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
