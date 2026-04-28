import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ProLook Parturi-Kampaamo Porvoo" },
      {
        name: "description",
        content:
          "Moderni parturi Porvoon keskustassa. Hiusten leikkaus 25€. Avoinna ma–la 9–18, ei ajanvarausta.",
      },
      { name: "author", content: "ProLook Parturi-Kampaamo" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "ProLook Parturi-Kampaamo Porvoo" },
      { name: "twitter:title", content: "ProLook Parturi-Kampaamo Porvoo" },
      { name: "description", content: "ProLook Barber Booster is a website for a barber shop that showcases services, pricing, and location." },
      { property: "og:description", content: "ProLook Barber Booster is a website for a barber shop that showcases services, pricing, and location." },
      { name: "twitter:description", content: "ProLook Barber Booster is a website for a barber shop that showcases services, pricing, and location." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6f3f0419-a1da-4251-a17f-4f0947a6e909/id-preview-424c55f7--03a472d2-a079-4a64-8303-1cf298a09e92.lovable.app-1777371603965.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6f3f0419-a1da-4251-a17f-4f0947a6e909/id-preview-424c55f7--03a472d2-a079-4a64-8303-1cf298a09e92.lovable.app-1777371603965.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
