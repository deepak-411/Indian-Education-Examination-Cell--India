import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Star, ShieldCheck, Award, Flag, Cpu, CheckCircle2, Target, Eye } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                {founderImage && (
                    <div className="relative size-40 mb-4">
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
                <p className="text-xs text-muted-foreground mt-1">Indian Education Exam Cell (IEEC), India</p>
              </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><GraduationCap className="size-5 text-primary" /> Education</CardTitle>
                </CardHeader>
                <CardContent>
                     <div>
                        <p className="font-semibold">B.Tech, Computer Science & Engineering</p>
                        <p className="text-sm text-muted-foreground">Maharishi Markandeshwar (Deemed to be University), Haryana</p>
                    </div>
                </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">Brief Professional Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Deepak Kumar is a Software Engineer and Examination Systems Specialist with over four years of professional and research experience in software development, artificial intelligence, and automated assessment systems. He is the Founder and Chief Exam Cell Officer of Indian Education Exam Cell (IEEC), India, an examination technology platform designed for structured, syllabus-based, and standardized question paper generation for academic and government examinations.
                    </p>
                    <p>
                        His professional background combines technical expertise, experience in high-security environments, and direct exposure to national-level competitive examinations, making him suitably qualified to lead an examination-oriented technology organization.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Briefcase className="size-5 text-primary" /> Founder’s Role & Philosophy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <div>
                        <h4 className="font-semibold mb-2">As Chief Exam Cell Officer, Deepak Kumar:</h4>
                        <ul className='list-disc list-inside space-y-1'>
                            <li>Holds sole authorization for final question paper generation.</li>
                            <li>Supervises all registered organizations and maintains a centralized national dashboard.</li>
                            <li>Controls exam confidentiality, quality assurance, and AI algorithm integrity.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold mb-2">The IEEC platform is built on a philosophy of:</h4>
                         <ul className='list-disc list-inside space-y-1'>
                            <li><span className="font-medium text-foreground">Cognitive Balance:</span> Using Bloom’s Taxonomy for a mix of LOTS & HOTS questions.</li>
                            <li><span className="font-medium text-foreground">Standardization:</span> Authority-specific, syllabus-driven, and marks-based structuring.</li>
                            <li><span className="font-medium text-foreground">Automation:</span> Immediate, error-free paper creation in official formats (CBSE/NTA-like).</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Flag className="size-5 text-primary" /> Vision: Solving Core Examination Challenges</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2 text-destructive">Problems to Eliminate</h4>
                        <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                            {ieecVision.map((item, index) => (<li key={index}>{item}</li>))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-accent">Solutions Provided</h4>
                        <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                            {ieecSolution.map((item, index) => (<li key={index}>{item}</li>))}
                        </ul>
                    </div>
                </CardContent>
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
