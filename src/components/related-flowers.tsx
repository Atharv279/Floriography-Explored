import { getRelatedFlowers } from '@/ai/flows/related-flowers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FlowerCard } from './flower-card';
import { getFlowerByName } from '@/lib/flowers';
import { Sprout } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface RelatedFlowersProps {
  flowerName: string;
}

export async function RelatedFlowers({ flowerName }: RelatedFlowersProps) {
  try {
    const { relatedFlowers: relatedFlowerNames } = await getRelatedFlowers({ flowerName });

    const relatedFlowerData = relatedFlowerNames
        .map(name => getFlowerByName(name))
        .filter(Boolean);
        
    if (relatedFlowerData.length === 0) {
      return null;
    }

    return (
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-3"><Sprout />You Might Also Like</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {relatedFlowerData.map(flower => flower && <FlowerCard key={flower.slug} flower={flower} />)}
        </CardContent>
      </Card>
    );
  } catch (error) {
    console.error('Failed to get related flowers:', error);
    return (
       <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Could not load related flowers at this time.</AlertDescription>
      </Alert>
    );
  }
}
