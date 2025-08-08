'use server';

import { flowerSuggestion } from '@/ai/flows/flower-suggestion';

interface State {
  suggestions?: string | null;
  reasoning?: string | null;
  error?: string | null;
}

export async function suggestFlowerAction(prevState: State, formData: FormData): Promise<State> {
  const occasionOrSentiment = formData.get('occasionOrSentiment') as string;

  if (!occasionOrSentiment?.trim()) {
    return { error: 'Please enter an occasion or sentiment.' };
  }

  try {
    const result = await flowerSuggestion({ occasionOrSentiment });
    return { suggestions: result.suggestions, reasoning: result.reasoning };
  } catch (e) {
    console.error(e);
    return { error: 'Sorry, we couldn\'t find any suggestions. Please try again.' };
  }
}
