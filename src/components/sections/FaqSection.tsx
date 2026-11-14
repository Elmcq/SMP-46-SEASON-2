import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/content";

export function FaqSection() {
  return (
    <section id="faq" className="atmosphere-section atmosphere-section-soft py-20 px-6 sm:py-24">
      <div className="mx-auto w-full max-w-3xl reveal-on-scroll opacity-0 translate-y-12 transition-[translate,opacity] duration-1000 ease-out">
        <div className="mb-10 text-center sm:mb-12">
          <p className="font-pixel text-xs text-accent mb-4">// Q & A</p>
          <h2 className="font-pixel text-2xl sm:text-4xl text-primary text-shadow-pixel">
            TANYA JAWAB
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="overflow-hidden rounded-lg border border-primary/25 bg-background/70 shadow-[0_0_28px_rgba(59,130,246,0.08)]"
        >
          {faqs.map((faq, index) => {
            const id = `faq-${index + 1}`;
            return (
              <AccordionItem
                key={faq.q}
                value={id}
                className="border-b border-primary/15 px-4 last:border-b-0 sm:px-6"
              >
                <AccordionTrigger className="font-mc text-left text-lg text-foreground hover:text-primary hover:no-underline focus-visible:ring-2 focus-visible:ring-primary/60 sm:text-xl">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-[70ch] pb-5 font-mc text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
