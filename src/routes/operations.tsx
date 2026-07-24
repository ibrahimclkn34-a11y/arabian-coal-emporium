import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import ship from "@/assets/ship.jpg";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Operations — Radiant Trading Co." },
      { name: "description", content: "Origination, chartering, inspection and structured trade — the machinery behind every Radiant cargo." },
      { property: "og:title", content: "Operations — Radiant Trading Co." },
      { property: "og:description", content: "Origination, chartering, inspection and structured trade — the machinery behind every Radiant cargo." },
    ],
  }),
  component: Operations,
});

function Operations() {
  return (
    <div>
      <Nav />
      <main>
        <section className="relative min-h-[70vh] flex items-end bg-navy-ink text-ivory overflow-hidden pt-32">
          <img src={ship} alt="Bulk carrier" width={1600} height={1000} className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-ink via-navy-ink/60 to-transparent" />
          <div className="relative container-x py-20">
            <div className="eyebrow text-ivory/60">— Operations</div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">
              A single desk.<br /><span className="italic">From refinery gate to plant door.</span>
            </h1>
          </div>
        </section>

        <section className="container-x py-24">
          <div className="grid md:grid-cols-12 gap-10">
            {[
              { n: "01", t: "Origination", b: "Long-term relationships with refineries and mine-mouth partners. We hold regular liftings — not spot allocations." },
              { n: "02", t: "Chartering", b: "In-house shipbroking desk. Supramax to Capesize tonnage on time-charter, plus long-standing owner relationships for voyage cargoes." },
              { n: "03", t: "Inspection & Quality", b: "Independent surveyors inspect every cargo at load and at discharge. Certificates are the buyer's — always." },
              { n: "04", t: "Structured Trade", b: "In-house letters of credit, prepayment facilities, and multi-year off-take structures for tier-one industrial buyers." },
              { n: "05", t: "Insurance & Risk", b: "Marine cargo cover, with FX and freight exposure managed on our own book." },
              { n: "06", t: "Compliance", b: "Full KYC on every counterparty. Continuous screening against international sanctions lists. No exceptions." },
            ].map((x) => (
              <div key={x.n} className="md:col-span-6 border-t-2 border-navy-ink pt-6">
                <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted-foreground">{x.n}</div>
                <h3 className="mt-3 font-display text-3xl">{x.t}</h3>
                <p className="mt-4 text-foreground/75 leading-relaxed max-w-lg">{x.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary py-24">
          <div className="container-x">
            <div className="eyebrow">— Loading Terminals</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">A global network of<br /><span className="italic">loading ports.</span></h2>
            <p className="mt-8 max-w-2xl text-foreground/75 leading-relaxed">
              We load regularly from terminals across the Arabian Gulf, the
              Americas, Southeast Asia and Southern Africa. Port positions are
              matched to cargo specification and voyage economics — not fixed allocations.
            </p>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                ["Jubail", "SA"], ["Yanbu", "SA"], ["Ruwais", "AE"], ["Fujairah", "AE"],
                ["Houston", "US"], ["Corpus Christi", "US"], ["New Orleans", "US"], ["Freeport", "US"],
                ["Richards Bay", "ZA"], ["Balikpapan", "ID"], ["Samarinda", "ID"], ["Taboneo", "ID"],
                ["Puerto Bolívar", "CO"], ["Santa Marta", "CO"], ["Sohar", "OM"], ["Sikka", "IN"],
                ["Kandla", "IN"], ["Gwadar", "PK"],
              ].map(([city, cc]) => (
                <div key={city} className="border-t border-border pt-4">
                  <div className="font-display text-2xl">{city}</div>
                  <div className="font-mono text-[0.7rem] tracking-[0.22em] text-muted-foreground mt-1">{cc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
