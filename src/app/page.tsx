import { LoveQuoteGenerator } from '@/components/love-quote-generator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-zoella');

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center mb-12 md:mb-20">
        <div className="relative w-full max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
          {heroImage && (
             <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
           <div className="absolute bottom-0 left-0 p-8">
             <h1 className="text-4xl md:text-6xl font-headline font-bold text-white drop-shadow-lg">
              Welcome to Zoella's Zone
            </h1>
            <p className="mt-2 text-lg md:text-xl text-white/90 drop-shadow-md">
              A little corner of the internet dedicated to my everything.
            </p>
           </div>
        </div>

        <LoveQuoteGenerator />
      </section>
    </div>
  );
}
