import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const ProjectsCard = () => {
  return (
    <div className="mt-20">
      <div>
        <div className="mb-12 space-y-10">
          <Card className="grid items-center gap-6 border-none md:grid-cols-2">
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
                  Featured
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Acme Web Application
                </h2>
              </div>
              <p className="text-muted-foreground">
                A comprehensive web application built for the Acme Corporation,
                featuring a modern and intuitive user interface, powerful
                analytics, and seamless integration with their existing systems.
              </p>
              <div className="">
                <Link
                  href="#"
                  className="text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Card>
          <Card className="grid items-center gap-6 border-none md:grid-cols-2">
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
                  Featured
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Acme Web Application
                </h2>
              </div>
              <p className="text-muted-foreground">
                A comprehensive web application built for the Acme Corporation,
                featuring a modern and intuitive user interface, powerful
                analytics, and seamless integration with their existing systems.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Card>
          <Card className="grid items-center gap-6 border-none md:grid-cols-2">
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
                  Featured
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Acme Web Application
                </h2>
              </div>
              <p className="text-muted-foreground">
                A comprehensive web application built for the Acme Corporation,
                featuring a modern and intuitive user interface, powerful
                analytics, and seamless integration with their existing systems.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="text-primary hover:underline"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="border-none">
              <CardHeader>
                <img
                  src="/hero.jpg"
                  alt="Project 1"
                  width={600}
                  height={400}
                  className="h-40 w-full rounded-t-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-sm text-muted-foreground">
                  A brief description of Project 1.
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="link" size="sm">
                  View Project
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-none">
              <CardHeader>
                <img
                  src="/hero.jpg"
                  alt="Project 1"
                  width={600}
                  height={400}
                  className="h-40 w-full rounded-t-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-sm text-muted-foreground">
                  A brief description of Project 1.
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="link" size="sm">
                  View Project
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-none">
              <CardHeader>
                <img
                  src="/hero.jpg"
                  alt="Project 1"
                  width={600}
                  height={400}
                  className="h-40 w-full rounded-t-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-sm text-muted-foreground">
                  A brief description of Project 1.
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="link" size="sm">
                  View Project
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-none">
              <CardHeader>
                <img
                  src="/hero.jpg"
                  alt="Project 1"
                  width={600}
                  height={400}
                  className="h-40 w-full rounded-t-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-sm text-muted-foreground">
                  A brief description of Project 1.
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="link" size="sm">
                  View Project
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-none">
              <CardHeader>
                <img
                  src="/hero.jpg"
                  alt="Project 1"
                  width={600}
                  height={400}
                  className="h-40 w-full rounded-t-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p className="text-sm text-muted-foreground">
                  A brief description of Project 1.
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="link" size="sm">
                  View Project
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
