import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Size on each side of a mid',
  description: 'Split a fixture book around a mid price. Tiers are labels, not Alcor pools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
