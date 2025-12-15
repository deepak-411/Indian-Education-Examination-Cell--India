import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, BrainCircuit, FileCheck, Target, Eye, Trophy } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';
import { Logo } from '@/components/logo';

const featureCards = [
  {
    icon: <BookOpen className="size-8 text-accent" />,
    title: 'Diverse Exam Support',
    description: 'From K-12 and university exams to specialized government tests, our platform caters to all educational levels.',
  },
  {
    icon: <BrainCircuit className="size-8 text-accent" />,
    title: 'AI-Powered Generation',
    description: 'Leverage our advanced AI, grounded in Bloom\'s Taxonomy, to create balanced and effective question papers instantly.',
  },
  {
    icon: <FileCheck className="size-8 text-accent" />,
    title: 'Standardized Formatting',
    description: 'Generate question papers in government-approved formats like CBSE, ensuring compliance and professionalism.',
  },
];

const missionVisionAim = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Our Aim",
      description: "To empower educators by providing an intelligent, streamlined, and reliable tool for instant question paper generation, simplifying the examination process across India.",
    },
    {
      icon: <Eye className="h-12 w-12 text-primary" />,
      title: "Our Vision",
      description: "To be the cornerstone of educational assessment in India, fostering a fair and effective evaluation system through the seamless integration of technology and pedagogy.",
    },
    {
      icon: <Trophy className="h-12 w-12 text-primary" />,
      title: "Our Mission",
      description: "To revolutionize exam preparation by equipping educational institutions with an AI-driven platform that upholds the highest standards of academic integrity and excellence.",
    },
];

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero-image");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="size-12" />
            <div className="flex flex-col">
              <span className="font-headline text-lg font-bold leading-tight text-primary">
                Indian Education
              </span>
              <span className="font-headline text-lg font-bold leading-tight text-primary">
                Exam Cell
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
             <Link href="#features" className="text-foreground/80 hover:text-foreground">Features</Link>
             <Link href="#about" className="text-foreground/80 hover:text-foreground">About Us</Link>
             <Link href="/dashboard" className="text-foreground/80 hover:text-foreground">Dashboard</Link>
          </nav>
          <div className="flex items-center justify-end space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-20 md:py-32">
          <div className="container text-center">
            <div className="bg-primary/10 rounded-full px-4 py-2 inline-block mb-4 border border-primary/20">
              <p className="text-primary font-semibold">Welcome to Indian Education Exam Cell, India</p>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">
              AI-Powered Question Paper Generation
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Instantly create high-quality, standardized question papers for any subject and any class. Designed for India's diverse educational needs.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/register">Get Started <ArrowRight className="ml-2 size-5" /></Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
           {heroImage && (
            <div className="absolute inset-0 -z-10 opacity-5">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
                unoptimized
              />
            </div>
          )}
        </section>

        <section id="features" className="py-16 bg-muted/40">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">The Future of Examination</h2>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Our platform is meticulously designed to serve the diverse needs of India's educational landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureCards.map((feature, index) => (
                <Card key={index} className="flex flex-col text-center items-center p-6 bg-card hover:shadow-lg transition-shadow">
                  <div className="mb-4 bg-primary/10 p-3 rounded-full">{feature.icon}</div>
                  <CardTitle className="font-headline text-xl mb-2">{feature.title}</CardTitle>
                  <CardContent className="p-0 text-muted-foreground">{feature.description}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container">
             <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Foundation</h2>
               <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Driven by a clear purpose to revolutionize educational assessments in India.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {missionVisionAim.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-headline text-2xl font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo className="size-8" />
            <p className="text-sm font-semibold font-headline text-primary">Indian Education Exam Cell</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IEEC, India. All rights reserved.
          </p>
           <nav className="flex items-center gap-4 text-sm font-medium">
             <Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link>
             <Link href="#about" className="text-muted-foreground hover:text-foreground">About Us</Link>
             <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
