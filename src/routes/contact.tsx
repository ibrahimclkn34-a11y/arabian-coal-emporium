import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Radiant Trading Co." },
      { name: "description", content: "Reach the Radiant Trading Co. trade desk in Dubai for firm offers, quotes and counterparty enquiries." },
      { property: "og:title", content: "Contact — Radiant Trading Co." },
      { property: "og:description", content: "Reach the Radiant Trading Co. trade desk in Dubai for firm offers, quotes and counterparty enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <Nav />
      <main className="pt-32">
        <section className="container-x py-16 md:py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="eyebrow">— Trade Desk</div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.02]">
              Open a<br /><span className="italic">conversation.</span>
            </h1>
            <p className="mt-8 text-foreground/75 leading-relaxed max-w-md">
              For firm offers, indications and counterparty onboarding,
              write to the trade desk directly. We respond within one working
              day, Gulf Standard Time.
            </p>

            <div className="mt-14 space-y-8">
              <Field label="Head Office" value={<>Level 27, Cluster W<br />Jumeirah Lakes Towers<br />Dubai, United Arab Emirates</>} />
              <Field label="Trade Desk" value="trade@radianttradingco.ae" mono />
              <Field label="Chartering" value="chartering@radianttradingco.ae" mono />
              <Field label="Telephone" value="+971 4 000 0000" mono />
              <Field label="Hours" value="Sun – Thu · 08:00 – 18:00 GST" mono />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="bg-navy-ink text-ivory p-10 md:p-14">
              {sent ? (
                <div className="min-h-[24rem] flex flex-col justify-center">
                  <div className="eyebrow text-ivory/60">— Received</div>
                  <h2 className="mt-6 font-display text-4xl">Thank you.</h2>
                  <p className="mt-4 text-ivory/75 max-w-md">
                    A partner will be in touch within one working day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-6"
                >
                  <div className="eyebrow text-ivory/60">— Enquiry</div>
                  <h2 className="font-display text-3xl md:text-4xl">Request a firm offer</h2>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <Input name="name" label="Full name" />
                    <Input name="company" label="Company" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="email" type="email" label="Email" />
                    <Input name="country" label="Country" />
                  </div>
                  <Select name="commodity" label="Commodity" options={["Petroleum Coke — Fuel Grade", "Petroleum Coke — Anode Grade", "Thermal Coal — RB1 / RB2", "Thermal Coal — Indonesian", "Other"]} />
                  <Input name="volume" label="Indicative volume (MT / month)" />
                  <div>
                    <label className="block font-mono text-[0.7rem] tracking-[0.2em] uppercase text-ivory/60 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-ivory/30 focus:border-ivory outline-none py-2 text-ivory placeholder:text-ivory/30"
                    />
                  </div>
                  <button type="submit" className="btn-primary bg-ivory text-navy-ink hover:bg-ivory/90 mt-4">
                    Send enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, value, mono }: { label: string; value: React.ReactNode; mono?: boolean }) {
  return (
    <div className="border-t border-border pt-4">
      <div className="font-mono text-[0.68rem] tracking-[0.22em] uppercase text-muted-foreground">{label}</div>
      <div className={`mt-2 ${mono ? "font-mono text-sm" : ""} text-foreground/85 leading-relaxed`}>{value}</div>
    </div>
  );
}

function Input({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-[0.7rem] tracking-[0.2em] uppercase text-ivory/60 mb-2">{label}</label>
      <input
        id={name} name={name} type={type}
        className="w-full bg-transparent border-b border-ivory/30 focus:border-ivory outline-none py-2 text-ivory"
      />
    </div>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-[0.7rem] tracking-[0.2em] uppercase text-ivory/60 mb-2">{label}</label>
      <select
        id={name} name={name}
        className="w-full bg-transparent border-b border-ivory/30 focus:border-ivory outline-none py-2 text-ivory [&>option]:bg-navy-ink"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
