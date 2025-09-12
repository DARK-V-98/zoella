import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

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
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
