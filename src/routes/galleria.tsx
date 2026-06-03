import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Star } from "lucide-react";
import g2 from "@/assets/gallery-2.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import g5 from "@/assets/gallery-5.jpeg";
import before1Asset from "@/assets/before-1.jpeg.asset.json";
import after1Asset from "@/assets/after-1.jpeg.asset.json";
import before2Asset from "@/assets/before-2.jpeg.asset.json";
import after2Asset from "@/assets/after-2.jpeg.asset.json";
import before3Asset from "@/assets/before-3.jpeg.asset.json";
import after3Asset from "@/assets/after-3.jpeg.asset.json";
import video1Asset from "@/assets/gallery-1.mp4.asset.json";
import video1PosterAsset from "@/assets/gallery-1-poster.jpg.asset.json";
import video2Asset from "@/assets/gallery-2.mov.asset.json";
import video3Asset from "@/assets/gallery-3.mov.asset.json";

const before1 = before1Asset.url;
const after1 = after1Asset.url;
const before2 = before2Asset.url;
const after2 = after2Asset.url;

export const Route = createFileRoute("/galleria")({
  head: () => ({
    meta: [
      { title: "Galleria — ProLook Parturi-Kampaamo Porvoo" },
      {
        name: "description",
        content:
          "Katso esimerkkejä ProLook Parturi-Kampaamon töistä Porvoossa: fadet, modernit leikkaukset ja klassiset tyylit.",
      },
      { property: "og:title", content: "ProLook Galleria — työnäytteitä Porvoosta" },
      {
        property: "og:description",
        content: "Tarkkaa jälkeä ja modernia tyyliä — katso parturin työnäytteet.",
      },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: g2, alt: "Skin fade ja slick back -tyyli — ProLook Porvoo", caption: "Skin fade & slick back" },
  { src: g3, alt: "Low taper -leikkaus — ProLook Porvoo", caption: "Low taper" },
  { src: g4, alt: "Taper fade ja design line -leikkaus — ProLook Porvoo", caption: "Taper fade + line" },
  { src: g5, alt: "Low fade tummille hiuksille — ProLook Porvoo", caption: "Low fade" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <p className="font-display text-sm tracking-[0.4em] text-accent">GALLERIA</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
            Tarkkaa jälkeä.
            <br />
            <span className="text-accent">Joka kerta.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Pieni otos ProLookin viimeaikaisista töistä — fadet, tekstuuriset leikkaukset
            ja klassiset tyylit koko perheelle.
          </p>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="font-display text-sm tracking-[0.4em] text-accent">VIDEO</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
                Katso meidät työn touhussa.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Pieni välähdys ProLookin tunnelmasta ja kädenjäljestä — Porvoon
                keskustasta, Rihkamatori A.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-accent/10">
                <video
                  src={video1Asset.url}
                  poster={video1PosterAsset.url}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-[9/16] h-auto w-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-accent/10">
                <video
                  src={video2Asset.url}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-[9/16] h-auto w-full object-cover"
                />
                <span className="pointer-events-none absolute bottom-3 right-3 font-display text-xs uppercase tracking-[0.3em] text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  ProLook
                </span>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-accent/10">
                <video
                  src={video3Asset.url}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-[9/16] h-auto w-full object-cover"
                />
                <span className="pointer-events-none absolute bottom-3 right-3 font-display text-xs uppercase tracking-[0.3em] text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  ProLook
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <p className="font-display text-sm tracking-[0.4em] text-accent">ENNEN & JÄLKEEN</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            Muutos tuolissa.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure className="relative overflow-hidden rounded-xl border border-border/60 bg-card">
              <img
                src={before1}
                alt="Ennen leikkausta — ProLook Porvoo"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <figcaption className="absolute left-4 top-4 rounded-full bg-background/80 px-4 py-1.5 font-display text-xs uppercase tracking-[0.3em] text-foreground backdrop-blur">
                Ennen
              </figcaption>
              <span className="absolute bottom-4 right-4 text-xs uppercase tracking-[0.2em] text-accent">
                ProLook
              </span>
            </figure>
            <figure className="relative overflow-hidden rounded-xl border border-border/60 bg-card">
              <img
                src={after1}
                alt="Jälkeen leikkauksen — ProLook Porvoo"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <figcaption className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1.5 font-display text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Jälkeen
              </figcaption>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent px-4 pb-4 pt-12">
                <span className="font-display text-sm tracking-widest text-foreground">
                  Klassinen hiusten ja parran muotoilu
                </span>
              </div>
              <span className="absolute bottom-4 right-4 text-xs uppercase tracking-[0.2em] text-accent">
                ProLook
              </span>
            </figure>
            <figure className="relative overflow-hidden rounded-xl border border-border/60 bg-card">
              <img
                src={before2}
                alt="Ennen leikkausta — pitkät hiukset ProLook Porvoo"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <figcaption className="absolute left-4 top-4 rounded-full bg-background/80 px-4 py-1.5 font-display text-xs uppercase tracking-[0.3em] text-foreground backdrop-blur">
                Ennen
              </figcaption>
              <span className="absolute bottom-4 right-4 text-xs uppercase tracking-[0.2em] text-accent">
                ProLook
              </span>
            </figure>
            <figure className="relative overflow-hidden rounded-xl border border-border/60 bg-card">
              <img
                src={after2}
                alt="Jälkeen leikkauksen — siisti sivujakaus ProLook Porvoo"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <figcaption className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1.5 font-display text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Jälkeen
              </figcaption>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent px-4 pb-4 pt-12">
                <span className="font-display text-sm tracking-widest text-foreground">
                  Sivujakaus & siisti taper
                </span>
              </div>
              <span className="absolute bottom-4 right-4 text-xs uppercase tracking-[0.2em] text-accent">
                ProLook
              </span>
            </figure>
            <figure className="relative overflow-hidden rounded-xl border border-border/60 bg-card">
              <img
                src={before3Asset.url}
                alt="Ennen leikkausta — pitkät kiharat ProLook Porvoo"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <figcaption className="absolute left-4 top-4 rounded-full bg-background/80 px-4 py-1.5 font-display text-xs uppercase tracking-[0.3em] text-foreground backdrop-blur">
                Ennen
              </figcaption>
              <span className="absolute bottom-4 right-4 text-xs uppercase tracking-[0.2em] text-accent">
                ProLook
              </span>
            </figure>
            <figure className="relative overflow-hidden rounded-xl border border-border/60 bg-card">
              <img
                src={after3Asset.url}
                alt="Jälkeen leikkauksen — klassinen sivujakaus ProLook Porvoo"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <figcaption className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1.5 font-display text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Jälkeen
              </figcaption>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent px-4 pb-4 pt-12">
                <span className="font-display text-sm tracking-widest text-foreground">
                  Klassinen sivujakaus & siisti viimeistely
                </span>
              </div>
              <span className="absolute bottom-4 right-4 text-xs uppercase tracking-[0.2em] text-accent">
                ProLook
              </span>
            </figure>
          </div>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="hex-grid">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {items.map((item, i) => (
              <figure
                key={i}
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-card break-inside-avoid"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/95 via-background/60 to-transparent px-4 pb-4 pt-12 text-sm">
                  <span className="font-display tracking-widest text-foreground">
                    {item.caption}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">
                    ProLook
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-card">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center md:px-8 md:py-24">
          <Star className="h-8 w-8 fill-accent text-accent" />
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Haluatko oman tyylisi?
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Tule sisään — ei ajanvarausta. Avoinna ma–la 9–18, Rihkamatori A.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+358465234696"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition hover:scale-[1.03]"
            >
              Soita 046 523 4696
            </a>
            <Link
              to="/palvelut"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:bg-background"
            >
              Hinnasto
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
