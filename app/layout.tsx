import type { Metadata } from "next";
import "../styles/base/_reset.scss";

export const metadata: Metadata = {
  title: "Biszku's Portfolio",
  description: "Biszku's portfolio website",
  keywords: ["Biszku", "biszku", "portfolio", 
    "web developer", "developer", "biszku programming", 
    "biszku developer", "biszku web developer"],

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
