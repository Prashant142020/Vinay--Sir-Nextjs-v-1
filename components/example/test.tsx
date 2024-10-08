"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  learnMoreUrl: string;
}

export default function Component() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const cards: CardData[] = [
    {
      id: 1,
      title: "Mountain Retreat",
      description: "Escape to the serene mountains for a peaceful getaway.",
      imageUrl: "/hero.jpg?height=200&width=300",
      learnMoreUrl: "#mountain-retreat",
    },
    {
      id: 2,
      title: "Beach Paradise",
      description: "Relax on pristine beaches with crystal clear waters.",
      imageUrl: "/hero.jpg?height=200&width=300",
      learnMoreUrl: "#beach-paradise",
    },
    {
      id: 3,
      title: "City Adventure",
      description: "Explore vibrant city life and cultural attractions.",
      imageUrl: "/hero.jpg?height=200&width=300",
      learnMoreUrl: "#city-adventure",
    },
    {
      id: 4,
      title: "Forest Expedition",
      description: "Discover the wonders of lush, ancient forests.",
      imageUrl: "/hero.jpg?height=200&width=300",
      learnMoreUrl: "#forest-expedition",
    },
    {
      id: 5,
      title: "Desert Oasis",
      description: "Experience the mystique of vast desert landscapes.",
      imageUrl: "/hero.jpg?height=200&width=300",
      learnMoreUrl: "#desert-oasis",
    },
  ];

  const startAutoplay = () => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    autoplayIntervalRef.current = setInterval(() => {
      if (emblaApi && !isPaused) emblaApi.scrollNext();
    }, 3000); // 3-second interval for autoplay
  };

  const stopAutoplay = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  };

  useEffect(() => {
    if (emblaApi) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [emblaApi, isPaused]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full"
    >
      <Carousel
        ref={emblaRef}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {cards.map((card) => (
            <CarouselItem key={card.id} className="pl-2 md:basis-1/3 md:pl-4">
              <Card className="h-full">
                <CardHeader className="p-0">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    width={300}
                    height={200}
                    className="h-48 w-full rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="mb-2 text-lg font-semibold">
                    {card.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild variant="outline" size="sm">
                    <a href={card.learnMoreUrl}>Learn More</a>
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
