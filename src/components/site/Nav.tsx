import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoDark from "@/assets/radiant-logo-dark.png.asset.json";
import logoLight from "@/assets/radiant-logo-light.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/operations", label: "Operations" },
  { to: "/contact", label: "Contact" },
];

export function Nav({ variant = "light" }: { variant?: "light" | "over-dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overDark = variant === "over-dark" && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : overDark
            ? "bg-transparent"
            : "bg-background border-b border-border"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link
          to="/"
          className={`flex items-center gap-3 ${overDark ? "text-ivory" : "text-foreground"}`}
        >
          <img
            src={overDark ? logoDark.url : logoLight.url}
            alt="Radiant Trading"
            className="h-10 w-auto"
          />
          <span className="sr-only">Radiant Trading</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[0.78rem] tracking-[0.16em] uppercase transition-opacity hover:opacity-100 ${
                overDark ? "text-ivory/80 hover:text-ivory" : "text-foreground/70 hover:text-foreground"
              }`}
              activeProps={{ className: overDark ? "text-ivory" : "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden md:inline-flex items-center gap-2 text-[0.75rem] tracking-[0.18em] uppercase px-5 py-2.5 border transition-colors ${
            overDark
              ? "border-ivory/40 text-ivory hover:bg-ivory hover:text-navy-ink"
              : "border-foreground text-foreground hover:bg-foreground hover:text-background"
          }`}
        >
          Request Quote
        </Link>

        <button
          className={`md:hidden ${overDark ? "text-ivory" : "text-foreground"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className="h-px bg-current" />
            <span className="h-px bg-current" />
            <span className="h-px bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm tracking-[0.16em] uppercase text-foreground/80"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
