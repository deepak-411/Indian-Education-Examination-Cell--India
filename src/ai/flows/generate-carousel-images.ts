'use server';

/**
 * @fileOverview Generates a set of educational-themed images for the homepage carousel.
 *
 * - generateCarouselImages - A function that returns a list of AI-generated image data URIs.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CarouselImageSchema = z.object({
  imageUrl: z.string().describe('The Base64-encoded data URI of the generated image.'),
  altText: z.string().describe('A brief description of the image content.'),
});

const GenerateCarouselImagesOutputSchema = z.object({
  images: z.array(CarouselImageSchema),
});

export type GenerateCarouselImagesOutput = z.infer<typeof GenerateCarouselImagesOutputSchema>;

export async function generateCarouselImages(): Promise<GenerateCarouselImagesOutput> {
  return generateCarouselImagesFlow();
}

const imagePrompts = [
  'A clean, modern chalkboard with complex physics equations written on it. The style should be realistic and professional.',
  'An empty, well-lit university examination hall with rows of desks and chairs, conveying a sense of order and scale.',
  'A close-up shot of a student\'s hand writing an answer on an exam paper with a pen. The focus is on the act of writing.',
  'A diverse group of students sitting in a large, modern lecture hall, listening attentively to a presentation.',
  'A symbolic image representing digital security in education, with a shield icon overlaying a background of code and circuits.',
  'A diagram illustrating Bloom\'s Taxonomy on a digital whiteboard, with vibrant colors and clear labels.',
  'An abstract image of a brain with glowing neural networks, representing artificial intelligence and learning.',
];

const generateCarouselImagesFlow = ai.defineFlow(
  {
    name: 'generateCarouselImagesFlow',
    inputSchema: z.void(),
    outputSchema: GenerateCarouselImagesOutputSchema,
  },
  async () => {
    const imageGenerationPromises = imagePrompts.map(async (prompt, index) => {
      const {media} = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: prompt,
      });
      return {
        imageUrl: media.url!,
        altText: `Carousel Image ${index + 1}: ${prompt}`,
      };
    });

    const images = await Promise.all(imageGenerationPromises);

    return { images };
  }
);
