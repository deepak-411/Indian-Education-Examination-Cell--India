'use server';

/**
 * @fileOverview A question paper generation AI agent.
 *
 * - generateQuestionPaper - A function that handles the question paper generation process.
 * - GenerateQuestionPaperInput - The input type for the generateQuestionPaper function.
 * - GenerateQuestionPaperOutput - The return type for the generateQuestionPaper function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuestionPaperInputSchema = z.object({
  organizationType: z.string().describe('The type of organization (school, college, university, government body).'),
  className: z.string().describe('The class for which the question paper is being generated (e.g., 10th, 12th Science, B.Tech CSE).'),
  totalMarks: z.number().describe('The total marks for the question paper.'),
  syllabus: z.string().describe('The syllabus content for the class.'),
  notes: z.string().optional().describe('Additional notes or instructions for question generation.'),
});

export type GenerateQuestionPaperInput = z.infer<typeof GenerateQuestionPaperInputSchema>;

const GenerateQuestionPaperOutputSchema = z.object({
  questionPaper: z.string().describe('The generated question paper in a government-approved format (e.g., CBSE).'),
});

export type GenerateQuestionPaperOutput = z.infer<typeof GenerateQuestionPaperOutputSchema>;

export async function generateQuestionPaper(input: GenerateQuestionPaperInput): Promise<GenerateQuestionPaperOutput> {
  return generateQuestionPaperFlow(input);
}

const generateQuestionPaperPrompt = ai.definePrompt({
  name: 'generateQuestionPaperPrompt',
  input: {schema: GenerateQuestionPaperInputSchema},
  output: {schema: GenerateQuestionPaperOutputSchema},
  prompt: `You are an expert in generating question papers for Indian educational institutions, including schools, colleges, universities, and government bodies.

You will use the provided syllabus, notes, and organization type to generate a well-structured question paper with questions that align with Bloom's Taxonomy.

Ensure the question paper adheres to government-approved formats like CBSE, considering the organization type and authority.

Organization Type: {{{organizationType}}}
Class: {{{className}}}
Total Marks: {{{totalMarks}}}
Syllabus: {{{syllabus}}}
Notes: {{{notes}}}

Generate the question paper:
`, // add more to the prompt here
});

const generateQuestionPaperFlow = ai.defineFlow(
  {
    name: 'generateQuestionPaperFlow',
    inputSchema: GenerateQuestionPaperInputSchema,
    outputSchema: GenerateQuestionPaperOutputSchema,
  },
  async input => {
    const {output} = await generateQuestionPaperPrompt(input);
    return output!;
  }
);
