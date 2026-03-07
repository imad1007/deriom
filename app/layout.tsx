import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/components/seo/schema";
import "@/app/globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "Streaming"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
