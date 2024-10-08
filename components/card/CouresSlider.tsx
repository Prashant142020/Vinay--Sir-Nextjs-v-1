"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

interface CardData {
  id: number;
  title: string;
  content: string;
  link: string;
  image: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Innovation, Business Models And Entrepreneurship",
    content:
      "The course offers a thorough insight into innovation, entrepreneurship, and business models, emphasizing practical strategies. ",
    link: "/learn-more/1",
    image: "/hero.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Product And Brand Management",
    content:
      "The course is essential for students and professionals, including leaders in various organizations, offering a comprehensive knowledge package by combining two key subjects.",
    link: "/learn-more/2",
    image: "/hero.jpg?height=300&width=400",
  },
  {
    id: 3,
    title: "Integrated Marketing Communication",
    content:
      "The course teaches planning, executing, and evaluating marketing communication strategies, focusing on media integration, consumer behavior, and the strategic role of Integrated Marketing Communications (IMC).",
    link: "/learn-more/3",
    image: "/hero.jpg?height=300&width=400",
  },
  {
    id: 4,
    title: "Innovation in Marketing and Marketing of Innovation",
    content:
      "This course integrates marketing and innovation, offering both conceptual and practical knowledge to help students, executives, and entrepreneurs understand and apply innovation in marketing and marketing of innovation.",
    link: "/learn-more/4",
    image: "/hero.jpg?height=300&width=400",
  },
  {
    id: 5,
    title: "Strategic Management",
    content:
      "This course equips students with the skills to visualize, plan, and execute complex strategies to achieve organizational goals, understand industry changes, and develop new competencies, blending conceptual knowledge with practical applications.",
    link: "/learn-more/5",
    image: "/hero.jpg?height=300&width=400",
  },
];

export default function Component(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [autoplay, setAutoplay] = React.useState<boolean>(true);

  const handlePrevious = React.useCallback((): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1,
    );
  }, []);

  const handleNext = React.useCallback((): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext]);

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % cards.length;
      visibleCards.push(cards[index]);
    }
    return visibleCards;
  };

  return (
    <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="grid gap-1">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Our Nptel Courses
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find the perfect course to enhance your skills.
          </p>
        </div>
        <Link
          href="/courses"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          View All
        </Link>
      </div>

      <div className="px-4 py-8">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {getVisibleCards().map((card) => (
              <CarouselItem key={card.id} className="pl-2 md:basis-1/3 md:pl-4">
                <Card className="flex h-[400px] flex-col overflow-hidden">
                  <CardContent className="flex flex-grow flex-col p-0">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                    <div className="flex flex-grow flex-col bg-card p-4 text-card-foreground">
                      <h3 className="mb-2 line-clamp-2 h-14 text-lg font-semibold">
                        {card.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 flex-grow text-sm">
                        {card.content}
                      </p>
                      <Link href={card.link} passHref className="mt-auto">
                        <Button variant="default" size="sm" className="">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-4 flex justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              handlePrevious();
              setAutoplay(false);
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              handleNext();
              setAutoplay(false);
            }}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAutoplay(!autoplay)}
          >
            {autoplay ? "Pause" : "Play"}
          </Button>
        </div>
      </div>
    </div>
  );
}
