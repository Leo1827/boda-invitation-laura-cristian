// src/app/layout.tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Pinyon_Script, Playfair_Display, Cinzel_Decorative } from 'next/font/google'; // Importamos la nueva fuente Cinzel_Decorative
import '@/styles/globals.css';
import PageTransition from '@/components/PageTransition';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pinyon',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-playfair',
  display: 'swap',
});

// Nueva fuente decorativa para los nombres
const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700'], // Cinzel Decorative tiene pesos, podemos usar 400 y 700
  subsets: ['latin'],
  variable: '--font-cinzel-decorative', // Definimos la variable CSS
  display: 'swap',
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
    // Agregamos la nueva variable cinzelDecorative.variable a la clase del html
    <html lang="es" className={`${cormorant.variable} ${pinyonScript.variable} ${playfair.variable} ${cinzelDecorative.variable}`}>
      <body className="antialiased font-cormorant"> {/* Opcional: establecer cormorant como fuente predeterminada */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}