import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-3xl tracking-widest">PROLOOK</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Parturi-Kampaamo Porvoon sydämessä. Ammattitaitoista palvelua ilman ajanvarausta.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-display text-lg tracking-widest text-accent">YHTEYSTIEDOT</p>
          <p className="flex items-start gap-3 text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 text-accent" />
            Rihkamatori 2A, 06100 Porvoo
          </p>
          <a
            href="tel:+358465234696"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-accent" />
            046 523 4696
          </a>
          <p className="flex items-center gap-3 text-muted-foreground">
            <Clock className="h-4 w-4 text-accent" />
            Ma–La 9:00–18:00
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-display text-lg tracking-widest text-accent">SIVUKARTTA</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Etusivu</Link></li>
            <li><Link to="/palvelut" className="hover:text-foreground">Palvelut & Hinnasto</Link></li>
            <li><Link to="/yhteystiedot" className="hover:text-foreground">Yhteystiedot</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-5 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground md:px-8">
        © {new Date().getFullYear()} ProLook Parturi-Kampaamo
      </div>
    </footer>
  );
}
