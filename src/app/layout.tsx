import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const BASE_URL = siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Oussema Bouchahwa · Full-stack developer & video creator",
    template: "%s · Oussema Bouchahwa",
  },
  description:
    "Full-stack developer and software engineering student based in Sfax, Tunisia. I build software & cut films.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Oussema Bouchahwa · Full-stack developer & video creator",
    description:
      "Full-stack developer and software engineering student based in Sfax, Tunisia. I build software & cut films.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oussema Bouchahwa · Full-stack developer & video creator",
    description:
      "Full-stack developer and software engineering student based in Sfax, Tunisia. I build software & cut films.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Full-stack developer & video creator",
  url: BASE_URL,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sfax",
    addressCountry: "TN",
  },
  sameAs: [profile.linkedin, profile.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
