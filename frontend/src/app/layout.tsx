import type { Metadata } from "next";
import { ReactNode } from "react";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "CRM Startweb Bootcamp",
  description: "Landing page Next.js + backend Node para o Bootcamp CRM Startweb.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
