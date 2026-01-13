'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { placeholderImages } from '@/lib/placeholder-images';

export function HeroCarousel() {
  const carouselImages = placeholderImages.filter(p => p.id.startsWith('hero-carousel'));

  return (
    <Carousel 
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full h-full"
      opts={{ loop: true }}
    >
      <CarouselContent className="h-full">
        {carouselImages.map((image) => (
          <CarouselItem key={image.id} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
