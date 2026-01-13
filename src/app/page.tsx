import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, BrainCircuit, FileCheck, Target, Eye, Trophy, ShieldCheck, LockKeyhole, Server } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';
import { Logo } from '@/components/logo';

const featureCards = [
  {
    icon: <BookOpen className="size-8 text-primary" />,
    title: 'Comprehensive Exam Support',
    description: 'From K-12 and university exams to specialized government tests, our platform caters to all educational levels and formats.',
  },
  {
    icon: <BrainCircuit className="size-8 text-primary" />,
    title: 'AI-Powered Generation',
    description: 'Leverage our advanced AI, grounded in Bloom\'s Taxonomy, to create cognitively balanced and effective question papers instantly.',
  },
  {
    icon: <FileCheck className="size-8 text-primary" />,
    title: 'Standardized Formatting',
    description: 'Generate question papers in government-approved formats (e.g., CBSE, NTA), ensuring compliance and professionalism.',
  },
];

const missionVisionAim = [
    {
      icon: <Target className="size-12 text-primary" />,
      title: "Our Aim",
      description: "To empower educators by providing an intelligent, streamlined, and reliable tool for instant question paper generation, simplifying the examination process across India.",
    },
    {
      icon: <Eye className="size-12 text-primary" />,
      title: "Our Vision",
      description: "To be the cornerstone of educational assessment in India, fostering a fair, transparent, and effective evaluation system through the seamless integration of technology and pedagogy.",
    },
    {
      icon: <Trophy className="size-12 text-primary" />,
      title: "Our Mission",
      description: "To revolutionize exam preparation by equipping educational institutions with an AI-driven platform that upholds the highest standards of academic integrity, security, and excellence.",
    },
];

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero-image");

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
            <div className="relative h-64 md:h-full w-full min-h-[300px]">
               {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  data-ai-hint={heroImage.imageHint}
                  priority
                  unoptimized
                />
              )}
            </div>
          </div>
           {heroImage && (
            <div className="absolute inset-0 -z-10 bg-primary" />
          )}
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
                The Indian Education Exam Cell (IEEC) provides a comprehensive solution. Our software is an end-to-end ecosystem designed to eliminate vulnerabilities and automate the examination lifecycle with unparalleled privacy and efficiency.
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               {missionVisionAim.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-headline text-2xl font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

             <div>
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Launching Soon: The Future of Online Examinations</h2>
                    <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
                        Beyond paper generation, IEEC is developing a fully integrated online examination portal, authorized and overseen by the Chief Exam Cell Officer (CECO).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="p-6">
                        <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                            <LockKeyhole className="size-10 text-primary" />
                            <CardTitle className="font-headline text-xl">Full Proctoring & Security</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 text-muted-foreground text-sm space-y-2">
                           <p>Mandatory full-screen mode to ensure candidate focus.</p>
                           <p>Tab-switching triggers auto-submission, preventing unauthorized access to external resources.</p>
                           <p>Advanced AI proctoring to detect suspicious activities, including the use of tools like Google Lens.</p>
                        </CardContent>
                    </Card>
                     <Card className="p-6">
                        <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                            <ShieldCheck className="size-10 text-primary" />
                            <CardTitle className="font-headline text-xl">Controlled Environment</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 text-muted-foreground text-sm space-y-2">
                           <p>Once submitted or auto-submitted, re-entry is blocked to maintain exam integrity and prevent cheating.</p>
                           <p>The CECO holds the authority to switch between online and offline modes based on security and logistical needs.</p>
                        </CardContent>
                    </Card>
                     <Card className="p-6">
                        <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                            <Server className="size-10 text-primary" />
                            <CardTitle className="font-headline text-xl">Seamless Scheduling & Delivery</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 text-muted-foreground text-sm space-y-2">
                           <p>Schedule exams for any institution: Schools (Classes 1-12), Colleges (UG/PG), and Government Bodies.</p>
                           <p>All exam submissions and results are securely compiled and delivered to the authorized official email, `dk3624897@gmail.com`.</p>
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
