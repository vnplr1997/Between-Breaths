import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: 'Between Breaths',
  description: 'A minimal philosophical journey in five chapters.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className="bg-void text-ash antialiased">{children}</body>
    </html>
  );
}
