import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-navy-ink text-ivory">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-block w-10 h-10 border border-ivory/60 relative">
                <span className="absolute inset-1 border border-ivory/40" />
              </span>
              <span className="font-display text-2xl">Radiant Trading Co.</span>
            </div>
            <p className="mt-6 max-w-md text-ivory/70 leading-relaxed">
              A private commodities house headquartered in the United Arab Emirates,
              trading petroleum coke and thermal coal to industrial buyers across
              four continents since 2024. Built on three decades of experience in Turkey.
            </p>
            <div className="mt-8 hairline opacity-30 max-w-md" />
            <div className="mt-6 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-ivory/50">
              DMCC · Jumeirah Lakes Towers · Dubai · UAE
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-ivory/50">Company</div>
            <ul className="mt-5 space-y-3 text-ivory/80">
              <li><Link to="/about" className="hover:text-ivory">About</Link></li>
              <li><Link to="/operations" className="hover:text-ivory">Operations</Link></li>
              <li><Link to="/products" className="hover:text-ivory">Products</Link></li>
              <li><Link to="/contact" className="hover:text-ivory">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-ivory/50">Head Office</div>
            <address className="not-italic mt-5 text-ivory/80 leading-relaxed">
              Level 27, Cluster W<br />
              Jumeirah Lakes Towers<br />
              Dubai, United Arab Emirates
            </address>
            <div className="mt-6 space-y-1 text-ivory/80 font-mono text-sm">
              <div>T &nbsp;+971 4 000 0000</div>
              <div>E &nbsp;trade@radianttradingco.ae</div>
            </div>
          </div>
        </div>

          <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.7rem] tracking-[0.22em] uppercase text-ivory/50 font-mono">
          <div>© {new Date().getFullYear()} Radiant Trading Co. LLC</div>
          <div>Est. MMXXIV · Dubai</div>
        </div>
      </div>
    </footer>
  );
}
