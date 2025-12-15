import type { Organization, QuestionPaperRequest, User, GeneratedQuestionPaper, OrganizationType } from './types';

export const users: User[] = [
  {
    id: 'user-1',
    email: 'dk3624897@gmail.com',
    name: 'Deepak Kumar',
    role: 'admin',
    organizationName: 'Indian Education Exam Cell',
  },
  {
    id: 'user-2',
    email: 'principal@dps.edu',
    name: 'Anjali Sharma',
    role: 'school',
    organizationName: 'Delhi Public School',
  },
  {
    id: 'user-3',
    email: 'hod.cse@iitb.ac.in',
    name: 'Prof. Rajesh Singh',
    role: 'university',
    organizationName: 'IIT Bombay',
  },
];

export const organizations: Organization[] = [
  {
    id: 'org-1',
    name: 'Delhi Public School',
    type: 'school',
    email: 'contact@dps.edu',
  },
  {
    id: 'org-2',
    name: 'IIT Bombay',
    type: 'university',
    email: 'contact@iitb.ac.in',
  },
  {
    id: 'org-3',
    name: 'St. Xavier\'s College',
    type: 'college',
    email: 'contact@sxc.edu',
  },
];

export const requests: QuestionPaperRequest[] = [
  {
    id: 'req-1',
    organizationId: 'org-1',
    organizationName: 'Delhi Public School',
    organizationType: 'school',
    className: '12th Science',
    subject: 'Physics',
    totalMarks: 70,
    syllabus: 'Chapters: 1. Electric Charges and Fields, 2. Electrostatic Potential and Capacitance, 3. Current Electricity, 4. Moving Charges and Magnetism, 5. Magnetism and Matter.',
    notes: 'Focus on application-based questions. Include at least one 5-mark derivation. Questions should be balanced as per Bloom\'s Taxonomy.',
    status: 'pending',
    createdAt: '2024-07-29T10:00:00Z',
  },
  {
    id: 'req-2',
    organizationId: 'org-2',
    organizationName: 'IIT Bombay',
    organizationType: 'university',
    className: 'B.Tech CSE - 2nd Year',
    subject: 'Data Structures & Algorithms',
    totalMarks: 100,
    syllabus: 'Topics: Arrays, Linked Lists, Stacks, Queues, Trees (BST, AVL), Heaps, Hashing, Graphs (BFS, DFS, Dijkstra, MST). Asymptotic Analysis.',
    notes: 'The paper should test problem-solving skills. Include questions on time complexity analysis. One question on dynamic programming is mandatory.',
    status: 'pending',
    createdAt: '2024-07-28T15:30:00Z',
  },
  {
    id: 'req-3',
    organizationId: 'org-1',
    organizationName: 'Delhi Public School',
    organizationType: 'school',
    className: '10th',
    subject: 'Mathematics',
    totalMarks: 80,
    syllabus: 'Chapters: Real Numbers, Polynomials, Triangles, Introduction to Trigonometry, Statistics.',
    notes: 'Please generate a paper as per the latest CBSE pattern. Include a mix of MCQs, short answer, and long answer questions.',
    status: 'completed',
    createdAt: '2024-07-25T11:00:00Z',
  },
];

export const generatedPapers: GeneratedQuestionPaper[] = [
    {
        id: 'paper-1',
        requestId: 'req-3',
        content: `
# Delhi Public School - Annual Examination
## Class: 10th
### Subject: Mathematics

**Total Marks: 80**
**Time: 3 Hours**

---

### Section A (1 mark each)

1.  What is the HCF of 96 and 404?
    (a) 2
    (b) 4
    (c) 6
    (d) 8

2.  If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is:
    (a) 10
    (b) -10
    (c) 5
    (d) -5

... (more questions)

### Section B (2 marks each)

11. Prove that √5 is an irrational number.

... (more questions)
`,
        generatedAt: '2024-07-25T14:00:00Z'
    }
];

export const classOptions: Record<OrganizationType, { label: string; value: string }[]> = {
    school: [
        { label: "Class 1", value: "1" },
        { label: "Class 2", value: "2" },
        { label: "Class 3", value: "3" },
        { label: "Class 4", value: "4" },
        { label: "Class 5", value: "5" },
        { label: "Class 6", value: "6" },
        { label: "Class 7", value: "7" },
        { label: "Class 8", value: "8" },
        { label: "Class 9", value: "9" },
        { label: "Class 10", value: "10" },
        { label: "Class 11 (Science)", value: "11_science" },
        { label: "Class 11 (Commerce)", value: "11_commerce" },
        { label: "Class 11 (Arts)", value: "11_arts" },
        { label: "Class 12 (Science)", value: "12_science" },
        { label: "Class 12 (Commerce)", value: "12_commerce" },
        { label: "Class 12 (Arts)", value: "12_arts" },
    ],
    college: [
        { label: "B.A. - 1st Year", value: "ba_1" },
        { label: "B.Com - 1st Year", value: "bcom_1" },
        { label: "B.Sc - 1st Year", value: "bsc_1" },
        { label: "M.A. - 1st Year", value: "ma_1" },
    ],
    university: [
        { label: "B.Tech CSE - 1st Year", value: "btech_cse_1" },
        { label: "B.Tech Mech - 1st Year", value: "btech_mech_1" },
        { label: "M.Tech CSE - 1st Year", value: "mtech_cse_1" },
        { label: "MBA - 1st Year", value: "mba_1" },
    ],
    government_body: [
        { label: "Civil Services Prelims", value: "upsc_prelims" },
        { label: "SSC CGL - Tier 1", value: "ssc_cgl_1" },
    ]
};
