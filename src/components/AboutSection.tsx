export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden shadow-card">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-4xl text-primary">SV</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Author Photo</p>
                </div>
              </div>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              About the Author
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              A Lifelong Seeker of Truth
            </h2>
            <div className="gold-divider mb-8 !mx-0" />
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Welcome to Sankalpa Vidya, a sacred space dedicated to the exploration of 
                consciousness, spiritual growth, and the timeless wisdom that guides us 
                toward inner peace and self-realization.
              </p>
              <p>
                With over two decades of study in ancient traditions, meditation practices, 
                and wellness philosophies, I have dedicated my life to understanding the 
                profound connection between mind, body, and spirit.
              </p>
              <p>
                Through books, teachings, and guided practices, my mission is to help you 
                discover your own path to enlightenment and live a life filled with purpose, 
                clarity, and deep inner joy.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-3xl text-primary font-semibold">20+</p>
                <p className="text-sm text-muted-foreground">Years Teaching</p>
              </div>
              <div>
                <p className="font-display text-3xl text-primary font-semibold">10K+</p>
                <p className="text-sm text-muted-foreground">Students Guided</p>
              </div>
              <div>
                <p className="font-display text-3xl text-primary font-semibold">5</p>
                <p className="text-sm text-muted-foreground">Books Published</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
