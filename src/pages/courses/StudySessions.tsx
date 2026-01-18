import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import forallImg from "@/assets/forall.jpg";

const StudySessions = () => {
  const handleEnquiry = () => {
    window.open("https://wa.me/919901518173?text=Hi, I'm interested in joining the Open Study Sessions.", "_blank");
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
                alt="Open Study Sessions"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                For All Ages
              </span>
              
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Open Study Sessions
              </h1>
              
              <p className="text-xl text-primary font-medium mb-6">
                Explore timeless wisdom from the masters through guided group sessions
              </p>

              <div className="gold-divider mb-8" />

              <div className="prose prose-lg text-muted-foreground mb-8">
                <h3 className="text-foreground font-display text-xl font-semibold mb-4">
                  Texts we explore:
                </h3>

                <div className="bg-muted/50 rounded-xl p-6 mb-6 space-y-4">
                  <div className="flex items-start">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Bhagavad Gita – Vyasa Aushadam</p>
                      <p className="text-sm">(Nochur Ramanatheertha Swamigal's commentary)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Srimad Bhagawatham</p>
                      <p className="text-sm">(Kamala Subramaniam)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Atma Bodha</p>
                      <p className="text-sm">(Swami Chinmayananda's commentary)</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-foreground font-display text-xl font-semibold mb-4">
                  Why join:
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Deepen understanding of Vedantic wisdom
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Reflect on life, relationships, and inner growth
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Connect with a community of learners and seekers
                  </li>
                </ul>

                <p className="text-lg font-medium text-foreground">
                  Open to parents, youth, and anyone curious about inner development.
                </p>
              </div>

              <Button variant="gold" size="lg" onClick={handleEnquiry}>
                Join Study Sessions
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudySessions;
