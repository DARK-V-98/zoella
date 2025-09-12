import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12">
        About My Dearest Zoella
      </h1>
      <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
        <div className="md:col-span-2">
          <Card className="bg-secondary shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Her Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-foreground/80">
              <p>
                Zoella is a symphony of laughter and kindness, a vibrant soul who paints the world in brighter colors. She finds joy in the simplest moments - the warmth of a morning coffee, the scent of rain on pavement, the comforting weight of a good book.
              </p>
              <p>
                With a heart full of empathy and a spirit of adventure, she navigates life with grace and courage. Her passion is infectious, her dreams are as vast as the night sky, and her love is a gentle, guiding light.
              </p>
              <p>
                This space is a small tribute to her immense world, a collection of moments and dreams that make her the incredible person she is.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-3xl font-headline font-bold mb-6 text-center md:text-left">Gallery of Moments</h2>
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative aspect-[3/4] rounded-lg overflow-hidden group shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  data-ai-hint={image.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="p-4 text-white text-sm font-semibold">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
