import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const books = [
  {
    id: 1,
    title: "The Path of Sankalpa",
    subtitle: "Awakening Your True Intention",
    description: "Discover the ancient practice of setting sacred intentions and transform your spiritual journey.",
    amazonLink: "#",
    imageColor: "from-primary/20 to-gold-light/30",
  },
  {
    id: 2,
    title: "Mindful Living",
    subtitle: "A Guide to Daily Wellness",
    description: "Practical wisdom for incorporating mindfulness into every aspect of your daily life.",
    amazonLink: "#",
    imageColor: "from-gold-light/30 to-primary/10",
  },
  {
    id: 3,
    title: "Sacred Breath",
    subtitle: "The Art of Pranayama",
    description: "Master the ancient breathing techniques that unlock vitality and inner peace.",
    amazonLink: "#",
    imageColor: "from-primary/15 to-gold-light/25",
  },
];

export function BooksSection() {
  return (
    <section id="books" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Published Works
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Books & Teachings
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the collection of books designed to guide you on your spiritual journey 
            and help you cultivate a life of purpose and inner peace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <article 
              key={book.id} 
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-gold transition-all duration-300"
            >
              {/* Book Cover Placeholder */}
              <div className={`aspect-[3/4] bg-gradient-to-br ${book.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-20 h-1 bg-primary/40 mx-auto mb-4" />
                    <p className="font-display text-lg text-foreground/80 mb-2">{book.title}</p>
                    <p className="text-sm text-muted-foreground">{book.subtitle}</p>
                    <div className="w-20 h-1 bg-primary/40 mx-auto mt-4" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>

              {/* Book Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {book.description}
                </p>
                <Button 
                  variant="gold-outline" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                    View on Amazon
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
