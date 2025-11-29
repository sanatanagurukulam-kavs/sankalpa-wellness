import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Yoga Instructor",
    content: "The teachings of Sankalpa Vidya have profoundly transformed my approach to both my personal practice and how I guide my students. The wisdom shared here is authentic and deeply meaningful.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Wellness Coach",
    content: "I've read countless books on spirituality, but the insights from these teachings stand apart. They're practical, profound, and have helped me find true inner peace.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Meditation Practitioner",
    content: "After years of searching, I finally found guidance that resonates with my soul. The books and videos have become essential companions on my spiritual journey.",
  },
  {
    id: 4,
    name: "Michael Torres",
    role: "Entrepreneur",
    content: "These teachings helped me integrate mindfulness into my busy life. I've become more focused, peaceful, and purposeful in everything I do.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-ivory">
      <div className="container-width">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Words from the Community
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from those who have walked this path and experienced transformation through these teachings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-soft transition-shadow duration-300 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <p className="text-foreground/90 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-gold-light/50 flex items-center justify-center">
                  <span className="font-display text-lg text-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
