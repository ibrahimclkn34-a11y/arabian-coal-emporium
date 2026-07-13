import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import petcoke from "@/assets/petcoke.jpg";
import plant from "@/assets/plant.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Petroleum Coke & Thermal Coal | Radiant Trading Co." },
      { name: "description", content: "Full specifications for the petroleum coke and thermal coal grades supplied by Radiant Trading Co." },
      { property: "og:title", content: "Products — Petroleum Coke & Thermal Coal | Radiant Trading Co." },
      { property: "og:description", content: "Fuel-grade petcoke, anode-grade petcoke, RB1, RB2 and Indonesian thermal coal in Supramax, Panamax and Capesize parcels." },
    ],
  }),
  component: Products,
});

const grades = [
  {
    group: "Petroleum Coke",
    img: petcoke,
    items: [
      { name: "Fuel-Grade Petcoke — USGC", specs: [["Sulfur", "5.5 – 7.5%"], ["HGI", "40 – 55"], ["Moisture", "≤ 8%"], ["Origin", "US Gulf Coast"]] },
      { name: "Fuel-Grade Petcoke — Saudi", specs: [["Sulfur", "3.5 – 5.0%"], ["HGI", "35 – 45"], ["Moisture", "≤ 6%"], ["Origin", "Jubail · Yanbu"]] },
      { name: "Anode-Grade Petcoke", specs: [["Sulfur", "≤ 3.0%"], ["Vanadium", "≤ 350 ppm"], ["HGI", "≥ 100"], ["Origin", "Selected refineries"]] },
    ],
  },
  {
    group: "Thermal Coal",
    img: plant,
    items: [
      { name: "South African RB1", specs: [["CV", "6,000 NAR"], ["Ash", "15% max"], ["Sulfur", "1.0% max"], ["Origin", "Richards Bay"]] },
      { name: "South African RB2", specs: [["CV", "5,500 NAR"], ["Ash", "23% max"], ["Sulfur", "1.0% max"], ["Origin", "Richards Bay"]] },
      { name: "Indonesian Sub-Bituminous", specs: [["CV", "5,800 – 6,300 GAR"], ["Ash", "≤ 8%"], ["Sulfur", "≤ 1.0%"], ["Origin", "Kalimantan"]] },
    ],
  },
];

function Products() {
  return (
    <div>
      <Nav />
      <main className="pt-32">
        <section className="container-x py-16 md:py-24">
          <div className="eyebrow">— The Product Book</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">
            Specifications,<br /><span className="italic">without ornament.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            The grades below represent our standing product book. Custom
            blends, alternative origins and non-standard parcel sizes are
            available on request from the trade desk.
          </p>
        </section>

        {grades.map((g, i) => (
          <section key={g.group} className={i % 2 === 0 ? "bg-secondary" : ""}>
            <div className="container-x py-20 md:py-28">
              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4 md:sticky md:top-32">
                  <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted-foreground">0{i + 1} / Group</div>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">{g.group}</h2>
                  <img src={g.img} alt={g.group} width={1200} height={900} loading="lazy" className="mt-8 w-full aspect-[4/3] object-cover" />
                </div>
                <div className="md:col-span-7 md:col-start-6 space-y-10">
                  {g.items.map((it) => (
                    <div key={it.name} className="border-t-2 border-navy-ink pt-6">
                      <h3 className="font-display text-2xl">{it.name}</h3>
                      <dl className="mt-5">
                        {it.specs.map(([k, v]) => (
                          <div key={k} className="grid grid-cols-3 py-2.5 border-b border-border">
                            <dt className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted-foreground">{k}</dt>
                            <dd className="col-span-2 text-foreground/85">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
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
