import { AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { playSchedule, rules, warningGroups } from "@/config/content";

export function RulesSection() {
  return (
    <section id="rules" className="atmosphere-section py-20 px-6 sm:py-24">
      <div className="mx-auto w-full max-w-3xl reveal-on-scroll opacity-0 translate-y-12 transition-[translate,opacity] duration-1000 ease-out">
        <div className="mb-10 text-center sm:mb-12">
          <p className="font-pixel text-xs text-accent mb-4">// MUST READ</p>
          <h2 className="font-pixel text-2xl text-primary text-shadow-pixel sm:text-4xl">
            SERVER RULES
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="overflow-hidden rounded-lg border border-primary/25 bg-background/70 shadow-[0_0_28px_rgba(59,130,246,0.08)]"
        >
          {rules.map((rule) => (
            <AccordionItem
              key={rule.id}
              value={rule.id}
              className="border-b border-primary/15 px-4 last:border-b-0 sm:px-6"
            >
              <AccordionTrigger className="py-5 text-left font-pixel text-sm text-foreground transition-colors hover:text-primary hover:no-underline focus-visible:ring-2 focus-visible:ring-primary/60">
                {rule.title}
              </AccordionTrigger>
              <AccordionContent className="max-w-[70ch] pb-5 font-mc text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p className="text-foreground/90">{rule.intro}</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-primary">
                  {rule.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 rounded-lg border border-primary/25 bg-background/70 p-5 shadow-[0_0_28px_rgba(59,130,246,0.08)] sm:p-7">
          <h3 className="mb-5 font-pixel text-sm text-accent">PLAY SCHEDULE</h3>
          <div className="grid gap-5 font-mc text-base text-foreground/90 sm:grid-cols-2 sm:text-lg">
            {playSchedule.tracks.map((track) => (
              <div
                key={track.name}
                className="rounded-md border border-primary/15 bg-secondary/25 p-4"
              >
                <h4 className="text-primary">
                  <strong>{track.name}</strong>
                </h4>
                <p className="mt-1">
                  {track.days} — {track.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 font-mc text-base leading-relaxed text-foreground/90 sm:text-lg">
            {playSchedule.shared}
          </p>
          <p className="mt-2 font-mc text-base leading-relaxed text-foreground/90 sm:text-lg">
            {playSchedule.busy}
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-lg border border-destructive/35 bg-background/70 p-5 shadow-[0_0_28px_rgba(239,68,68,0.06)] sm:p-7">
          <div className="absolute right-0 top-0 p-4 opacity-10">
            <AlertTriangle size={80} />
          </div>
          <h3 className="relative mb-6 flex items-center gap-3 font-pixel text-sm text-destructive">
            <AlertTriangle className="h-5 w-5" /> WARNING SYSTEM
          </h3>
          <div className="relative grid gap-7 font-mc text-base leading-relaxed text-foreground/80 sm:grid-cols-2 sm:text-lg">
            {warningGroups.map((group) => (
              <div key={group.label}>
                <h4 className="text-foreground">
                  <strong>{group.label}</strong>
                </h4>
                {group.note && (
                  <p className="mt-1 text-sm text-foreground/70 sm:text-base">{group.note}</p>
                )}
                <ul className="mt-3 space-y-3">
                  {group.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 text-destructive">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
