import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maplecub.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MapleCub — Family life in Canada, in one place",
    template: "%s | MapleCub",
  },
  description:
    "MapleCub is the Canadian home for everything family — find licensed daycare, discover kid-friendly events, and plan weekends across every province. Join the waitlist.",
  keywords: [
    "Canada daycare",
    "daycare search Canada",
    "family events Canada",
    "kids activities Canada",
    "licensed daycare",
    "childcare Canada",
    "$10 a day daycare",
    "daycare waitlist",
    "things to do with kids Canada",
    "MapleCub",
  ],
  authors: [{ name: "MapleCub" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "MapleCub — Family life in Canada, in one place",
    description:
      "Find licensed daycare, discover kid-friendly events, and plan weekends across Canada. Be first when we launch in your province.",
    url: siteUrl,
    siteName: "MapleCub",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MapleCub — Family life in Canada, in one place",
    description:
      "Find licensed daycare, discover kid-friendly events, and plan weekends — across Canada.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MapleCub",
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description:
      "MapleCub helps Canadian families find licensed daycare and discover kid-friendly events across every province and territory.",
    areaServed: { "@type": "Country", name: "Canada" },
  };

  return (
    <html lang="en-CA">
      <head>
        {/* Tabler icon webfont — used for inline ti-* icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.11.0/dist/tabler-icons.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
