import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const MediaCard = () => {
  return (
    <div className="mt-10 sm:mt-28 space-y-12">
      <Card className="grid items-center gap-6 border-none shadow-none md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Image
            src="/hero.jpg"
            alt="Featured Project"
            width={600}
            height={400}
            className="h-64 w-full rounded-lg object-cover md:h-auto"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
        <div className="order-1 space-y-4 md:order-2">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Youtube
            </div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Ram Mandir | IIT-Roorkee Professors Decode "Brand Ayodhya"
            </h2>
          </div>
          <p className="text-muted-foreground">
            Watch me and my collegue dive deep into the Brand of Ayodhya and
            discuss the impacts of the recent Ram Mandir development project.
          </p>
          <Button variant="default">
            <Link
              href="https://www.youtube.com/watch?v=t3319BG6GdQ"
              prefetch={false}
            >
              View Video
            </Link>
          </Button>
        </div>
      </Card>
      <Card className="grid items-center gap-6 border-none shadow-none md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Image
            src="/hero.jpg"
            alt="Featured Project"
            width={600}
            height={400}
            className="h-64 w-full rounded-lg object-cover md:h-auto"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
        <div className="order-1 space-y-4 md:order-2">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Spotify
            </div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Stop predicting, Revisit life
            </h2>
          </div>
          <p className="text-muted-foreground">
            Watch me and my collegue dive deep into the Brand of Ayodhya and
            discuss the impacts of the recent Ram Mandir development project.
          </p>

          <Button variant="default">
            <Link
              href="https://open.spotify.com/episode/3Da06X2JHdDRiAyeO1Tgvv"
            prefetch={false}
            >
              Listen Podcast
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MediaCard;
