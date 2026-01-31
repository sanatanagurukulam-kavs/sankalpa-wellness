import facilitatorImg from "@/assets/facilitator.jpg";

export function FacilitatorSection() {
  return (
    <section id="facilitator" className="section-padding bg-ivory">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Facilitator Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden shadow-card">
              <img 
                src={facilitatorImg} 
                alt="Arthi Krishna - Vedantic Life Coach" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              👩‍🏫 About the Facilitator
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-2">
              Hi, I'm Arthi Krishna
            </h2>
            <p className="text-primary font-medium mb-6">
              Vedantic Life Coach | Conscious Parenting Facilitator
            </p>
            <div className="gold-divider mb-8 !mx-0" />
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <h3 className="font-display text-xl text-foreground font-semibold">
                Parenting as a Joyful Adventure
              </h3>
              <p>
                I see parenting as a joyful adventure—unexpected turns make the journey 
                interesting and help us grow. For the past 16 years with Chinmaya Mission, 
                through my work with many parents and children and through my own parenting 
                journey, I've learned how inner growth in parents creates rooted, resilient children.
              </p>
              <p>
                I specialize in bridging ancient wisdom with modern challenges and a scientific 
                outlook, helping parents pause, reflect, and respond with clarity.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-3xl text-primary font-semibold">16+</p>
                <p className="text-sm text-muted-foreground">Years with Chinmaya Mission</p>
              </div>
              <div>
                <p className="font-display text-3xl text-primary font-semibold">2</p>
                <p className="text-sm text-muted-foreground">Books Published</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
