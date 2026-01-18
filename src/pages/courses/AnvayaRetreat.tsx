import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import forallImg from "@/assets/forall.jpg";

const AnvayaRetreat = () => {
  const handleEnquiry = () => {
    window.open("https://wa.me/919901518173?text=Hi, I'm interested in the Anvaya Parent-Child Retreat.", "_blank");
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
                src={forallImg}
                alt="Anvaya Retreat"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Weekend Retreat
              </span>
              
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Anvaya
              </h1>
              
              <p className="text-xl text-primary font-medium mb-6">
                Weekend Parent-Child Retreat
              </p>

              <div className="gold-divider mb-8" />

              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-6">
                  A 2-day immersive retreat in nature, designed to help parents and children reconnect in a calm, grounded environment.
                </p>

                <h3 className="text-foreground font-display text-xl font-semibold mb-4">
                  What to expect:
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Shared reflective and experiential activities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Focus on understanding, trust, and bonding
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Build emotional connection in a calm, distraction-free space
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Fun, interactive activities for parent & child to grow together
                  </li>
                </ul>

                <p className="text-lg font-medium text-foreground italic mb-6">
                  "A hands-on, immersive experience that helps you bond while discovering your inner nature."
                </p>

                <p className="text-primary font-semibold">
                  👉 For families seeking lived connection, not just insight
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

export default AnvayaRetreat;
