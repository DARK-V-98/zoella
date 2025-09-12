'use server';
import { generateLoveQuote } from '@/ai/flows/generate-love-quote';

export async function getLoveQuoteAction() {
  try {
    const result = await generateLoveQuote({ name: 'Zoella' });
    return result.quote;
  } catch (error) {
    console.error('Error generating love quote:', error);
    return "My love for you is beyond what words can describe, and even AI can't generate it.";
  }
}
