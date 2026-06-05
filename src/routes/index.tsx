import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import interiorAsset from "@/assets/prolook-interior.jpeg.asset.json";
import { MapPin, Clock, Star, Scissors, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProLook Parturi-Kampaamo Porvoo — Hiustenleikkaus 20€" },
      {
        name: "description",
        content:
          "ProLook Parturi-Kampaamo Porvoon keskustassa, Rihkamatori A. Hiustenleikkaus 20€. Avoinna ma–la 9–18, ei ajanvarausta. Soita 046 523 4696.",
      },
      { property: "og:title", content: "ProLook Parturi-Kampaamo Porvoo" },
      {
        property: "og:description",
        content:
          "Modernia parturipalvelua Porvoossa. Hiusten leikkaus alkaen 20€. Ei ajanvarausta. Avoinna ma–la 9–18.",
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  {
    icon: Scissors,
    title: "Ammattitaitoa",
    body: "Tarkka leikkaus, klassiset fadet ja modernit tyylit kokeneilta partureilta.",
  },
  {
    icon: Users,
    title: "Ei ajanvarausta",
    body: "Tule sisään silloin kun sinulle sopii. Lyhyet jonot, nopea palvelu.",
  },
  {
    icon: Star,
    title: "4,5/5 Google",
    body: "178 arvostelua. Asiakkaat suosittelevat lämpimästi vuodesta toiseen.",
  },
];

const priceTeaser = [
  { name: "Hiustenleikkaus", price: "20€" },
  { name: "Eläkeläiset", price: "20€" },
  { name: "Lapset", price: "20€" },
  { name: "Naisten hiukset", price: "30€" },
  { name: "Parranajo", price: "10€" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={interiorAsset.url}
            alt="ProLook Parturin moderni sisustus hexagon-LED-valoilla Porvoossa"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 md:px-8 md:pb-24">
          <p className="font-display text-sm tracking-[0.4em] text-accent">
            PARTURI-KAMPAAMO · PORVOO
          </p>
          <h1 className="mt-4 font-display text-6xl leading-[0.95] tracking-tight text-foreground text-glow md:text-8xl lg:text-9xl">
            TERÄVÄ TYYLI.
            <br />
            <span className="text-accent">JOKA PÄIVÄ.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Tervetuloa uudistuneeseen ProLookiin — Porvoon keskustan luotetuin parturi
            jo 8 vuoden ajan. Ei ajanvarausta, ei kiirettä. Vain laadukasta jälkeä.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/palvelut"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-accent-foreground shadow-lg shadow-accent/30 transition hover:scale-[1.03]"
            >
              Katso hinnasto
            </Link>
            <a
              href="tel:+358465234696"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-foreground backdrop-blur transition hover:bg-card"
            >
              Soita 046 523 4696
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" /> Rihkamatori A, Porvoo
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" /> Ma–La 9:00–18:00
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-accent text-accent" /> 4,5/5 · 178 arvostelua
            </span>
          </div>
        </div>

        {/* Hex line accent */}
        <div className="absolute right-8 top-24 hidden h-32 w-32 rotate-12 border border-neon/40 neon-line lg:block"
          style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}
        />
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-px bg-border/60 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="bg-background p-10">
              <h.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-2xl tracking-wider">{h.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICE TEASER */}
      <section className="hex-grid">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
            <div>
              <p className="font-display text-sm tracking-[0.4em] text-accent">HINNASTO</p>
              <h2 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">
                Selkeät hinnat.
                <br />
                Ei yllätyksiä.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Parturipalvelut koko perheelle — lapsista eläkeläisiin. Käteinen ja kortti käy.
              </p>
              <Link
                to="/palvelut"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent hover:text-foreground"
              >
                Koko hinnasto →
              </Link>
            </div>

            <div className="divide-y divide-border/70 rounded-xl border border-border/70 bg-card/60 backdrop-blur">
              {priceTeaser.map((p) => (
                <div key={p.name} className="flex items-baseline justify-between gap-4 px-6 py-5">
                  <span className="text-base text-foreground md:text-lg">{p.name}</span>
                  <span className="font-display text-2xl tracking-wider text-accent md:text-3xl">
                    {p.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-card">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center md:px-8 md:py-28">
          <p className="font-display text-sm tracking-[0.4em] text-accent">TULE KÄYMÄÄN</p>
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            Ei ajanvarausta — vain käveltävä sisään.
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Olemme avoinna ma–la 9–18. Löydät meidät Porvoon keskustasta osoitteesta
            Rihkamatori A.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.google.com/?q=Rihkamatori+A,+06100+Porvoo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition hover:scale-[1.03]"
            >
              Reittiohjeet
            </a>
            <Link
              to="/yhteystiedot"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:bg-background"
            >
              Yhteystiedot
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
