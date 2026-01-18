import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import garbhavidyaImg from "@/assets/garbhavidya.jpg";

const GarbhaVidya = () => {
  const handleEnquiry = () => {
    window.open("https://wa.me/919901518173?text=Hi, I'm interested in the Garbha Vidya program.", "_blank");
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
                src={garbhavidyaImg}
                alt="Garbha Vidya"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Pre-Conception & Pregnancy
              </span>
              
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Garbha Vidya
              </h1>
              
              <p className="text-xl text-primary font-medium mb-6">
                The Abhimanyu Effect: Learning begins even before birth.
              </p>

              <div className="gold-divider mb-8" />

              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-6">
                  A child absorbs the emotional environment of the parents—their calm, stress, and presence—long before words or guidance. More harmonious the environment, more harmonious the life of the child will be.
                </p>

                <h3 className="text-foreground font-display text-xl font-semibold mb-4">
                  Garbha Vidya helps parents:
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Create a safe nurturing inner space for their child, through cultivating emotional awareness and spiritual grounding.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Create favourable samskaras in the unborn child.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Connect consciously with the child in the womb.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Integrate timeless wisdom into modern life.
                  </li>
                </ul>

                <p className="text-lg font-medium text-foreground italic">
                  "Preparing the inner environment before life begins."
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

export default GarbhaVidya;
