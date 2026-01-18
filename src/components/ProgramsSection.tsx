import { useNavigate } from "react-router-dom";
import garbhavidyaImg from "@/assets/garbhavidya.jpg";
import parentingImg from "@/assets/parenting.jpg";
import bhagavadgitaImg from "@/assets/bhagavadgitaforyouth.jpg";
import forallImg from "@/assets/forall.jpg";

const courses = [
  {
    id: "garbha-vidya",
    image: garbhavidyaImg,
    title: "Garbha Vidya",
    subtitle: "Conscious Preparation for Pre-Conception & Pregnancy",
    path: "/courses/garbha-vidya",
  },
  {
    id: "conscious-parenting",
    image: parentingImg,
    title: "Conscious Parenting",
    subtitle: "Weekend Online Course – Begin Gently",
    path: "/courses/conscious-parenting",
  },
  {
    id: "art-of-parenting",
    image: parentingImg,
    title: "Art of Parenting",
    subtitle: "A Deeper Journey",
    path: "/courses/art-of-parenting",
  },
  {
    id: "anvaya-retreat",
    image: forallImg,
    title: "Anvaya",
    subtitle: "Weekend Parent-Child Retreat",
    path: "/courses/anvaya-retreat",
  },
  {
    id: "gita-for-youth",
    image: bhagavadgitaImg,
    title: "Bhagavad Gita for Youth",
    subtitle: "Navigate stress, build resilience, and face life with clarity",
    path: "/courses/gita-for-youth",
  },
  {
    id: "study-sessions",
    image: forallImg,
    title: "Open Study Sessions",
    subtitle: "For All Ages",
    path: "/courses/study-sessions",
  },
];

export function ProgramsSection() {
  const navigate = useNavigate();

  const handleCourseClick = (path: string) => {
    navigate(path);
  };

  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Programs
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Courses Available
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Sankalpa Vidya, programmes are offered as conscious steps, not packages to be consumed. 
            You are invited to begin where you feel called.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => handleCourseClick(course.path)}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-gold transition-all duration-300 border border-border text-left cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm">{course.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
