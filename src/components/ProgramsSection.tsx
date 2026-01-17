import { Button } from "@/components/ui/button";
import { Baby, Users, BookOpen, GraduationCap, TreePine, MessageCircle } from "lucide-react";

const programs = [
  {
    id: "garbha-vidya",
    icon: Baby,
    title: "Garbha Vidya",
    subtitle: "Conscious Preparation for Pre-Conception & Pregnancy",
    tagline: "The Abhimanyu Effect: Learning begins even before birth.",
    description: "A child absorbs the emotional environment of the parents—their calm, stress, and presence—long before words or guidance. More harmonious the environment more harmonious the life of the child will be.",
    highlights: [
      "Create a safe nurturing inner space for their child, through cultivating emotional awareness and spiritual grounding.",
      "Create favourable samskaras in the unborn child.",
      "Connect consciously with the child in the womb.",
      "Integrate timeless wisdom into modern life.",
    ],
    footer: "Preparing the inner environment before life begins.",
    cta: "📩 Details shared on enquiry",
  },
  {
    id: "conscious-parenting",
    icon: Users,
    title: "Conscious Parenting",
    subtitle: "Weekend Online Course – Step 1: Begin Gently",
    tagline: null,
    description: "This weekend is not about learning more parenting techniques. It is about seeing more clearly—yourself, your child, and the space between you.",
    highlights: [
      "Overstimulated, reactive, or emotionally tired",
      "Confused about whether they are \"doing enough\" or \"doing it right\"",
      "Caught between modern advice and inner discomfort",
      "Wanting connection, but not knowing how to begin",
    ],
    highlightsPrefix: "Many parents join when they feel:",
    footer: "Timing: 11:00 AM – 1:00 PM | 3:00 PM – 5:00 PM (Both days)",
    fee: "₹2,000",
    ideal: "Ideal if you are exploring conscious parenting for the first time",
    cta: null,
  },
  {
    id: "art-of-parenting",
    icon: BookOpen,
    title: "Art of Parenting",
    subtitle: "A Deeper Journey",
    tagline: null,
    description: "This is a longer, deeper online programme for parents who wish to work with their own patterns, triggers, and responses in a structured way.",
    highlights: [
      "Interactive online sessions.",
      "Reflect on your parenting patterns and develop emotional anchors.",
      "Guided exercises, group discussions, and support for real-life parenting challenges.",
      "Flexible schedule—learn and apply insights from anywhere.",
    ],
    footer: "Parenting is a journey of growth—for you and your child. This program gives you the tools to navigate it with awareness and presence.",
    ideal: "For parents ready to engage more deeply with themselves",
    cta: "📩 Details shared on enquiry",
  },
  {
    id: "anvaya-retreat",
    icon: TreePine,
    title: "Anvaya",
    subtitle: "Weekend Parent-Child Retreat",
    tagline: null,
    description: "A 2-day immersive retreat in nature, designed to help parents and children reconnect in a calm, grounded environment.",
    highlights: [
      "Shared reflective and experiential activities.",
      "Focus on understanding, trust, and bonding.",
      "Build emotional connection in a calm, distraction-free space.",
      "Fun, interactive activities for parent & child to grow together.",
    ],
    footer: "A hands-on, immersive experience that helps you bond while discovering your inner nature.",
    ideal: "For families seeking lived connection, not just insight",
    cta: "📩 Details shared on enquiry",
  },
  {
    id: "gita-for-youth",
    icon: GraduationCap,
    title: "Bhagavad Gita for Youth",
    subtitle: "Navigate stress, build resilience, and face life with clarity",
    tagline: null,
    description: "Life can feel overwhelming, confusing, and full of pressure. This 2-month online programme helps youth:",
    highlights: [
      "Manage stress and anxiety",
      "Build inner steadiness and emotional resilience",
      "Reflect on challenges and decisions",
      "Turn difficulties into learning opportunities",
    ],
    format: ["3 live online sessions", "Guided journaling & reflections on 20 Gita verses", "Meditations inspired by the teachings"],
    footer: "\"Learn to respond to life's ups and downs with calm, clarity, and courage.\"",
    cta: "📩 Enquire for details",
  },
  {
    id: "study-sessions",
    icon: MessageCircle,
    title: "Open Study Sessions",
    subtitle: "For All Ages",
    tagline: null,
    description: "Explore timeless wisdom from the masters through guided group sessions:",
    highlights: [
      "Bhagavad Gita – Vyasa Aushadam (Nochur Ramanatheertha Swamigal's commentary)",
      "Srimad Bhagawatham (Kamala Subramaniam)",
      "Atma Bodha (Swami Chinmayananda's commentary)",
    ],
    whyJoin: [
      "Deepen understanding of Vedantic wisdom",
      "Reflect on life, relationships, and inner growth",
      "Connect with a community of learners and seekers",
    ],
    footer: "Open to parents, youth, and anyone curious about inner development.",
    cta: "Join Study Sessions",
  },
];

export function ProgramsSection() {
  const handleEnquiry = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Core Programs
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Our Offerings
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Sankalpa Vidya, programmes are offered as conscious steps, not packages to be consumed. 
            You are invited to begin where you feel called.
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-gold transition-all duration-300 border border-border"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{program.subtitle}</p>
                  
                  {program.tagline && (
                    <p className="text-foreground italic mb-4">{program.tagline}</p>
                  )}
                  
                  <p className="text-muted-foreground mb-4">{program.description}</p>

                  {program.highlightsPrefix && (
                    <p className="text-foreground font-medium mb-2">{program.highlightsPrefix}</p>
                  )}

                  <ul className="space-y-2 mb-4">
                    {program.highlights.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {program.format && (
                    <div className="mb-4">
                      <p className="text-foreground font-medium mb-2">Format:</p>
                      <ul className="space-y-1">
                        {program.format.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {program.whyJoin && (
                    <div className="mb-4">
                      <p className="text-foreground font-medium mb-2">Why join:</p>
                      <ul className="space-y-1">
                        {program.whyJoin.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {program.footer && (
                    <p className="text-foreground/80 italic mb-4">{program.footer}</p>
                  )}

                  <div className="flex flex-wrap items-center gap-4">
                    {program.fee && (
                      <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full">
                        💰 Fee: {program.fee}
                      </span>
                    )}
                    {program.ideal && (
                      <span className="text-sm text-muted-foreground">
                        👉 {program.ideal}
                      </span>
                    )}
                  </div>

                  {program.cta && (
                    <Button 
                      variant="gold-outline" 
                      className="mt-4"
                      onClick={handleEnquiry}
                    >
                      {program.cta}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
