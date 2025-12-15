import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Star, Trophy, Building, CheckCircle2 } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

const professionalExperience = [
    {
        title: "Software Engineer",
        company: "Ecolab (India)",
        description: "Worked on large-scale, data-driven and cloud-based systems with strict performance and security requirements.",
    },
    {
        title: "AI/ML Intern",
        company: "Indian Air Force (Remote)",
        description: "Developed intelligent models in a high-security environment.",
    },
    {
        title: "Open Source Contributor",
        company: "Google Summer of Code (PostgreSQL)",
        description: "Contributed to the PostgreSQL project, enhancing database functionalities.",
    }
]

const governmentCredentials = [
    "Qualified UPSC Civil Services Examination (CSE) Mains – 2023",
    "Selected in UPSC – Deputy Central Intelligence Officer (DCIO – Technical)",
    "Selected in UPSC – CBI Assistant Programmer"
]

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
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><GraduationCap className="size-5 text-primary" /> Academic & Technical</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div>
                        <p className="font-semibold">B.Tech in Computer Science & Engineering</p>
                        <p className="text-sm text-muted-foreground">Maharishi Markandeshwar (Deemed to be University), Haryana</p>
                    </div>
                    <div>
                        <p className="font-semibold">Expertise</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary">AI/ML</Badge>
                            <Badge variant="secondary">NLP</Badge>
                            <Badge variant="secondary">Cloud Systems</Badge>
                            <Badge variant="secondary">Exam Automation</Badge>
                            <Badge variant="secondary">Full Stack Dev</Badge>
                        </div>
                    </div>
                </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">About the Founder</h2>
              <p className="text-muted-foreground leading-relaxed">
                Deepak Kumar is a technology-driven education reformer, software engineer, and examination systems expert with over 4 years of strong experience in building scalable, secure, and AI-powered digital platforms. He is the Founder and Chief Exam Cell Officer of Indian Education Exam Cell (IEEC), India, a national-level examination technology initiative focused on automated, fair, and structured question paper generation for academic and government examinations. Deepak combines deep technical expertise with a clear understanding of India’s examination ecosystem, making IEEC a uniquely credible and future-ready platform.
              </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Trophy className="size-5 text-primary" /> Civil Services & Government Credentials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    {governmentCredentials.map((cred, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="size-5 text-green-600 mt-0.5 shrink-0" />
                            <p className="text-muted-foreground">{cred}</p>
                        </div>
                    ))}
                    <p className="text-sm text-muted-foreground pt-2">This experience directly shapes the government-format, policy-compliant design of IEEC’s question paper generation system.</p>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Briefcase className="size-5 text-primary" /> Professional Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   {professionalExperience.map((exp, index) => (
                       <div key={index}>
                           <p className="font-semibold">{exp.title} - <span className="font-normal text-accent">{exp.company}</span></p>
                           <p className="text-sm text-muted-foreground">{exp.description}</p>
                       </div>
                   ))}
                   <p className="text-sm text-muted-foreground pt-2">This background ensures that IEEC is built with enterprise-grade reliability, audit readiness, and long-term scalability.</p>
                </CardContent>
            </Card>

            <div>
              <h2 className="font-headline text-2xl font-bold text-primary mb-2">Founder’s Vision Behind IEEC</h2>
              <p className="text-muted-foreground leading-relaxed">
                Deepak founded Indian Education Exam Cell (IEEC) to solve long-standing problems in India’s examination system like manual question paper setting, lack of cognitive balance, repetition and leakage risks, and non-uniform standards. Under his leadership, IEEC uses a strong AI algorithm based on Bloom’s Taxonomy and syllabus mapping to ensure immediate, balanced, and authority-specific question papers with centralized control.
              </p>
            </div>

            <div>
                <h2 className="font-headline text-2xl font-bold text-primary mb-2">Role at IEEC</h2>
                <p className="text-muted-foreground leading-relaxed">
                    As Chief Exam Cell Officer, Deepak Kumar has sole authorization for final question paper generation, monitors all registered institutions, ensures confidentiality and compliance, oversees AI algorithm integrity, and maintains the centralized national exam cell dashboard.
                </p>
            </div>
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
