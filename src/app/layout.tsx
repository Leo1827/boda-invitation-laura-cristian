// src/app/layout.tsx
import { Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";
import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

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
      <body className={cormorant.className + "italic"}>
        
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}