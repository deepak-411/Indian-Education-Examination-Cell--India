
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, BrainCircuit, FileCheck, Target, Eye, Trophy, ShieldCheck, LockKeyhole, Server, Users, FileText, Bot } from 'lucide-react';
import { Logo } from '@/components/logo';
import { HeroCarousel } from './hero-carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const featureCards = [
  {
    icon: <Users className="size-8 text-primary" />,
    title: 'For All Institutions',
    description: 'Catering to Schools (K-12), Universities (UG/PG), and Government Bodies for all academic and competitive examination needs.',
  },
  {
    icon: <BrainCircuit className="size-8 text-primary" />,
    title: 'Cognitive Balance',
    description: 'Our AI is grounded in Bloom\'s Taxonomy, ensuring a balanced mix of questions that test memory, application, and critical thinking.',
  },
  {
    icon: <FileCheck className="size-8 text-primary" />,
    title: 'Standardized Formatting',
    description: 'Automatically generate papers in government-approved formats (e.g., CBSE, NTA), ensuring full compliance and a professional layout.',
  },
];

const frameworkItems = [
    {
      value: "aim",
      icon: <Target className="size-8 text-accent" />,
      title: "Our Aim: To Eradicate Examination Malpractice",
      description: "Our primary objective is to build a zero-vulnerability framework that permanently eliminates the risks of paper leaks and unauthorized access. We aim to restore integrity and trust in the examination process by making it transparent, secure, and immune to external interference.",
    },
    {
      value: "vision",
      icon: <Eye className="size-8 text-accent" />,
      title: "Our Vision: A National Standard for Assessment",
      description: "We envision a future where every educational and governmental institution in India relies on a single, unified platform for fair and effective assessment. Our goal is to become the cornerstone of educational evaluation, fostering a level playing field for every student through cutting-edge technology.",
    },
    {
      value: "mission",
      icon: <Trophy className="size-8 text-accent" />,
      title: "Our Mission: Revolutionizing Exam Creation & Delivery",
      description: "Our mission is to empower educators and administrators by equipping them with an AI-driven platform that upholds the highest standards of academic integrity. We are committed to revolutionizing both the creation of examination content and its secure delivery, whether online or offline.",
    },
];

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
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
             <Link href="#features" className="hover:text-primary-foreground/80">Features</Link>
             <Link href="#problem" className="hover:text-primary-foreground/80">The Problem</Link>
             <Link href="#solution" className="hover:text-primary-foreground/80">Our Solution</Link>
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

      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter">
                Securing India's Examination Future
              </h1>
              <p className="mt-4 max-w-2xl text-primary-foreground/80 md:text-xl">
                An AI-driven, government-grade framework to create leak-proof, standardized, and fair question papers for all academic and competitive exams.
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/register">Get Started <ArrowRight className="ml-2 size-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-full w-full min-h-[300px] rounded-lg overflow-hidden shadow-2xl">
              <HeroCarousel />
            </div>
          </div>
           <div className="absolute inset-0 -z-10 bg-primary" />
        </section>

        <section id="problem" className="py-16 bg-muted/40">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">The Crisis in Examination Integrity</h2>
              <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
                In today's high-stakes environment, creating secure and fair question papers is a monumental challenge. News of paper leaks from government exams—like State PSCs, UPPSC, BPSC, NEET, and NET JRF—has become distressingly common, eroding trust and jeopardizing futures. Manual processes are slow, prone to error, and create unacceptable security risks.
              </p>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureCards.map((feature, index) => (
                <Card key={index} className="flex flex-col text-center items-center p-6 bg-card hover:shadow-lg transition-shadow">
                  <div className="mb-4 bg-primary/10 p-3 rounded-full">{feature.icon}</div>
                  <CardTitle className="font-headline text-xl mb-2 text-primary">{feature.title}</CardTitle>
                  <CardContent className="p-0 text-muted-foreground">{feature.description}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="py-20 bg-background">
          <div className="container space-y-16">
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">A Framework for Trust and Excellence</h2>
              <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
                The Indian Education Exam Cell (IEEC) provides an end-to-end ecosystem designed to eliminate vulnerabilities and automate the examination lifecycle with unparalleled privacy, efficiency, and integrity.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible defaultValue="aim" className="w-full">
                    {frameworkItems.map((item) => (
                        <AccordionItem value={item.value} key={item.value}>
                            <AccordionTrigger className="font-headline text-xl hover:no-underline">
                                <div className="flex items-center gap-4">
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground pl-12">
                                {item.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            
            <div>
              <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">What We Offer</h2>
                <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
                  Our dual-mode platform provides comprehensive solutions for both online and offline examination requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 md:p-8">
                  <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                      <Server className="size-10 text-primary" />
                      <CardTitle className="font-headline text-2xl">Secure Online Examination Portal</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-muted-foreground space-y-3">
                     <p>Conduct tamper-proof online examinations through our fully-managed portal, overseen by the Chief Exam Cell Officer (CECO).</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li><span className="font-semibold text-foreground">Advanced Proctoring:</span> AI-powered monitoring detects suspicious activities, including use of tools like Google Lens.</li>
                        <li><span className="font-semibold text-foreground">Controlled Environment:</span> Features mandatory full-screen mode and auto-submission on tab-switching to prevent cheating.</li>
                        <li><span className="font-semibold text-foreground">Flexible Scheduling:</span> The CECO can schedule and deploy exams for any registered institution, from K-12 schools to government bodies.</li>
                      </ul>
                  </CardContent>
                </Card>
                 <Card className="p-6 md:p-8">
                  <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                      <Bot className="size-10 text-primary" />
                      <CardTitle className="font-headline text-2xl">AI-Powered Offline Paper Generation</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-muted-foreground space-y-3">
                     <p>Generate high-quality, standardized question papers for your traditional offline exams in minutes, not days.</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li><span className="font-semibold text-foreground">Instant, Unique Sets:</span> In a single click, generate up to 10 unique sets of a question paper with no overlapping questions, eliminating any possibility of leaks.</li>
                        <li><span className="font-semibold text-foreground">Syllabus-Adherent:</span> Our AI strictly adheres to the provided syllabus, marks distribution, and cognitive level requirements (Bloom's Taxonomy).</li>
                        <li><span className="font-semibold text-foreground">Format-Ready:</span> Papers are generated in official, print-ready formats (e.g., CBSE, NTA), saving hours of manual formatting.</li>
                      </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </section>
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
