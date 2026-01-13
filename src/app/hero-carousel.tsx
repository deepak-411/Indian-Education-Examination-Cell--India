'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';
import { generateCarouselImages } from '@/ai/flows/generate-carousel-images';
import { Skeleton } from '@/components/ui/skeleton';

interface CarouselImage {
  imageUrl: string;
  altText: string;
}

export function HeroCarousel() {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true);
        const result = await generateCarouselImages();
        setImages(result.images);
      } catch (error) {
        console.error('Failed to generate carousel images:', error);
        // Optionally, set fallback images here
      } finally {
        setLoading(false);
      }
    }
    loadImages();
  }, []);

  if (loading) {
    return <Skeleton className="w-full h-full" />;
  }

  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full h-full"
      opts={{ loop: true }}
    >
      <CarouselContent className="h-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={image.imageUrl}
                alt={image.altText}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
