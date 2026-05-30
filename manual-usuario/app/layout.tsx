import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manual de Usuario - Hoja de Cálculo",
  description: "Manual de usuario interactivo para el programa Hoja de Cálculo en Python",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
