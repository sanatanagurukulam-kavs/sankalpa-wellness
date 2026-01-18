import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import bhagavadgitaImg from "@/assets/bhagavadgitaforyouth.jpg";

const GitaForYouth = () => {
  const handleEnquiry = () => {
    window.open("https://wa.me/919901518173?text=Hi, I'm interested in the Bhagavad Gita for Youth program.", "_blank");
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
                src={bhagavadgitaImg}
                alt="Bhagavad Gita for Youth"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                2-Month Online Programme
              </span>
              
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Bhagavad Gita for Youth
              </h1>
              
              <p className="text-xl text-primary font-medium mb-6">
                Navigate stress, build resilience, and face life with clarity.
              </p>

              <div className="gold-divider mb-8" />

              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="mb-6">
                  Life can feel overwhelming, confusing, and full of pressure. This 2-month online programme helps youth:
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Manage stress and anxiety
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Build inner steadiness and emotional resilience
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Reflect on challenges and decisions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    Turn difficulties into learning opportunities
                  </li>
                </ul>

                <h3 className="text-foreground font-display text-xl font-semibold mb-4">
                  Format:
                </h3>

                <div className="bg-muted/50 rounded-xl p-6 mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      3 live online sessions
                    </li>
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Guided journaling & reflections on 20 Gita verses
                    </li>
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      Meditations inspired by the teachings
                    </li>
                  </ul>
                </div>

                <p className="text-lg font-medium text-foreground italic">
                  "Learn to respond to life's ups and downs with calm, clarity, and courage."
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

export default GitaForYouth;
