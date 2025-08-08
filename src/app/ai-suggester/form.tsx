'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { suggestFlowerAction } from '@/actions/suggest-flower';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader, Sparkles } from 'lucide-react';

const initialState = {
  suggestions: null,
  reasoning: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader className="animate-spin" /> : 'Suggest Flowers'}
    </Button>
  );
}

export function AiSuggesterForm() {
  const [state, formAction] = useFormState(suggestFlowerAction, initialState);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Flower Suggestion Tool</CardTitle>
          <CardDescription>
            Enter an occasion (e.g., "wedding," "get well soon") or a sentiment (e.g., "gratitude," "new beginnings")
            and let our AI suggest the perfect flowers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                name="occasionOrSentiment"
                placeholder="e.g., 'anniversary' or 'sympathy'"
                className="flex-grow"
                required
              />
              <SubmitButton />
            </div>
            {state.error && (
              <p className="text-sm font-medium text-destructive">{state.error}</p>
            )}
          </form>
        </CardContent>
      </Card>

      {state.suggestions && (
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Our Suggestions</AlertTitle>
          <AlertDescription>
            <div className="prose prose-sm dark:prose-invert">
              <p>{state.suggestions}</p>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {state.reasoning && (
        <Alert variant="default" className="mt-4 bg-secondary/50">
          <Sparkles className="h-4 w-4" />
          <AlertTitle>Why we suggest these</AlertTitle>
          <AlertDescription>
            <div className="prose prose-sm dark:prose-invert">
              <p>{state.reasoning}</p>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
