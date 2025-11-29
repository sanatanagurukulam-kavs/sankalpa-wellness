import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Setting Sacred Intentions",
    excerpt: "Learn how the ancient practice of sankalpa can transform your approach to personal growth and spiritual development.",
    date: "December 15, 2024",
    category: "Spirituality",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Morning Rituals for Inner Peace",
    excerpt: "Discover simple yet powerful morning practices that set the tone for a mindful and balanced day ahead.",
    date: "December 10, 2024",
    category: "Wellness",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Understanding the Chakra System",
    excerpt: "An introduction to the seven energy centers of the body and how to keep them balanced for optimal wellbeing.",
    date: "December 5, 2024",
    category: "Energy Work",
    readTime: "7 min read",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Latest Writings
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            From the Blog
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and guidance on your path to spiritual growth and conscious living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-gold transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-gold-light/20 relative overflow-hidden">
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-sm font-medium text-primary hover:text-gold-dark transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gold-outline" size="lg">
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
