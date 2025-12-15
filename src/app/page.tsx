import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, BrainCircuit, FileCheck, Target, Eye, Trophy } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';
import { Logo } from '@/components/logo';

const featureCards = [
  {
    icon: <BookOpen className="size-8 text-primary" />,
    title: 'Diverse Exam Support',
    description: 'From K-12 and university exams to specialized government tests, our platform caters to all educational levels.',
  },
  {
    icon: <BrainCircuit className="size-8 text-primary" />,
    title: 'AI-Powered Generation',
    description: 'Leverage our advanced AI, grounded in Bloom\'s Taxonomy, to create balanced and effective question papers instantly.',
  },
  {
    icon: <FileCheck className="size-8 text-primary" />,
    title: 'Standardized Formatting',
    description: 'Generate question papers in government-approved formats like CBSE, ensuring compliance and professionalism.',
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
      description: "To be the cornerstone of educational assessment in India, fostering a fair and effective evaluation system through the seamless integration of technology and pedagogy.",
    },
    {
      icon: <Trophy className="size-12 text-primary" />,
      title: "Our Mission",
      description: "To revolutionize exam preparation by equipping educational institutions with an AI-driven platform that upholds the highest standards of academic integrity and excellence.",
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
             <Link href="#mission" className="hover:text-primary-foreground/80">About Us</Link>
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
                Revolutionizing Exam Paper Generation
              </h1>
              <p className="mt-4 max-w-2xl text-primary-foreground/80 md:text-xl">
                Instantly create high-quality, standardized question papers for any subject, any class. Powered by AI, designed for India.
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
                  <CardTitle className="font-headline text-xl mb-2 text-primary">{feature.title}</CardTitle>
                  <CardContent className="p-0 text-muted-foreground">{feature.description}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="py-20 bg-background">
          <div className="container">
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
