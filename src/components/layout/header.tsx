import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold font-headline text-foreground">
            Zoella's Zone
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/wishlist">Wishlist</Link>
          </Button>
        </nav>
        {/* A mobile menu trigger could be added here for smaller screens */}
      </div>
    </header>
  );
}
