import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroPort from "@/assets/hero-port.jpg";
import petcoke from "@/assets/petcoke.jpg";
import ship from "@/assets/ship.jpg";
import dubai from "@/assets/dubai.jpg";
import plant from "@/assets/plant.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <Nav variant="over-dark" />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end bg-navy-ink text-ivory overflow-hidden">
        <img
          src={heroPort}
          alt="Bulk cargo terminal loading coal and petcoke at dusk"
          width={1920}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/85 via-navy-ink/40 to-navy-ink" />

        <div className="relative container-x pt-40 pb-20 md:pb-28">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-9">
              <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.28em] uppercase text-ivory/70">
                <span className="w-10 h-px bg-ivory/50" />
                Established Dubai · MMXXIV
              </div>
              <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
                Fueling the industry<br />
                <span className="italic text-ivory/80">that builds the world.</span>
              </h1>
              <p className="mt-10 max-w-2xl text-lg text-ivory/75 leading-relaxed">
                A private commodities house trading petroleum coke and thermal
                coal to cement, power and steel producers across the Middle East,
                Africa, Asia and Europe.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link to="/products" className="btn-outline-light">Our Commodities</Link>
                <Link to="/contact" className="btn-primary bg-ivory text-navy-ink hover:bg-ivory/90">
                  Open a Trade →
                </Link>
              </div>
            </div>
            <div className="md:col-span-3 md:text-right">
              <div className="font-mono text-[0.7rem] tracking-[0.24em] uppercase text-ivory/50">Experience</div>
              <div className="mt-3 font-display text-3xl">30 Years</div>
              <div className="mt-1 text-ivory/60 text-sm">In carbon trading</div>
            </div>
          </div>
        </div>

        {/* Marquee stats */}
        <div className="relative border-t border-ivory/15 bg-navy-ink/60 backdrop-blur">
          <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-ivory/10">
            {[
              ["30+", "Years in carbon trading"],
              ["4", "Continents served"],
              ["2024", "Year established in UAE"],
              ["20+", "Companies worked with"],
            ].map(([n, l]) => (
              <div key={l} className="py-8 px-4 md:px-8 text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl">{n}</div>
                <div className="mt-2 font-mono text-[0.68rem] tracking-[0.22em] uppercase text-ivory/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-28 md:py-36">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">— A House Note</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
              Carbon, moved with discipline.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Radiant Trading Co. was established in Dubai in 2024, built on
              three decades of experience in carbon trading in Turkey. The same
              partners who moved petroleum coke and thermal coal across the
              Mediterranean, Black Sea and Middle East now operate from the UAE,
              closer to the refineries, shipping lanes and counterparties that
              shape the global market.
            </p>
            <p>
              We are a private commodities house. We do not chase volume;
              we chase certainty. Every cargo is delivered on our own paper, to
              counterparties we know personally, with inspection at every load
              and discharge.
            </p>
            <div className="pt-6 flex items-center gap-4">
              <div className="font-display italic text-2xl">— Trust, built one cargo at a time</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x"><div className="rule" /></div>

      {/* PRODUCTS */}
      <section className="py-28 md:py-36">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow">— 01 / Commodities</div>
              <h2 className="mt-6 font-display text-4xl md:text-6xl">The Product Book</h2>
            </div>
            <Link to="/products" className="btn-ghost self-start">All specifications →</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <ProductCard
              img={petcoke}
              index="A."
              title="Petroleum Coke"
              specs={[
                ["Use", "Fuel for cement, power & industrial boilers"],
                ["Origins", "Refinery direct from established relationships"],
              ]}
              body="Fuel-grade and anode-grade petcoke sourced through long-term
                refinery relationships and delivered on firm contracts to
                industrial buyers who need reliable, repeat volumes."
            />
            <ProductCard
              img={plant}
              index="B."
              title="Thermal Coal"
              specs={[
                ["Use", "Energy for cement, brick & power producers"],
                ["Origins", "Major coal basins through mine-mouth partners"],
              ]}
              body="High-CV thermal coal for producers who depend on consistent
                quality and schedule. We handle Supramax, Panamax and Capesize
                parcels on CFR, CIF and FOB terms."
            />
          </div>
        </div>
      </section>

      {/* GLOBAL FLOW */}
      <section className="relative py-28 md:py-36 bg-navy-ink text-ivory overflow-hidden">
        <img
          src={ship}
          alt="Overhead view of bulk carrier at berth"
          width={1600}
          height={1000}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-ink via-navy-ink/70 to-transparent" />

        <div className="relative container-x">
          <div className="max-w-3xl">
            <div className="eyebrow text-ivory/60">— 02 / Reach</div>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
              From the Arabian Gulf<br />
              <span className="italic text-ivory/80">to markets across four continents.</span>
            </h2>
            <p className="mt-8 text-lg text-ivory/75 max-w-2xl leading-relaxed">
              We ship Supramax, Panamax and Capesize parcels FOB, CFR and CIF —
              handling chartering, inspection, insurance and letters of credit
              through our house desks in the Middle East, Europe and Asia.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-x-12 gap-y-14">
            {[
              ["Origination", "Long-term relationships with refineries and mine-mouth partners. We hold regular liftings — not spot allocations."],
              ["Chartering", "In-house shipbroking desk with time-chartered tonnage and long-standing owner relationships for voyage cargoes."],
              ["Structured Trade", "In-house letters of credit, prepayment facilities and multi-year off-take structures for tier-one industrial buyers."],
            ].map(([t, b], i) => (
              <div key={t} className="border-t border-ivory/20 pt-6">
                <div className="font-mono text-[0.7rem] tracking-[0.24em] text-ivory/50">0{i + 1}</div>
                <h3 className="mt-3 font-display text-2xl">{t}</h3>
                <p className="mt-4 text-ivory/70 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-28 md:py-36">
        <div className="container-x grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <img
              src={dubai}
              alt="Dubai financial district at blue hour"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="md:col-span-6 md:pl-6">
            <div className="eyebrow">— 03 / The House</div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
              A private house.<br />
              <span className="italic">Long-term counterparties only.</span>
            </h2>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              Radiant is a UAE-registered commodities company headquartered in
              Dubai. Our credit is supported by committed Gulf banking lines and
              our operations are independently audited. We accept new
              counterparties by referral and operate on the principle that every
              trade must be transparent, financeable and enforceable.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "UAE-registered commodities company",
                "Independent quality inspection at every load",
                "Letters of credit and structured trade support",
                "Counterparty screening on every trade",
              ].map((l) => (
                <li key={l} className="flex items-start gap-4 text-foreground/80">
                  <span className="mt-2 w-6 h-px bg-navy-ink" />
                  <span className="font-mono text-sm tracking-wider">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-ink text-ivory">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow text-ivory/60">— Open a Trade</div>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
              Every cargo begins<br />with a conversation.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/contact" className="btn-outline-light">Contact the Trade Desk →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProductCard({
  img, index, title, body, specs,
}: {
  img: string; index: string; title: string; body: string; specs: [string, string][];
}) {
  return (
    <article className="group">
      <div className="overflow-hidden bg-navy-ink">
        <img
          src={img}
          alt={title}
          width={1200}
          height={900}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-6 flex items-baseline gap-4">
        <span className="font-mono text-sm text-muted-foreground">{index}</span>
        <h3 className="font-display text-3xl md:text-4xl">{title}</h3>
      </div>
      <p className="mt-4 text-foreground/75 leading-relaxed max-w-lg">{body}</p>
      <dl className="mt-6 border-t border-border">
        {specs.map(([k, v]) => (
          <div key={k} className="grid grid-cols-3 gap-4 py-3 border-b border-border">
            <dt className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted-foreground">{k}</dt>
            <dd className="col-span-2 text-foreground/85">{v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
