import type { Metadata } from "next";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ventario Engineering | Mechanical, Electrical & Plumbing Contractors",
  description: "Ventario Engineering is committed to delivering practical engineering solutions that meet client needs while adhering to technical standards and best practices. Our team combines field experience with strong technical knowledge to support projects of varying scale and complexity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
