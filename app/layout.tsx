import type { Metadata, Viewport } from "next";
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
        url: "/fowrix-log-final.png",
        width: 1200,
        height: 1200,
        alt: "Flowrix Solutions logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/fowrix-log-final.png"],
  },
  icons: {
    icon: [
      {
        url: "/flowrix-logo-icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/flowrix-logo-icon.png",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "ERP accounting software",
    "ERP for growing businesses",
    "accounting software",
    "inventory management system",
    "HR payroll software",
    "CRM software",
    "business automation",
    "ERP demo",
    "ERP implementation",
    "custom software development",
  ],
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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
