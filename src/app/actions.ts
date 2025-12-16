// @ts-nocheck
'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { generateQuestionPaper } from '@/ai/flows/generate-question-paper';
import { summarizeSyllabusAndNotes } from '@/ai/flows/summarize-syllabus-notes';
import type { OrganizationType } from '@/lib/types';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function loginAction(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: 'Invalid email or password.',
    };
  }

  const { email, password } = validatedFields.data;

  // In a real app, you'd verify credentials against a database
  // and set a session cookie. Here, we'll simulate it.
  if (email === 'dk3624897@gmail.com' && password === 'IEEC2026') {
    redirect('/dashboard/admin');
  } 
  
  // This is a simulated login for any other registered user
  // In a real application, you would check this against a database.
  if (password === 'password123') {
     redirect('/dashboard');
  }

  return {
    error: 'Invalid credentials. Please try again.',
  };
}

const registerSchema = z.object({
    organizationName: z.string().min(3),
    organizationType: z.enum(["school", "college", "university", "government_body"]),
    email: z.string().email(),
    password: z.string().min(8),
})

export async function registerAction(prevState: any, formData: FormData) {
    const validatedFields = registerSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            error: "Invalid registration details. Please check your input.",
        };
    }
    
    // In a real app, you would save the new user to the database.
    console.log("New registration:", validatedFields.data);

    // TODO: Implement email verification flow.

    // For this scaffold, we'll just redirect to the login page after "registration".
    redirect('/login');
}


export async function generateQuestionPaperAction(
  prevState: any,
  formData: FormData
) {
  const rawData = {
    organizationType: formData.get('organizationType'),
    className: formData.get('className'),
    totalMarks: Number(formData.get('totalMarks')),
    syllabus: formData.get('syllabus'),
    notes: formData.get('notes'),
  };

  try {
    const result = await generateQuestionPaper({
      organizationType: rawData.organizationType as string,
      className: rawData.className as string,
      totalMarks: rawData.totalMarks,
      syllabus: rawData.syllabus as string,
      notes: rawData.notes as string,
    });
    
    // TODO: Save the generated paper to the database and associate with the request.
    // TODO: Send email notification to the organization.

    return { data: result.questionPaper, error: null };
  } catch (e) {
    console.error(e);
    return { data: null, error: 'Failed to generate question paper. Please try again.' };
  }
}


export async function summarizeAction(prevState: any, formData: FormData) {
    const rawData = {
        syllabus: formData.get('syllabus'),
        notes: formData.get('notes'),
    };

    try {
        const result = await summarizeSyllabusAndNotes({
            syllabus: rawData.syllabus as string,
            notes: rawData.notes as string,
        });
        return { data: result.summary, error: null };
    } catch(e) {
        console.error(e);
        return { data: null, error: "Failed to generate summary." };
    }
}
