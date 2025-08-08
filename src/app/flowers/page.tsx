import { getAllFlowers } from '@/lib/flowers';
import { FlowerListClient } from '@/components/flower-list-client';

export default function FlowersIndexPage() {
  const allFlowers = getAllFlowers();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Flower Encyclopedia</h1>
        <p className="text-muted-foreground mt-2 text-lg">Browse our A-Z list of flowers and their meanings.</p>
      </div>
      <FlowerListClient flowers={allFlowers} />
    </div>
  );
}
