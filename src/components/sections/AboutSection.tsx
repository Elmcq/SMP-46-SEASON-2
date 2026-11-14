import { features } from "@/config/content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="atmosphere-section atmosphere-section-soft py-24 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-[translate,opacity] duration-1000 ease-out">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-accent mb-4">// ABOUT THE PROJECT</p>
          <h2 className="font-pixel text-2xl sm:text-4xl text-primary mb-6 text-shadow-pixel">
            BUILD THE NEXT CHAPTER
          </h2>
          <p className="font-mc text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            <span className="block">
              A student community Minecraft project of SMPN 46 Surabaya.
            </span>
            <span className="block">
              Our next chapter: build our own school together in Minecraft.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background/50 border border-border/50 p-6 pixel-border hover:bg-secondary/40 transition-colors group"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-pixel text-sm text-foreground mb-3">{feature.title}</h3>
              <p className="font-mc text-lg text-muted-foreground leading-normal">{feature.desc}</p>
            </div>
          ))}
        </div>
        <p className="font-mc text-sm text-muted-foreground text-center leading-relaxed mt-8">
          Minecraft Bedrock Edition • Open for SMPN 46 students only • Apply through the Apply Now
          button on this page when applications open.
        </p>
      </div>
    </section>
  );
}
