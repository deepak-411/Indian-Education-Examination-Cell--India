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
  questionPaper: z.string().describe('The generated question paper in a government-approved format (e.g., CBSE), formatted as Markdown.'),
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

Your task is to generate a well-structured question paper based on the provided details. The output must be in Markdown format.

Key instructions:
1.  **Structure:** Create clear sections (e.g., Section A, Section B).
2.  **Question Types:** Include a mix of Multiple Choice Questions (MCQs), Short Answer, and Long Answer questions.
3.  **Bloom's Taxonomy:** Ensure questions cover different cognitive levels (Remembering, Understanding, Applying, Analyzing, Evaluating, Creating).
4.  **Formatting:** Use Markdown for all formatting. Use headings for sections, bold for question numbers, and bullet points for options in MCQs.
5.  **Adherence:** Strictly follow the syllabus, notes, total marks, and organization type provided.

Organization Type: {{{organizationType}}}
Class: {{{className}}}
Total Marks: {{{totalMarks}}}
Syllabus: {{{syllabus}}}
Notes: {{{notes}}}

Generate the Markdown-formatted question paper now.
`,
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
