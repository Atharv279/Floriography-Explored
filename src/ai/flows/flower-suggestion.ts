'use server';

/**
 * @fileOverview A flower suggestion AI agent.
 *
 * - flowerSuggestion - A function that handles the flower suggestion process.
 * - FlowerSuggestionInput - The input type for the flowerSuggestion function.
 * - FlowerSuggestionOutput - The return type for the flowerSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FlowerSuggestionInputSchema = z.object({
  occasionOrSentiment: z
    .string()
    .describe('The occasion or sentiment for which flower suggestions are needed.'),
});
export type FlowerSuggestionInput = z.infer<typeof FlowerSuggestionInputSchema>;

const FlowerSuggestionOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('A list of flower suggestions appropriate for the occasion or sentiment.'),
});
export type FlowerSuggestionOutput = z.infer<typeof FlowerSuggestionOutputSchema>;

export async function flowerSuggestion(input: FlowerSuggestionInput): Promise<FlowerSuggestionOutput> {
  return flowerSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'flowerSuggestionPrompt',
  input: {schema: FlowerSuggestionInputSchema},
  output: {schema: FlowerSuggestionOutputSchema},
  prompt: `You are a floral expert. Given the occasion or sentiment, suggest appropriate flowers.

Occasion or Sentiment: {{{occasionOrSentiment}}}

Suggestions:`,
});

const flowerSuggestionFlow = ai.defineFlow(
  {
    name: 'flowerSuggestionFlow',
    inputSchema: FlowerSuggestionInputSchema,
    outputSchema: FlowerSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
