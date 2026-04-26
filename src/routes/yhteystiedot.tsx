import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/yhteystiedot")({
  head: () => ({
    meta: [
      { title: "Yhteystiedot — ProLook Parturi-Kampaamo Porvoo" },
      {
        name: "description",
        content:
          "ProLook Parturi-Kampaamo, Rihkamatori 2A, 06100 Porvoo. Puh. 046 523 4696. Avoinna ma–la 9–18. Ei ajanvarausta.",
      },
      { property: "og:title", content: "Yhteystiedot — ProLook Porvoo" },
      {
        property: "og:description",
        content: "Löydä meidät: Rihkamatori 2A, 06100 Porvoo. Soita 046 523 4696.",
      },
    ],
  }),
  component: ContactPage,
});

const hours = [
  ["Maanantai", "9:00 – 18:00"],
  ["Tiistai", "9:00 – 18:00"],
  ["Keskiviikko", "9:00 – 18:00"],
  ["Torstai", "9:00 – 18:00"],
  ["Perjantai", "9:00 – 18:00"],
  ["Lauantai", "9:00 – 18:00"],
  ["Sunnuntai", "Suljettu"],
];

function ContactPage() {
  return (
    <SiteLayout>
      <section className="hex-grid border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <p className="font-display text-sm tracking-[0.4em] text-accent">YHTEYSTIEDOT</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
            Tule käymään
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Olemme Porvoon keskustassa, helposti löydettävissä. Ei ajanvarausta — kävele sisään.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <a
              href="https://maps.google.com/?q=Rihkamatori+2A,+06100+Porvoo"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-5 rounded-2xl border border-border/70 bg-card p-7 transition hover:border-accent/60"
            >
              <MapPin className="h-7 w-7 shrink-0 text-accent" />
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Osoite</p>
                <p className="mt-1 font-display text-2xl tracking-wider">Rihkamatori 2A</p>
                <p className="text-muted-foreground">06100 Porvoo</p>
                <p className="mt-2 inline-flex items-center gap-1 text-sm text-accent group-hover:underline">
                  <Navigation className="h-3.5 w-3.5" /> Avaa kartalla
                </p>
              </div>
            </a>

            <a
              href="tel:+358465234696"
              className="group flex items-start gap-5 rounded-2xl border border-border/70 bg-card p-7 transition hover:border-accent/60"
            >
              <Phone className="h-7 w-7 shrink-0 text-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Puhelin</p>
                <p className="mt-1 font-display text-2xl tracking-wider">046 523 4696</p>
                <p className="text-sm text-muted-foreground">Soita aukioloaikoina</p>
              </div>
            </a>

            <div className="flex items-start gap-5 rounded-2xl border border-border/70 bg-card p-7">
              <Clock className="h-7 w-7 shrink-0 text-accent" />
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Aukioloajat
                </p>
                <ul className="mt-3 divide-y divide-border/60">
                  {hours.map(([day, time]) => (
                    <li key={day} className="flex justify-between py-2 text-sm">
                      <span className="text-foreground">{day}</span>
                      <span className="text-muted-foreground">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
            <iframe
              title="ProLook Parturi sijainti kartalla"
              src="https://www.google.com/maps?q=Rihkamatori+2A,+06100+Porvoo&output=embed"
              className="h-full min-h-[480px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
