import { getFlowerBySlug, getNextPrevFlower } from '@/lib/flowers';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { RelatedFlowers } from '@/components/related-flowers';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Palette, BookOpen, Leaf, Tag } from 'lucide-react';

type FlowerPageProps = {
  params: {
    slug: string;
  };
};

export default async function FlowerPage({ params }: FlowerPageProps) {
  const flower = getFlowerBySlug(params.slug);
  if (!flower) {
    notFound();
  }

  const { prev, next } = getNextPrevFlower(params.slug);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-foreground">{flower.name}</h1>
        <p className="text-lg text-muted-foreground italic mt-2">{flower.scientificName}</p>
      </header>

      <div className="grid lg:grid-cols-3 lg:gap-12">
        <article className="lg:col-span-2">
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src={flower.image}
              alt={flower.name}
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
              priority
              data-ai-hint={flower.aiHint}
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section id="meaning" className="mb-8">
              <h2 className="font-headline text-3xl flex items-center gap-3"><BookOpen />Meaning and Symbolism</h2>
              <p>{flower.meaningAndSymbolism}</p>
            </section>

            <Separator className="my-8" />

            <section id="history" className="mb-8">
              <h2 className="font-headline text-3xl flex items-center gap-3"><Leaf />History and Cultural Significance</h2>
              <p>{flower.historyAndCulturalSignificance}</p>
            </section>
          </div>
        </article>

        <aside className="space-y-8 mt-12 lg:mt-0">
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-3"><Tag />Quick Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-foreground">
                {flower.funFacts.map((fact, index) => (
                  <li key={index} className="flex">
                    <span className="mr-2 text-primary"> &bull; </span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {flower.colors && flower.colors.length > 0 && (
            <Card className="bg-secondary/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Palette />Color Meanings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {flower.colors.map(c => (
                     <li key={c.color}>
                       <strong>{c.color}:</strong> {c.meaning}
                     </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Occasions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {flower.occasions.map((occasion) => (
                <Badge key={occasion} variant="outline" className="bg-accent/50">{occasion}</Badge>
              ))}
            </CardContent>
          </Card>

          <RelatedFlowers flowerName={flower.name} />
        </aside>
      </div>
      
      <nav className="flex justify-between mt-16 border-t pt-8">
        {prev ? (
          <Button asChild variant="outline">
            <Link href={`/flowers/${prev.slug}`} className="flex items-center gap-2">
              <ArrowLeft />
              <div>
                <div className="text-xs text-muted-foreground">Previous</div>
                {prev.name}
              </div>
            </Link>
          </Button>
        ) : <div />}
        {next && (
           <Button asChild variant="outline">
            <Link href={`/flowers/${next.slug}`} className="flex items-center gap-2 text-right">
               <div>
                <div className="text-xs text-muted-foreground">Next</div>
                {next.name}
              </div>
              <ArrowRight />
            </Link>
          </Button>
        )}
      </nav>
    </div>
  );
}
