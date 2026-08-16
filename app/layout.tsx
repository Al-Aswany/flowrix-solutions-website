import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/flowrix-logo-icon1.png",
        width: 512,
        height: 512,
        alt: "Flowrix Solutions logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/flowrix-logo-icon1.png"],
  },
  icons: {
    icon: [
      {
        url: "/flowrix-logo-icon1.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/flowrix-logo-icon1.png",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "Dg59kLKqPhxZxAtHwzlGZYaqTidnw3pK0qqOmOV6yPM",
  },
};

export const viewport: Viewport = {
  themeColor: "#07110f",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd()} />
        {children}
      </body>
    </html>
  );
}
