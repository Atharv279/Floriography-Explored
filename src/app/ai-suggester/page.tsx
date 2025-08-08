import { AiSuggesterForm } from './form';

export default function AiSuggesterPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold font-headline text-center mb-4">AI Flower Suggester</h1>
        <p className="text-muted-foreground text-center mb-8">
          Not sure which flower to choose? Let technology help you find the perfect bloom.
        </p>
        <AiSuggesterForm />
      </div>
    </div>
  );
}
