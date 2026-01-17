import { Check, X, Sparkles } from "lucide-react";

export function AboutSection() {
  const forYouItems = [
    "You want to raise emotionally resilient, grounded children",
    "You would like to notice and work with your own emotions and reactions",
    "You prefer understanding and growth over quick fixes",
    "You see parenting as a journey of growth—for you and your child",
  ];

  const notForYouItems = [
    "You're looking for instant behaviour correction",
    "You want prescriptive rules without reflection",
    "You think parenting is mainly about results",
    "You're not ready to explore your inner world yet",
  ];

  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="container-width">
        {/* Introduction */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            ✨ Why Sankalpa Vidya
          </p>
          <div className="gold-divider mb-8" />
          
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Sankalpa Vidya is a reflective space for parents and seekers to pause, turn inward, 
              and grow—emotionally, mentally, and spiritually.
            </p>
            <p>
              We work with a simple truth: <span className="text-foreground font-medium">When parents are emotionally anchored, 
              and culturally rooted, children grow feeling safe, grounded, and secure.</span>
            </p>
            <p>
              Parenting is not just about guidance or discipline. It is about the inner state from which we relate.
            </p>
            <p>
              Rooted in Vedantic wisdom, cultural practices and emotional awareness, Sankalpa Vidya 
              supports conscious conception, awareness during pregnancy, mindful parenting, and inner 
              growth—at every stage of life.
            </p>
            <p className="text-primary font-medium">
              Sankalpa Vidya supports parents in cultivating this inner anchoring—so children grow 
              with confidence and trust in life.
            </p>
          </div>
        </div>

        {/* For You / Not For You Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* For You */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Sankalpa Vidya Is For You If…
              </h3>
            </div>
            <ul className="space-y-4">
              {forYouItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-muted/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center">
                <X className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                This May Not Be For You If…
              </h3>
            </div>
            <ul className="space-y-4">
              {notForYouItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-10 italic">
          There is no right or wrong—only different paths. Sankalpa Vidya honours conscious choice.
        </p>
      </div>
    </section>
  );
}
