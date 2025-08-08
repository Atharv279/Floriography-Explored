// src/ai/flows/related-flowers.ts
'use server';
/**
 * @fileOverview A flow that suggests related flowers based on a given flower name.
 *
 * - getRelatedFlowers - A function that suggests related flowers based on a given flower name.
 * - RelatedFlowersInput - The input type for the getRelatedFlowers function.
 * - RelatedFlowersOutput - The return type for the getRelatedFlowers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RelatedFlowersInputSchema = z.object({
  flowerName: z.string().describe('The name of the flower to find related flowers for.'),
});
export type RelatedFlowersInput = z.infer<typeof RelatedFlowersInputSchema>;

const RelatedFlowersOutputSchema = z.object({
  relatedFlowers: z.array(z.string()).describe('An array of related flower names.'),
});
export type RelatedFlowersOutput = z.infer<typeof RelatedFlowersOutputSchema>;

export async function getRelatedFlowers(input: RelatedFlowersInput): Promise<RelatedFlowersOutput> {
  return relatedFlowersFlow(input);
}

const relatedFlowersPrompt = ai.definePrompt({
  name: 'relatedFlowersPrompt',
  input: {schema: RelatedFlowersInputSchema},
  output: {schema: RelatedFlowersOutputSchema},
  prompt: `You are a knowledgeable florist. Given the flower name, suggest 3 other flowers that are related in terms of meaning, symbolism, or usage.

Flower Name: {{{flowerName}}}

Related Flowers:`,
});

const relatedFlowersFlow = ai.defineFlow(
  {
    name: 'relatedFlowersFlow',
    inputSchema: RelatedFlowersInputSchema,
    outputSchema: RelatedFlowersOutputSchema,
  },
  async input => {
    const {output} = await relatedFlowersPrompt(input);
    return output!;
  }
);
