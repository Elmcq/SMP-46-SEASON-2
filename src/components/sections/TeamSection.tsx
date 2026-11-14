import TiltedCard from "@/components/TiltedCard";
import { staffMembers } from "@/config/content";

export function TeamSection() {
  return (
    <section id="team" className="atmosphere-section atmosphere-section-soft py-24 px-6">
      <div className="max-w-7xl mx-auto reveal-on-scroll opacity-0 translate-y-12 transition-[translate,opacity] duration-1000 ease-out">
        <div className="text-center mb-16">
          <p className="font-pixel text-xs text-accent mb-4">// BEHIND THE SCENES</p>
          <h2 className="font-pixel text-2xl sm:text-4xl text-primary text-shadow-pixel mb-6">
            OUR TEAM
          </h2>
          <p className="font-mc text-xl text-foreground/80 max-w-2xl mx-auto">
            Kenali staff dan pengurus yang bekerja di balik layar untuk memastikan SMP 46 Season 2
            berjalan dengan lancar dan aman.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {staffMembers.map((staff) => (
            <article key={staff.name} className="group flex flex-col items-center text-center">
              <div className="mb-7 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="transition-[filter] duration-300 group-hover:drop-shadow-[0_0_24px_rgba(74,222,128,0.35)]">
                  {staff.placeholder ? (
                    <div
                      className="team-placeholder"
                      style={{
                        width: "clamp(170px, 18vw, 230px)",
                        height: "clamp(170px, 18vw, 230px)",
                      }}
                    >
                      <div className="team-placeholder-text">
                        COMING
                        <br />
                        SOON
                      </div>
                    </div>
                  ) : (
                    <TiltedCard
                      imageSrc={staff.image}
                      altText={staff.name}
                      containerHeight="clamp(170px, 18vw, 230px)"
                      containerWidth="clamp(170px, 18vw, 230px)"
                      imageHeight="clamp(170px, 18vw, 230px)"
                      imageWidth="clamp(170px, 18vw, 230px)"
                      rotateAmplitude={10}
                      scaleOnHover={1.06}
                      showMobileWarning={false}
                      showTooltip={false}
                    />
                  )}
                </div>
              </div>

              <h3 className="font-pixel text-sm sm:text-base text-foreground mb-3">{staff.name}</h3>
              <p className={`font-pixel text-xs mb-4 uppercase tracking-wider ${staff.textGlow}`}>
                {staff.role}
              </p>
              <p className="font-mc text-xl text-foreground/70 leading-relaxed max-w-[250px]">
                {staff.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
