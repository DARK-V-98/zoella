'use server';

/**
 * @fileOverview AI flow to generate a love quote for Zoella.
 *
 * - generateLoveQuote - A function that generates a love quote for Zoella.
 * - GenerateLoveQuoteInput - The input type for the generateLoveQuote function.
 * - GenerateLoveQuoteOutput - The return type for the generateLoveQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLoveQuoteInputSchema = z.object({
  name: z.string().describe('The name of the person to generate the love quote for.')
});
export type GenerateLoveQuoteInput = z.infer<typeof GenerateLoveQuoteInputSchema>;

const GenerateLoveQuoteOutputSchema = z.object({
  quote: z.string().describe('The generated love quote.')
});
export type GenerateLoveQuoteOutput = z.infer<typeof GenerateLoveQuoteOutputSchema>;

export async function generateLoveQuote(input: GenerateLoveQuoteInput): Promise<GenerateLoveQuoteOutput> {
  return generateLoveQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLoveQuotePrompt',
  input: {schema: GenerateLoveQuoteInputSchema},
  output: {schema: GenerateLoveQuoteOutputSchema},
  prompt: `You are a love quote generator. Generate a love quote for {{name}}.`
});

const generateLoveQuoteFlow = ai.defineFlow(
  {
    name: 'generateLoveQuoteFlow',
    inputSchema: GenerateLoveQuoteInputSchema,
    outputSchema: GenerateLoveQuoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
