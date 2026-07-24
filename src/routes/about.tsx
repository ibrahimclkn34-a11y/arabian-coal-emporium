import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import dubai from "@/assets/dubai.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Radiant Trading Co." },
      { name: "description", content: "A private Dubai commodities house, founded in 2024 and built on three decades of carbon trading experience in Turkey." },
      { property: "og:title", content: "About — Radiant Trading Co." },
      { property: "og:description", content: "A private Dubai commodities house, founded in 2024 and built on three decades of carbon trading experience in Turkey." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <Nav />
      <main className="pt-32">
        <section className="container-x py-16 md:py-24">
          <div className="eyebrow">— The House</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">
            A new Dubai house.<br />
            <span className="italic">Three decades of carbon behind it.</span>
          </h1>
        </section>

        <section className="container-x pb-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <img src={dubai} alt="Dubai" width={1600} height={1000} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                Radiant Trading Co. was founded in Dubai in 2024 by partners
                who spent the previous three decades trading petroleum coke
                and thermal coal in Turkey. The move to the UAE was a deliberate
                next step: closer to the Gulf's refineries, closer to the
                seaborne lanes that feed Asian and African industry, and closer
                to the counterparties who value certainty over volume.
              </p>
              <p>
                We are a private, family-financed house. We hold no external
                equity and answer only to our counterparties and to our own
                name. What we lacked in years on a Dubai letterhead, we made up
                for in relationships, shipment records and a reputation built
                one cargo at a time.
              </p>
              <p>
                Our discipline is unfashionable: we would rather turn away
                volume than take a cargo we cannot deliver on. We do not chase
                spot. We do not overtrade our balance sheet. And we do not,
                under any circumstance, take positions we cannot finance
                ourselves.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-navy-ink text-ivory py-24">
          <div className="container-x grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="eyebrow text-ivory/60">— Principles</div>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">Four rules<br /><span className="italic">we do not bend.</span></h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-10">
              {[
                ["Own Paper", "Every cargo is financed on Radiant's own balance sheet or through committed lines with two Gulf banks."],
                ["Named Counterparties", "We onboard by referral. Every buyer and seller is known to a partner personally."],
                ["Independent Inspection", "SGS, Cotecna or Alfred H Knight — always. No exception, at load and at discharge."],
                ["No Sanctions Exposure", "We do not touch cargoes with any nexus to sanctioned jurisdictions or entities."],
              ].map(([t, b], i) => (
                <div key={t} className="border-t border-ivory/20 pt-6 grid grid-cols-12 gap-4">
                  <div className="col-span-2 font-mono text-[0.72rem] tracking-[0.22em] text-ivory/50">0{i + 1}</div>
                  <div className="col-span-10">
                    <h3 className="font-display text-2xl">{t}</h3>
                    <p className="mt-3 text-ivory/70 leading-relaxed">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-x py-24">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Dubai", "Head office · trade desk · finance"],
              ["Singapore", "Asia-Pacific origination & chartering"],
              ["Geneva", "Structured trade & credit"],
            ].map(([city, role]) => (
              <div key={city} className="border-t border-border pt-6">
                <div className="font-display text-3xl">{city}</div>
                <div className="mt-2 font-mono text-[0.72rem] tracking-[0.22em] uppercase text-muted-foreground">{role}</div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/contact" className="btn-primary">Speak with a partner →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
