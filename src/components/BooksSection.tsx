import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import scubaDiveBook1 from "@/assets/scuba-dive-book-1.png";
import scubaDiveBook2 from "@/assets/scuba-dive-book-2.jpg";

const books = [
  {
    id: 1,
    title: "SCUBA Dive – Beyond the Mind",
    subtitle: "Book I",
    description: "A practical guide to understanding your inner world and navigating life with clarity and confidence.",
    shopLink: "https://store.whitefalconpublishing.com/collections/latest-books/products/scuba-dive-beyond-the-mind-book-i-vedanta-for-children-a-knowledge-series-with-stories",
    image: scubaDiveBook1,
  },
  {
    id: 2,
    title: "SCUBA Dive – Where Roots Meet the Sky",
    subtitle: "Book II",
    description: "A journey into \"Where I am\"—understanding your inner operating space and connecting with your deeper purpose.",
    shopLink: "https://store.whitefalconpublishing.com/collections/latest-books",
    image: scubaDiveBook2,
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
            Books by Arthi Krishna
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the collection of books designed to guide you on your spiritual journey 
            and help you navigate life with clarity and inner peace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {books.map((book) => (
            <article 
              key={book.id} 
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-gold transition-all duration-300"
            >
              {/* Book Cover */}
              <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                <img 
                  src={book.image} 
                  alt={`${book.title} book cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Book Info */}
              <div className="p-6">
                <p className="text-sm text-primary font-medium mb-1">{book.subtitle}</p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {book.description}
                </p>
                <Button 
                  variant="gold-outline" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a href={book.shopLink} target="_blank" rel="noopener noreferrer">
                    Buy Now
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
