import { FlowerCard } from '@/components/flower-card';
import { getPopularFlowers } from '@/lib/flowers';
import { Flower2 } from 'lucide-react';

export default function Home() {
  const popularFlowers = getPopularFlowers();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center py-16 md:py-24 rounded-lg bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <Flower2 className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-foreground">
            Floriography Explored
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Discover the Language of Flowers
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center font-headline mb-8">Popular Flowers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularFlowers.map((flower) => (
            <FlowerCard key={flower.slug} flower={flower} />
          ))}
        </div>
      </section>
    </div>
  );
}
