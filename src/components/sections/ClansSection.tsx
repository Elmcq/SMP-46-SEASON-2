import district12thCard from "@/assets/clan-district-12th.png";
import mysteriousForceCard from "@/assets/clan-mysterious-force.png";
import whiteMoonCard from "@/assets/clan-white-moon.png";

const clanCards = [
  {
    name: "White Moon",
    leader: "Azzam",
    image: whiteMoonCard,
    hoverGlow: "hover:shadow-[0_0_28px_rgba(229,231,235,0.3)]",
  },
  {
    name: "Mysterious Force",
    leader: "Yoga",
    image: mysteriousForceCard,
    hoverGlow: "hover:shadow-[0_0_30px_rgba(147,51,234,0.36)]",
  },
  {
    name: "District 12th",
    leader: "Altan",
    image: district12thCard,
    hoverGlow: "hover:shadow-[0_0_28px_rgba(185,28,28,0.34)]",
  },
];

export function ClansSection() {
  return (
    <section id="clans" className="atmosphere-section px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl reveal-on-scroll opacity-0 translate-y-12 transition-[translate,opacity] duration-1000 ease-out">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-4 font-pixel text-xs text-accent">// SEASON 2 ARCHIVE</p>
          <h2 className="mb-6 font-pixel text-2xl text-primary text-shadow-pixel sm:text-4xl">
            POWERFUL CLANS
          </h2>
          <p className="mx-auto max-w-2xl font-mc text-xl text-foreground/80">
            A record of the alliances and community structure from Season 2.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {clanCards.map((clan) => (
            <figure
              key={clan.name}
              className={`mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl shadow-lg motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 motion-safe:hover:scale-[1.02] ${clan.hoverGlow}`}
            >
              <img
                src={clan.image}
                alt={`${clan.name} clan card, leader ${clan.leader}`}
                width={600}
                height={750}
                className="block aspect-[4/5] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
