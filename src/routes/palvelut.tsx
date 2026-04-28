import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/palvelut")({
  head: () => ({
    meta: [
      { title: "Palvelut & Hinnasto — ProLook Parturi-Kampaamo Porvoo" },
      {
        name: "description",
        content:
          "ProLookin hinnasto: Hiustenleikkaus 20€, eläkeläiset 20€, lapset 20€, naisten hiukset 30€, parranajo 10€. Porvoo, Rihkamatori 2A.",
      },
      { property: "og:title", content: "Palvelut & Hinnasto — ProLook Porvoo" },
      {
        property: "og:description",
        content:
          "Selkeät hinnat parturipalveluille koko perheelle. Ei ajanvarausta. Avoinna ma–la 9–18.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    fi: "Hiustenleikkaus",
    sv: "Hårklippning",
    desc: "Klassinen tai moderni leikkaus, sisältää sekä koneajon että saksileikkauksen.",
    price: "20€",
  },
  {
    fi: "Eläkeläiset",
    sv: "Pensionärer",
    desc: "Laadukas leikkaus rauhallisessa tahdissa.",
    price: "20€",
  },
  {
    fi: "Lapset alle 12v",
    sv: "Barn under 12 år",
    desc: "Reipas ja ystävällinen palvelu lapsiasiakkaille.",
    price: "20€",
  },
  {
    fi: "Naisten hiukset",
    sv: "Dam hårklippning",
    desc: "Naisten leikkaus pesulla ja muotoilulla, omaan tyyliisi sopivasti.",
    price: "30€",
  },
  {
    fi: "Miesten pitkät hiukset",
    sv: "Långt hår män",
    desc: "Pidempien miesten hiusten leikkaus ja muotoilu.",
    price: "30€",
  },
  {
    fi: "Koneajo (samalla mitalla)",
    sv: "Klippning med maskin",
    desc: "Nopea koneajo yhdellä mitalla läpi.",
    price: "15€",
  },
  {
    fi: "Parran muotoilu",
    sv: "Skäggformning",
    desc: "Parran muotoilu ja siistiminen.",
    price: "alk. 15€",
  },
  {
    fi: "Parranajo",
    sv: "Rakning",
    desc: "Perinteinen parranajo.",
    price: "10€",
  },
  {
    fi: "Hiusten pesu",
    sv: "Hårtvätt",
    desc: "Hiusten pesu.",
    price: "5€",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="hex-grid border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
          <p className="font-display text-sm tracking-[0.4em] text-accent">PALVELUT</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
            Hinnasto
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Selkeät hinnat parturipalveluille koko perheelle. Maksu käteisellä tai kortilla.
            Ei ajanvarausta — kävele sisään.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
        <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
          {services.map((s, i) => (
            <div
              key={s.fi}
              className={`flex flex-col gap-3 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10 ${
                i !== 0 ? "border-t border-border/70" : ""
              }`}
            >
              <div className="flex-1">
                <p className="font-display text-2xl tracking-wider text-foreground md:text-3xl">
                  {s.fi}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
                  {s.sv}
                </p>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <div className="font-display text-4xl tracking-wider text-accent md:text-5xl">
                {s.price}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Hinnat saattavat vaihdella hiusten pituuden ja työn keston mukaan.
        </p>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center md:px-8">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Valmis uuteen tyyliin?
          </h2>
          <p className="max-w-lg text-muted-foreground">
            Tule käymään tai soita lisätietoja. Olemme avoinna ma–la 9–18.
          </p>
          <a
            href="tel:+358465234696"
            className="rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition hover:scale-[1.03]"
          >
            Soita 046 523 4696
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
