import type { Metadata } from "next";
import "../styles/base/_reset.scss";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
