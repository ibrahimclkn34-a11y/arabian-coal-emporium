import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import petcoke from "@/assets/petcoke.jpg";
import plant from "@/assets/plant.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Petroleum Coke & Thermal Coal | Radiant Trading Co." },
      { name: "description", content: "Petroleum coke and thermal coal supplied by Radiant Trading Co. to industrial buyers worldwide." },
      { property: "og:title", content: "Products — Petroleum Coke & Thermal Coal | Radiant Trading Co." },
      { property: "og:description", content: "Petroleum coke and thermal coal supplied by Radiant Trading Co. to industrial buyers worldwide." },
    ],
  }),
  component: Products,
});

const products = [
  {
    group: "Petroleum Coke",
    img: petcoke,
    body: "A solid carbon fuel produced by oil refineries. We move fuel-grade petcoke for cement and power producers, and anode-grade material for the aluminium sector. Sourced through long-term refinery relationships and delivered on schedule.",
    tags: ["Fuel-grade", "Anode-grade", "Refinery direct"],
  },
  {
    group: "Thermal Coal",
    img: plant,
    body: "A primary energy source for cement, brick and independent power producers. We handle high and medium calorific coal from major coal basins, in Supramax, Panamax and Capesize parcels.",
    tags: ["High-CV", "Medium-CV", "Cement & power"],
  },
];

function Products() {
  return (
    <div>
      <Nav />
      <main className="pt-32">
        <section className="container-x py-16 md:py-24">
          <div className="eyebrow">— What We Move</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">
            Carbon,<br /><span className="italic">handled with care.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            Our business is built around two commodities: petroleum coke and
            thermal coal. We supply power plants, cement factories and other
            industrial buyers across the Middle East, Africa, Asia and Europe.
            We do not publish hard specifications online — every enquiry is
            handled directly by the trade desk.
          </p>
        </section>

        {products.map((g, i) => (
          <section key={g.group} className={i % 2 === 0 ? "bg-secondary" : ""}>
            <div className="container-x py-20 md:py-28">
              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-5 md:col-start-1">
                  <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted-foreground">0{i + 1} / Commodity</div>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">{g.group}</h2>
                  <img src={g.img} alt={g.group} width={1200} height={900} loading="lazy" className="mt-8 w-full aspect-[4/3] object-cover" />
                </div>
                <div className="md:col-span-5 md:col-start-7 md:pt-24">
                  <p className="text-lg text-foreground/80 leading-relaxed">{g.body}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {g.tags.map((t) => (
                      <span key={t} className="inline-block px-4 py-2 border border-border font-mono text-[0.7rem] tracking-[0.16em] uppercase text-foreground/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-12 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For current availability, indicative pricing and tailored specifications, speak to the trade desk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="bg-navy-ink text-ivory">
          <div className="container-x py-24 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <div className="eyebrow text-ivory/60">— Ready to trade</div>
              <h2 className="mt-6 font-display text-4xl md:text-5xl">Request a firm offer.</h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link to="/contact" className="btn-outline-light">Contact trade desk →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
