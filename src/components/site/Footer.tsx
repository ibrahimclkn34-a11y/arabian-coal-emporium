import { Link } from "@tanstack/react-router";
import { RadiantLogo } from "@/components/site/RadiantLogo";
export function Footer() {
  return (
    <footer className="bg-navy-ink text-ivory">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
                                          <RadiantLogo className="h-14 w-auto" />
              <span className="sr-only">Radiant Trading</span>
            </div>
            <p className="mt-6 max-w-md text-ivory/70 leading-relaxed">
              A private commodities house headquartered in the United Arab Emirates,
              trading petroleum coke and thermal coal to power plants and cement
              factories across the Middle East, Africa, Asia and Europe. Built on
              three decades of experience in Turkey.
            </p>
            <div className="mt-8 hairline opacity-30 max-w-md" />
            <div className="mt-6 font-mono text-[0.7rem] tracking-[0.22em] uppercase text-ivory/50">
              Dubai · United Arab Emirates
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
              IFZA Business Park, DDP 50404<br />
              Dubai, United Arab Emirates
            </address>
            <div className="mt-6 space-y-1 text-ivory/80 font-mono text-sm">
              <div>T &nbsp;+971 58 576 3434</div>
              <div>E &nbsp;radiant@radiant-trading.co</div>
            </div>
          </div>
        </div>

          <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.7rem] tracking-[0.22em] uppercase text-ivory/50 font-mono">
          <div>© {new Date().getFullYear()} Radiant Trading Co.</div>
          <div>Est. MMXXIV · Dubai</div>
        </div>
      </div>
    </footer>
  );
}
