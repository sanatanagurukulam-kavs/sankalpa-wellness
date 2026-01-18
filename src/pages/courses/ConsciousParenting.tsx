import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import parentingImg from "@/assets/parenting.jpg";

const ConsciousParenting = () => {
  const handleEnquiry = () => {
    window.open("https://wa.me/919901518173?text=Hi, I'm interested in the Conscious Parenting weekend course.", "_blank");
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
                alt="Conscious Parenting"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Step 1: Begin Gently
              </span>
              
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Conscious Parenting
              </h1>
              
              <p className="text-xl text-primary font-medium mb-6">
                Weekend Online Course
              </p>

              <div className="gold-divider mb-8" />

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-muted px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm">11:00 AM – 1:00 PM | 3:00 PM – 5:00 PM (Both days)</span>
                </div>
                <div className="flex items-center bg-muted px-4 py-2 rounded-full">
                  <IndianRupee className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-semibold">₹2,000</span>
                </div>
              </div>

              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-6">
                  This weekend is not about learning more parenting techniques. It is about seeing more clearly—yourself, your child, and the space between you.
                </p>

                <h3 className="text-foreground font-display text-xl font-semibold mb-4">
                  Many parents join when they feel:
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Overstimulated, reactive, or emotionally tired
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Confused about whether they are "doing enough" or "doing it right"
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Caught between modern advice and inner discomfort
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Wanting connection, but not knowing how to begin
                  </li>
                </ul>

                <p className="text-lg font-medium text-foreground italic mb-6">
                  "This weekend offers a pause that helps parenting come from clarity instead of confusion and anxiety."
                </p>

                <p className="text-primary font-semibold">
                  👉 Ideal if you are exploring conscious parenting for the first time
                </p>
              </div>

              <Button variant="gold" size="lg" onClick={handleEnquiry}>
                Enquire to Join
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsciousParenting;
