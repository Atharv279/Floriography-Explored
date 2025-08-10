import Image from 'next/image';
import { Flower, Feather, BrainCircuit } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">Why Flowers?</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Because every bloom tells a story. For centuries, flowers have been our silent messengers, conveying emotions too deep for words. They are the language of love, celebration, sympathy, and hope.
          </p>
        </section>

        {/* Two-Column Section */}
        <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-headline text-foreground mb-4 flex items-center gap-3">
              <Flower className="text-accent" />
              The Lost Art of Floriography
            </h2>
            <p className="text-muted-foreground mb-4">
              Floriography—the language of flowers—is a forgotten art. It's the subtle poetry of a rose, the quiet dignity of a lily, the cheerful optimism of a daffodil. Understanding this language transforms a simple bouquet into a rich, layered narrative.
            </p>
            <p className="text-muted-foreground">
              We created Floriography Explored to revive this beautiful tradition, to help you discover the perfect bloom that speaks directly from your heart, for any occasion.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Artistic display of various flowers"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-full"
              data-ai-hint="artistic flowers"
            />
          </div>
        </section>

        <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
             <Image
              src="https://placehold.co/600x400.png"
              alt="Abstract representation of AI and nature"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-full"
              data-ai-hint="ai nature"
            />
          </div>
          <div>
            <h2 className="text-3xl font-headline text-foreground mb-4 flex items-center gap-3">
              <BrainCircuit className="text-accent" />
              Innovation Meets Intuition
            </h2>
            <p className="text-muted-foreground mb-4">
              But what if you're unsure where to start? The world of flowers is vast. That’s where modern magic comes in.
            </p>
            <p className="text-muted-foreground">
              Our AI Suggester is your personal floral consultant. It listens to your needs—the occasion, the sentiment, the unspoken feeling—and curates suggestions steeped in centuries of floral symbolism. It’s the perfect fusion of data-driven intelligence and the intuitive, timeless wisdom of nature. We don't just give you a flower; we give you the right story to tell.
            </p>
          </div>
        </section>
        
        {/* Closing Section */}
        <section className="text-center mt-16 md:mt-24">
            <h2 className="text-3xl font-headline text-primary">Explore. Discover. Express.</h2>
            <p className="mt-2 text-lg text-muted-foreground">Your message is waiting to bloom.</p>
        </section>

      </div>
    </div>
  );
}
