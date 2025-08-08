import { getAllOccasions } from '@/lib/flowers';
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function OccasionsPage() {
  const occasions = getAllOccasions();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Browse by Occasion</h1>
        <p className="text-muted-foreground mt-2 text-lg">Find the perfect flower for any event or sentiment.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {occasions.map((occasion) => (
          <Link href={`/occasions/${occasion.slug}`} key={occasion.slug} className="group">
            <Card className="h-full hover:border-primary hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                   <occasion.icon className="w-8 h-8 text-primary"/>
                  <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
                    {occasion.name}
                  </CardTitle>
                </div>
                <CardDescription className="pt-2">{occasion.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
