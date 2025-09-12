import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart } from 'lucide-react';

const wishlistItems = [
  {
    id: 'wish-1',
    title: 'Bouquet of Roses',
    description: 'A beautiful bouquet of her favorite long-stemmed red roses.',
    price: '$75',
  },
  {
    id: 'wish-2',
    title: 'Designer Handbag',
    description: "The one she's been dreaming about. Classic and elegant.",
    price: '$1,200',
  },
  {
    id: 'wish-3',
    title: 'A Romantic Getaway',
    description: 'A weekend trip to a cozy cabin or a beautiful city like Paris.',
    price: 'Priceless',
  },
  {
    id: 'wish-4',
    title: 'Luxury Spa Day',
    description: 'A full day of pampering with massages, facials, and relaxation.',
    price: '$350',
  },
];

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12">
        Zoella's Wishlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => {
          const image = PlaceHolderImages.find(p => p.id === item.id);
          return (
            <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {image && (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{item.title}</CardTitle>
                <CardDescription className="mt-2">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                 <p className="text-2xl font-bold text-primary">{item.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Make a Wish Come True
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
