import { FlowerCard } from '@/components/flower-card';
import { getFlowersByOccasion, getAllOccasions } from '@/lib/flowers';
import type { Occasion } from '@/types';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type OccasionPageProps = {
  params: {
    occasion: string;
  };
};

// Generate static paths for all occasions
export async function generateStaticParams() {
  const occasions = getAllOccasions();
  return occasions.map(occasion => ({
    occasion: occasion.slug,
  }));
}

export default function OccasionPage({ params }: OccasionPageProps) {
  const occasionSlug = params.occasion;
  const allOccasions = getAllOccasions();
  const occasion = allOccasions.find(o => o.slug === occasionSlug);
  
  if (!occasion) {
    notFound();
  }
  
  const flowers = getFlowersByOccasion(occasion.name as Occasion);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Flowers for {occasion.name}</h1>
        <p className="text-muted-foreground mt-2 text-lg max-w-2xl mx-auto">{occasion.description}</p>
      </header>

      {flowers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {flowers.map((flower) => (
            <FlowerCard key={flower.slug} flower={flower} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No flowers found for this occasion.</p>
      )}

      <div className="text-center mt-16">
        <Link href="/occasions">
           <Badge variant="secondary" className="text-lg p-3 cursor-pointer hover:bg-accent">
            Browse Other Occasions
          </Badge>
        </Link>
      </div>
    </div>
  );
}
