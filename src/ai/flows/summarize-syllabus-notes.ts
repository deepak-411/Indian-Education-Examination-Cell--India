'use server';

/**
 * @fileOverview Summarizes the uploaded syllabus and notes for a given class and subject using AI.
 *
 * - summarizeSyllabusAndNotes - A function that handles the summarization process.
 * - SummarizeSyllabusAndNotesInput - The input type for the summarizeSyllabusAndNotes function.
 * - SummarizeSyllabusAndNotesOutput - The return type for the summarizeSyllabusAndNotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSyllabusAndNotesInputSchema = z.object({
  syllabus: z.string().describe('The syllabus content.'),
  notes: z.string().describe('The notes content.'),
});

export type SummarizeSyllabusAndNotesInput = z.infer<typeof SummarizeSyllabusAndNotesInputSchema>;

const SummarizeSyllabusAndNotesOutputSchema = z.object({
  summary: z.string().describe('The AI-generated summary of the syllabus and notes.'),
});

export type SummarizeSyllabusAndNotesOutput = z.infer<typeof SummarizeSyllabusAndNotesOutputSchema>;

export async function summarizeSyllabusAndNotes(
  input: SummarizeSyllabusAndNotesInput
): Promise<SummarizeSyllabusAndNotesOutput> {
  return summarizeSyllabusAndNotesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeSyllabusAndNotesPrompt',
  input: {schema: SummarizeSyllabusAndNotesInputSchema},
  output: {schema: SummarizeSyllabusAndNotesOutputSchema},
  prompt: `Summarize the following syllabus and notes content for an exam cell officer. Be concise and focus on the key topics that should be covered in the question paper.\n\nSyllabus: {{{syllabus}}}\n\nNotes: {{{notes}}}`,
});

const summarizeSyllabusAndNotesFlow = ai.defineFlow(
  {
    name: 'summarizeSyllabusAndNotesFlow',
    inputSchema: SummarizeSyllabusAndNotesInputSchema,
    outputSchema: SummarizeSyllabusAndNotesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
