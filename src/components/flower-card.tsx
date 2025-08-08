import type { Flower } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface FlowerCardProps {
  flower: Flower;
}

export function FlowerCard({ flower }: FlowerCardProps) {
  return (
    <Link href={`/flowers/${flower.slug}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={flower.image}
              alt={flower.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              data-ai-hint={flower.aiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors">
            {flower.name}
          </CardTitle>
          <p className="text-muted-foreground">{flower.meaningTeaser}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
