import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this for parents of all ages?",
    answer: "Yes—pre-conception to adult children.",
  },
  {
    question: "Do I need spiritual knowledge?",
    answer: "No. Just openness to reflect.",
  },
  {
    question: "Is this therapy?",
    answer: "No. It's a reflective learning journey.",
  },
  {
    question: "Is this about quick fixes?",
    answer: "No. It builds long-term inner clarity.",
  },
  {
    question: "Is it too late to begin?",
    answer: "Never.",
  },
];

export function FAQsSection() {
  return (
    <section id="faqs" className="section-padding bg-ivory">
      <div className="container-width">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            ❓ Quick FAQs
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="gold-divider mb-6" />
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 shadow-card border border-border"
              >
                <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
