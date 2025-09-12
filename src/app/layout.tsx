import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "A Love Letter to Princess Zoella",
  description: 'Every pixel crafted with love, for the one and only Princess Zoella.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body>
        <Image
          src="/bg.jpg"
          alt="Enchanted background"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-princess-pink/20 via-soft-lavender/30 to-rose-blush/40 -z-10" />
        <div className="antialiased">
          {children}
        </div>
        <footer className="text-center p-4 text-princess-pink relative z-10">
          Made by Vishwa Vidarshana with love for Zoella 💖
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
