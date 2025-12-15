export type OrganizationType = "school" | "college" | "university" | "government_body";

export type UserRole = OrganizationType | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  organizationName: string;
}

export interface Organization {
  id: string;
  name: string;
  type: OrganizationType;
  email: string;
}

export interface QuestionPaperRequest {
  id: string;
  organizationId: string;
  organizationName: string;
  organizationType: OrganizationType;
  className: string;
  subject: string;
  totalMarks: number;
  syllabus: string;
  notes: string;
  status: 'pending' | 'completed';
  createdAt: string;
}

export interface GeneratedQuestionPaper {
  id: string;
  requestId: string;
  content: string;
  generatedAt: string;
}
