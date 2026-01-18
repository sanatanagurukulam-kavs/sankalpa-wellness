import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import parentingImg from "@/assets/parenting.jpg";

const ArtOfParenting = () => {
  const handleEnquiry = () => {
    window.open("https://wa.me/919901518173?text=Hi, I'm interested in the Art of Parenting program.", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <div className="container-width section-padding">
          <Link to="/#programs" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={parentingImg}
                alt="Art of Parenting"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                A Deeper Journey
              </span>
              
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Art of Parenting
              </h1>
              
              <p className="text-xl text-primary font-medium mb-6">
                For parents ready to engage more deeply with themselves
              </p>

              <div className="gold-divider mb-8" />

              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-6">
                  This is a longer, deeper online programme for parents who wish to work with their own patterns, triggers, and responses in a structured way.
                </p>

                <h3 className="text-foreground font-display text-xl font-semibold mb-4">
                  What's included:
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Interactive online sessions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Reflect on your parenting patterns and develop emotional anchors
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Guided exercises, group discussions, and support for real-life parenting challenges
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Flexible schedule—learn and apply insights from anywhere
                  </li>
                </ul>

                <p className="text-lg font-medium text-foreground italic mb-6">
                  "Parenting is a journey of growth—for you and your child. This program gives you the tools to navigate it with awareness and presence."
                </p>

                <p className="text-primary font-semibold">
                  👉 For parents ready to engage more deeply with themselves
                </p>
              </div>

              <Button variant="gold" size="lg" onClick={handleEnquiry}>
                Enquire for Details
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtOfParenting;
