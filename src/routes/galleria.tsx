import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import interior from "@/assets/prolook-interior.jpeg";

export const Route = createFileRoute("/galleria")({
  head: () => ({
    meta: [
      { title: "Galleria — ProLook Parturi-Kampaamo Porvoo" },
      {
        name: "description",
        content:
          "Tutustu ProLook Parturi-Kampaamoon kuvien kautta. Moderni sisustus hexagon-LED-valoilla Porvoon keskustassa.",
      },
      { property: "og:title", content: "Galleria — ProLook Porvoo" },
      {
        property: "og:description",
        content: "Moderni parturi Porvoon keskustassa. Tunnelma kuvina.",
      },
      { property: "og:image", content: interior },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="hex-grid border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <p className="font-display text-sm tracking-[0.4em] text-accent">GALLERIA</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
            Tunnelma & tyyli
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Moderni sisustus, lämmin tunnelma ja hexagon-LED-valot — astu sisään ProLookiin.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <figure className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl border border-border/70">
            <img
              src={interior}
              alt="ProLook Parturin sisätilat hexagon-LED-valoilla"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-border/70">
            <img
              src={interior}
              alt="ProLook parturin tuolit ja peilit"
              className="h-full w-full object-cover object-left transition duration-700 hover:scale-105"
              style={{ aspectRatio: "1 / 1" }}
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-border/70">
            <img
              src={interior}
              alt="ProLook parturin odotustila"
              className="h-full w-full object-cover object-right transition duration-700 hover:scale-105"
              style={{ aspectRatio: "1 / 1" }}
            />
          </figure>
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl border border-border/70 bg-card p-10 md:grid-cols-3">
          <div>
            <p className="font-display text-5xl tracking-wider text-accent">4,5</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Google · 178 arvostelua
            </p>
          </div>
          <blockquote className="text-sm text-muted-foreground md:col-span-2">
            <p className="text-foreground">"Kaupungin paras ❤️"</p>
            <p className="mt-2">
              "Olen käyttänyt tätä liikettä jo 2 vuotta. Ammattitaitoinen henkilökunta!
              Suosittelen todella lämpimästi."
            </p>
            <footer className="mt-3 text-xs uppercase tracking-widest">— A. L., Google</footer>
          </blockquote>
        </div>
      </section>
    </SiteLayout>
  );
}
