import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Star, Trophy, Building, CheckCircle2, ShieldCheck, Award, Flag, Cpu } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

const professionalExperience = [
    {
        title: "Software Engineer",
        company: "Ecolab (India)",
        duration: "June 2023 – January 2025",
        description: "Designed and developed scalable, data-driven software systems, built cloud-based microservices for industrial IoT applications, and worked on performance optimization and AI-powered predictive solutions.",
    },
    {
        title: "AI / ML Internship",
        company: "Indian Air Force (Remote, Delhi)",
        description: "Developed AI models in a high-security captive environment, working on intelligent decision-support and automation systems, strengthening understanding of secure systems.",
    },
    {
        title: "Google Summer of Code",
        company: "PostgreSQL (Open Source Contributor)",
        description: "Contributed to PostgreSQL’s pgarchives portal, improving performance, UI/UX, and system reliability in collaboration with global open-source engineers.",
    }
];

const governmentCredentials = [
    "Qualified UPSC Civil Services Examination (CSE) Mains – 2023",
    "Selected – UPSC Deputy Central Intelligence Officer (DCIO – Technical)",
    "Selected – UPSC CBI Assistant Programmer"
];

const defenceCredentials = [
    "Indian Navy SSC (2023–24): Cleared SSB Interview & Conference (Medically Out)",
    "Indian Army – Technical Graduate Course (TGC): SSB Call Letter Issued (Conference Out)"
];

const flagshipProjects = [
    { title: "KeepTab – AI-Based Wearable Memory Assistant", description: "Deep-learning powered device to help users recall object locations, integrating camera, accelerometer, and voice assistant." },
    { title: "Farmer Crop Insurance Claim System (PMFBY)", description: "Government-oriented web system for transparent insurance claim tracking." },
    { title: "Deepak’s Algorithm", description: "Optimized algorithm for high-performance data processing." },
    { title: "University Management & Student Apps", description: "Systems with secure authentication, real-time notifications, and dashboards." }
];

const awards = [
    "Nominated for Padma Shri Award 2024 (Science & Engineering)",
    "Winner / Top Performer in multiple national & international hackathons",
    "Google Cloud Skill Boost – Silver League (AI & Generative Models)",
    "Young Scientist Awards (National Level)",
    "KVPY Fellow (SX)",
    "Scientist for a Day – NASA",
    "100+ recognitions in innovation, coding, and research",
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
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><GraduationCap className="size-5 text-primary" /> Educational Background</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                     <div>
                        <p className="font-semibold">B.Tech in Computer Science & Engineering</p>
                        <p className="text-sm text-muted-foreground">Maharishi Markandeshwar (Deemed to be University), Haryana</p>
                        <p className="text-xs text-muted-foreground">CGPA: 7.95 / 10</p>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Cpu className="size-5 text-primary" /> Technical Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div>
                        <p className="font-semibold text-sm">Programming & Systems</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                            <Badge variant="secondary">C/C++</Badge>
                            <Badge variant="secondary">Python</Badge>
                            <Badge variant="secondary">Java</Badge>
                            <Badge variant="secondary">JavaScript</Badge>
                            <Badge variant="secondary">SQL</Badge>
                            <Badge variant="secondary">React.js</Badge>
                            <Badge variant="secondary">Node.js</Badge>
                        </div>
                    </div>
                     <div>
                        <p className="font-semibold text-sm">AI / ML & Data</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                            <Badge variant="secondary">Deep Learning</Badge>
                            <Badge variant="secondary">NLP</Badge>
                            <Badge variant="secondary">Computer Vision</Badge>
                            <Badge variant="secondary">Pandas</Badge>
                            <Badge variant="secondary">NumPy</Badge>
                        </div>
                    </div>
                     <div>
                        <p className="font-semibold text-sm">Tools & Platforms</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                            <Badge variant="secondary">Git</Badge>
                            <Badge variant="secondary">Google Cloud</Badge>
                            <Badge variant="secondary">Microservices</Badge>
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
                Deepak Kumar is a software engineer, AI/ML practitioner, and examination systems innovator with over 4 years of strong professional and research experience in building large-scale, secure, and intelligent digital platforms. He is the Founder and Chief Exam Cell Officer of Indian Education Exam Cell (IEEC), India, a national-level examination technology initiative focused on automated question paper generation, evaluation logic, and academic standardization.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Deepak uniquely combines deep technical expertise, government-grade examination exposure, and real-world experience of India’s most competitive selection systems, making IEEC a credible, policy-aware, and future-ready examination platform.
              </p>
            </div>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Briefcase className="size-5 text-primary" /> Industry & Research Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   {professionalExperience.map((exp, index) => (
                       <div key={index}>
                           <p className="font-semibold">{exp.title} - <span className="font-normal text-accent">{exp.company}</span></p>
                           <p className="text-sm text-muted-foreground italic">{exp.duration}</p>
                           <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                       </div>
                   ))}
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Flag className="size-5 text-primary" /> Flagship Projects & Innovation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                   {flagshipProjects.map((proj, index) => (
                       <div key={index}>
                           <p className="font-semibold">{proj.title}</p>
                           <p className="text-sm text-muted-foreground">{proj.description}</p>
                       </div>
                   ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Trophy className="size-5 text-primary" /> Civil Services, Government & Defence Credentials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-md mb-2">Civil Services & Government Selections</h4>
                        {governmentCredentials.map((cred, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="size-5 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-muted-foreground">{cred}</p>
                            </div>
                        ))}
                    </div>
                     <div>
                        <h4 className="font-semibold text-md mb-2">Defence Services (SSB Experience)</h4>
                        {defenceCredentials.map((cred, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <ShieldCheck className="size-5 text-blue-600 mt-0.5 shrink-0" />
                                <p className="text-muted-foreground">{cred}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">These experiences gave him deep insight into examination fairness, evaluation depth, confidentiality, and national-level assessment standards—all of which directly shape IEEC.</p>
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

            <div>
              <h2 className="font-headline text-2xl font-bold text-primary mb-2">Founder’s Vision & Role at IEEC</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                IEEC was founded to eliminate manual paper setting errors, repetition and leakage risks, cognitive imbalance in exams, and non-uniform standards. It replaces them with AI-driven, government-format structured papers for immediate, reliable, and fair assessments.
              </p>
                <p className="text-muted-foreground leading-relaxed">
                    As Chief Exam Cell Officer, Deepak Kumar has exclusive authorization for question paper generation, monitors all registered institutions, and ensures syllabus mapping, marks-wise distribution, Bloom’s Taxonomy cognitive balance, and authority-specific formats, while maintaining a centralized national exam cell dashboard and overseeing confidentiality, auditability, and quality control.
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
