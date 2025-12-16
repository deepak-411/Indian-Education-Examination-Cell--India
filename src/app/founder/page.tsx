
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Star, ShieldCheck, Award, Flag, Cpu, CheckCircle2, Target, Eye } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

const governmentCredentials = [
    "Qualified UPSC Civil Services Examination (CSE) Mains – 2023",
    "Selected in UPSC – Deputy Central Intelligence Officer (DCIO – Technical)",
    "Selected in UPSC – CBI Assistant Programmer"
];

const defenceCredentials = [
    { text: "Qualified Indian Navy SSC (2023–24)", details: ["Cleared SSB Interview", "Cleared Conference", "Medically Out"] },
    { text: "Indian Army – Technical Graduate Course (TGC)", details: ["SSB Call Letter Received", "Conference Out"] }
];

const awards = [
    "Nominated for Padma Shri Award 2024 (Science & Engineering contribution)",
    "Winner / Top Performer in multiple national & international hackathons",
    "Google Cloud Skill Boost – Silver League (AI & Generative Models)",
    "Young Scientist Awards (National Level)",
    "KVPY Fellow (SX)",
    "Scientist for a Day – NASA",
    "100+ recognitions in innovation, coding, and research",
];

const founderRole = [
    "Syllabus-mapped papers",
    "Marks-wise distribution",
    "Bloom’s Taxonomy cognitive balance",
    "Authority-specific formats"
];

const ieecVision = [
    "Manual paper setting errors",
    "Repetition and leakage risks",
    "Cognitive imbalance in exams",
    "Non-uniform standards across institutions"
];

const ieecSolution = [
    "AI-driven question paper generation",
    "Government-format structured papers",
    "Immediate, reliable, and fair assessments"
];


export default function FounderPage() {
    const founderImage = placeholderImages.find(p => p.id === 'founder-image');

  return (
    <div className="bg-background text-foreground">
       <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-md">
        <div className="container h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="size-12" />
            <div className="flex flex-col">
              <span className="font-headline text-lg font-bold leading-tight">
                Indian Education
              </span>
              <span className="font-headline text-lg font-bold leading-tight">
                Exam Cell
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
             <Link href="/#features" className="hover:text-primary-foreground/80">Features</Link>
             <Link href="/#mission" className="hover:text-primary-foreground/80">About Us</Link>
             <Link href="/founder" className="hover:text-primary-foreground/80">Founder</Link>
             <Link href="/dashboard" className="hover:text-primary-foreground/80">Dashboard</Link>
          </nav>
          <div className="flex items-center justify-end space-x-2">
            <Button variant="secondary" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Profile Picture and Basic Info */}
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                {founderImage && (
                    <div className="relative size-48 mb-4">
                        <Image
                            src={founderImage.imageUrl}
                            alt="Deepak Kumar"
                            fill
                            className="rounded-full object-cover shadow-lg"
                            data-ai-hint={founderImage.imageHint}
                            unoptimized
                        />
                    </div>
                )}
                <h1 className="font-headline text-2xl font-bold text-primary">Deepak Kumar</h1>
                <p className="text-sm font-medium text-accent">Founder & Chief Exam Cell Officer (CECO)</p>
                <p className="text-sm text-muted-foreground mt-1">Indian Education Exam Cell (IEEC), India</p>
              </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><GraduationCap className="size-5 text-primary" /> Educational Qualifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                     <div>
                        <p className="font-semibold">Bachelor of Technology (B.Tech) in Computer Science & Engineering</p>
                        <p className="text-sm text-muted-foreground">Maharishi Markandeshwar (Deemed to be University), Haryana</p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Cpu className="size-5 text-primary" /> Academic & Professional Strength</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p className='font-semibold text-foreground'>Software Engineer | Full-Stack & AI Systems</p>
                    <p>Strong background in:</p>
                    <ul className='list-disc list-inside space-y-1'>
                        <li>Examination automation systems</li>
                        <li>Question paper generation & evaluation logic</li>
                        <li>AI-based academic assessment models</li>
                        <li>Secure role-based authority dashboards</li>
                    </ul>
                    <p className='pt-2'>Deepak’s work focuses on removing manual dependency from examinations and replacing it with algorithm-driven, syllabus-mapped, cognition-balanced question papers.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Award className="size-5 text-primary" /> Awards & Recognition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    {awards.map((award, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Star className="size-4 text-yellow-500 mt-1 shrink-0" />
                            <p className="text-muted-foreground text-sm">{award}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">Brief Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Deepak Kumar is a Software Engineer and Examination Systems Specialist with over four years of professional and research experience in software development, artificial intelligence, and automated assessment systems. He is the Founder and Chief Exam Cell Officer of Indian Education Exam Cell (IEEC), India, an examination technology platform designed for structured, syllabus-based, and standardized question paper generation for academic and government examinations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                His professional background combines technical expertise, experience in high-security environments, and direct exposure to national-level competitive examinations, making him suitably qualified to lead an examination-oriented technology organization.
              </p>
            </div>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><ShieldCheck className="size-5 text-primary" /> Civil Services & Defence Examination Credentials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-md mb-2">Civil Services & Government Selections</h4>
                        {governmentCredentials.map((cred, index) => (
                            <div key={index} className="flex items-start gap-3 mb-1">
                                <CheckCircle2 className="size-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-muted-foreground">{cred}</p>
                            </div>
                        ))}
                    </div>
                     <div>
                        <h4 className="font-semibold text-md mb-2">Defence Services (SSB Experience)</h4>
                        {defenceCredentials.map((cred, index) => (
                            <div key={index} className="mb-2">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="size-5 text-blue-600 mt-0.5 shrink-0" />
                                    <p className="text-muted-foreground font-semibold">{cred.text}</p>
                                </div>
                                <ul className='list-disc list-inside ml-8 text-sm text-muted-foreground'>
                                    {cred.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground pt-2 italic">These experiences provide Deepak with first-hand understanding of examination fairness, evaluation depth, confidentiality, and national-level assessment standards, which directly shape the IEEC platform.</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Briefcase className="size-5 text-primary" /> Founder’s Role at IEEC</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p className='text-muted-foreground'>As Chief Exam Cell Officer, Deepak Kumar:</p>
                    <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                        <li>Holds sole authorization for final question paper generation</li>
                        <li>Supervises all registered schools, colleges, universities, and government bodies</li>
                        <li>Maintains a centralized national exam cell dashboard</li>
                        <li>Controls exam confidentiality and quality assurance</li>
                    </ul>
                     <p className='font-semibold pt-2'>Ensures:</p>
                     <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                        <li>Authority-wise question generation</li>
                        <li>Syllabus-driven paper design</li>
                        <li>Marks-based structuring</li>
                        <li>Government-style formats (CBSE/NTA-like)</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Target className="size-5 text-primary" /> Examination Technology Philosophy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p className='text-muted-foreground'>The IEEC platform, under Deepak’s leadership, is built on:</p>
                     <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                        <li>Bloom’s Taxonomy-based cognitive balance</li>
                        <li>Automated syllabus mapping</li>
                        <li>Marks-wise question distribution</li>
                        <li>Institution-specific exam generation</li>
                        <li>Immediate, error-free paper creation</li>
                        <li>Structured academic & government formats</li>
                    </ul>
                    <p className='text-muted-foreground pt-2'>This ensures valid, reliable, and standardized assessments for:</p>
                    <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                        <li>Classes 1–12</li>
                        <li>Graduation & Post-Graduation</li>
                        <li>B.Tech / M.Tech (all branches)</li>
                        <li>Government examinations</li>
                    </ul>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Eye className="size-5 text-primary" /> Why IEEC is Different</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="text-muted-foreground">Unlike traditional exam software, IEEC is designed by someone who has:</p>
                     <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                        <li>Written high-stakes exams</li>
                        <li>Cleared SSB interviews</li>
                        <li>Qualified UPSC Mains</li>
                        <li>Worked in technical government selections</li>
                    </ul>
                    <p className="font-semibold text-foreground pt-2">This makes IEEC practically informed, policy-aware, and examination-centric, not just software-centric.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Flag className="size-5 text-primary" /> Vision Behind IEEC</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p className="text-muted-foreground">IEEC was founded to eliminate:</p>
                     <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                        {ieecVision.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                    <p className="text-muted-foreground pt-2">And replace them with:</p>
                     <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                        {ieecSolution.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </I</CardContent>
            </Card>

          </div>
        </div>
      </main>

      <footer className="border-t bg-primary text-primary-foreground">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Logo className="size-8" />
            <p className="text-sm font-semibold font-headline">Indian Education Exam Cell</p>
          </div>
          <div className="text-center md:text-left text-sm text-primary-foreground/80">
            <p className="font-semibold text-primary-foreground mb-1">Contact Us</p>
            <p>Deepak Kumar</p>
            <p>dk3624897@gmail.com</p>
            <p>Pimpoli Village, Near Barvi Dam, Badlapur, Mumbai, Maharashtra</p>
          </div>
          <p className="text-sm text-primary-foreground/80 text-center md:text-right">
            © {new Date().getFullYear()} IEEC, India. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
