import type { Metadata } from "next";
import "../styles/base/_reset.scss";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Biszku's page",
  description: "Biszku's portfolio page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
