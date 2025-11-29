import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Introduction to Meditation",
    description: "A beginner's guide to establishing a daily meditation practice.",
    youtubeLink: "https://youtube.com",
    duration: "15:24",
  },
  {
    id: 2,
    title: "The Power of Intention",
    description: "Understanding how sankalpa shapes our reality and spiritual growth.",
    youtubeLink: "https://youtube.com",
    duration: "22:10",
  },
  {
    id: 3,
    title: "Morning Wellness Routine",
    description: "Start your day with these simple practices for mind-body balance.",
    youtubeLink: "https://youtube.com",
    duration: "18:45",
  },
  {
    id: 4,
    title: "Breathing for Inner Peace",
    description: "Learn pranayama techniques to calm the mind and energize the body.",
    youtubeLink: "https://youtube.com",
    duration: "12:30",
  },
];

export function VideosSection() {
  return (
    <section id="videos" className="section-padding bg-ivory">
      <div className="container-width">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Video Teachings
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Watch & Learn
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore guided meditations, spiritual teachings, and wellness practices 
            through our video collection on YouTube.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-gold transition-all duration-300"
            >
              {/* Video Thumbnail Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-charcoal/90 to-charcoal relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-charcoal/80 text-cream text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>

              {/* Video Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="gold" size="lg" asChild>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              Visit YouTube Channel
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
