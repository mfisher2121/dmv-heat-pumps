import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DMV Heat Pumps | Maryland Heat Pump Installation Guide",
  description: "Expert guidance for Maryland homeowners navigating heat pump installation, ZEHES mandate compliance, and electrification rebates in the DMV area.",
  keywords: "Maryland heat pumps, DMV HVAC, ZEHES mandate, heat pump installation, Maryland electrification, heat pump contractors",
  openGraph: {
    title: "DMV Heat Pumps | Maryland Installation Guide",
    description: "Expert guidance for heat pump installation in Maryland",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
