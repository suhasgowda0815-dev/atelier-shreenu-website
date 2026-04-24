import type { Metadata } from "next";
import { serif, sans } from "@/styles/fonts";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
// @ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thevrindavanproject.com"),
  title: {
  default: "Atelier Shreenu — Architecture and Interior Design",
  template: "%s · Atelier Shreenu",
 },
  description:
    "Architecture and interior design studio based in Gurugram, specialising in residential, hospitality, and ecologically sensitive design across India. By Ranjeet & Shreenu Mukherjee.",
  keywords: [
    "architecture firm Gurugram",
    "interior designer Delhi NCR",
    "luxury farmhouse design India",
    "sustainable architect",
    "residential architect Gurgaon",
    "Ranjeet Mukherjee architect",
    "Shreenu Mukherjee interior designer",
    "The Vrindavan Project",
    "Atelier Shreenu",
  ],
  authors: [{ name: "The Vrindavan Project" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thevrindavanproject.com",
    siteName: "The Vrindavan Project",
    title: "The Vrindavan Project — Architecture and Interior Design",
    description:
      "Contextual, conscious and soulful design. Architecture and interiors rooted in place.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Vrindavan Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vrindavan Project",
    description:
      "Contextual, conscious and soulful design. Architecture and interiors rooted in place.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
        {/* Structured data: Architect / LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Architect", "LocalBusiness"],
              name: "The Vrindavan Project",
              alternateName: "Atelier Shreenu",
              url: "https://thevrindavanproject.com",
              telephone: "+91-95601-07193",
              email: "thevrindavanproject@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Celebrity Homes, Palam Vihar",
                addressLocality: "Gurugram",
                addressRegion: "Haryana",
                postalCode: "122017",
                addressCountry: "IN",
              },
              founder: [
                { "@type": "Person", name: "Ranjeet Mukherjee" },
                { "@type": "Person", name: "Shreenu Mukherjee" },
              ],
              sameAs: [
                "https://www.instagram.com/thevrindavanproject/",
                "https://www.facebook.com/The.Vrindavan.Project",
                "https://www.linkedin.com/company/the-vrindavan-project/",
                "https://www.youtube.com/@RanjeetMukherjeeArchitect",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
