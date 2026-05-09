import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logo from "@/assets/prolook-logo.jpeg";

const nav = [
  { to: "/", label: "Etusivu" },
  { to: "/palvelut", label: "Palvelut" },
  { to: "/galleria", label: "Galleria" },
  { to: "/yhteystiedot", label: "Yhteystiedot" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="ProLook Parturi-Kampaamo logo"
            className="h-10 w-10 rounded-md object-cover ring-1 ring-border"
          />
          <div className="leading-tight">
            <p className="font-display text-xl tracking-widest text-foreground">PROLOOK</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Parturi-Kampaamo · Porvoo
            </p>
          </div>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+358465234696"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition hover:scale-[1.02]"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">046 523 4696</span>
          <span className="sm:hidden">Soita</span>
        </a>
      </div>

      <div className="flex items-center justify-center gap-6 border-t border-border/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground md:hidden">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
