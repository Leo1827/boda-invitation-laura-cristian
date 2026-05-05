// src/app/layout.tsx

import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boda Laura & Cristian",
  description: "Invitación digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-arena text-gray-800">
        {children}
      </body>
    </html>
  );
}