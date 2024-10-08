import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

const BookSection = () => {
  return (
    <div>
      <div>
        <BookCard />
      </div>
    </div>
  );
};

export default BookSection;

export const BookCard = () => {
  return (
    <div>
      <section className="w-full ">
        <div className="container grid gap-1 drop-shadow-2xl ">
          <div className="mb-12 space-y-3 text-center sm:mb-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Book Collection
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover a world of knowledge and inspiration in our carefully
              curated selection of books.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Image
                src="/book/book1.jpg"
                alt="The Alchemist"
                width={400}
                height={600}
                className="h-[400px] w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                style={{ aspectRatio: "400/600", objectFit: "cover" }}
              />
              <div className="bg-background/80 p-4 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-medium">
                  Affordability for The Poor
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  A model balances healthcare costs and profits in rural Uttar
                  Pradesh through market and health initiatives{" "}
                </p>
                <Button size="sm" variant="link" className="">
                  Read more <ArrowRightIcon size={20} />
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Image
                src="/book/book2.jpg"
                alt="Atomic Habits"
                width={400}
                height={600}
                className="h-[400px] w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                style={{ aspectRatio: "400/600", objectFit: "cover" }}
              />
              <div className="bg-background p-4">
                <h3 className="mb-2 text-xl font-medium">Masters Speak</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Examines the evolution and future of management education in
                  India through expert interviews.
                </p>
                <Button size="sm" variant="link">
                  Read more <ArrowRightIcon size={20} />
                </Button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Image
                src="/book/book3.jpg"
                alt="Sapiens"
                width={400}
                height={600}
                className="h-[400px] w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                style={{ aspectRatio: "400/600", objectFit: "cover" }}
              />
              <div className="bg-background p-4">
                <h3 className="mb-2 text-xl font-medium">
                  Stop Predicting Revisit Life
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  It reviews India's COVID-19 response and suggests future
                  strategies, improvements, and initiatives.
                </p>
                <Button size="sm" variant="link">
                  Read more <ArrowRightIcon size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
