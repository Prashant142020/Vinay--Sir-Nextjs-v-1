import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CoursesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
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
        <div className="lg:grid-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="group relative">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Course</span>
            </Link>
            <img
              src="/hero.jpg"
              alt="Course Image"
              width={400}
              height={225}
              className="w-full rounded-lg object-cover transition-opacity group-hover:opacity-50"
              style={{ aspectRatio: "400/225", objectFit: "cover" }}
            />
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold tracking-tight">
                Innovation, Business Models And Entrepreneurship
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis repellendus repellat fuga
              </p>
              <Link
                href="#"
                className="inline-flex items-center font-medium text-primary hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="group relative">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Course</span>
            </Link>
            <img
              src="/hero.jpg"
              alt="Course Image"
              width={400}
              height={225}
              className="w-full rounded-lg object-cover transition-opacity group-hover:opacity-50"
              style={{ aspectRatio: "400/225", objectFit: "cover" }}
            />
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold tracking-tight">
                Product And Brand Management
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis repellendus repellat fuga repellendus repellat
                repellendus repellat fuga
              </p>
              <Link
                href="#"
                className="inline-flex items-center font-medium text-primary hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="group relative">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Course</span>
            </Link>
            <img
              src="/hero.jpg"
              alt="Course Image"
              width={400}
              height={225}
              className="w-full rounded-lg object-cover transition-opacity group-hover:opacity-50"
              style={{ aspectRatio: "400/225", objectFit: "cover" }}
            />
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold tracking-tight">
                Integrated Marketing Communication
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis repellendus repellat fuga
              </p>
              <Link
                href="#"
                className="inline-flex items-center font-medium text-primary hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="group relative">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Course</span>
            </Link>
            <img
              src="/hero.jpg"
              alt="Course Image"
              width={400}
              height={225}
              className="w-full rounded-lg object-cover transition-opacity group-hover:opacity-50"
              style={{ aspectRatio: "400/225", objectFit: "cover" }}
            />
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold tracking-tight">
                Innovation in Marketing and Marketing of Innovation
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis repellendus repellat fuga
              </p>
              <Link
                href="#"
                className="inline-flex items-center font-medium text-primary hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="group relative">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Course</span>
            </Link>
            <img
              src="/hero.jpg"
              alt="Course Image"
              width={400}
              height={225}
              className="w-full rounded-lg object-cover transition-opacity group-hover:opacity-50"
              style={{ aspectRatio: "400/225", objectFit: "cover" }}
            />
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold tracking-tight">
                Strategic Management
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis repellendus repellat fuga Debitis repellendus repellat
                fuga repellendus repellat fuga
              </p>
              <Link
                href="#"
                className="inline-flex items-center font-medium text-primary hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="mt-10 w-full">
    //   <div className="mb-4 flex justify-between">
    //     <span className="text-3xl font-semibold">Courses</span>
    //   </div>
    //   <Separator />
    //   <div>
    //     <ul className="mt-8 list-disc px-6 text-lg font-semibold text-muted-foreground">
    //       <Link href="https://onlinecourses.nptel.ac.in/noc23_mg116/preview">
    //         <li className="mb-2 hover:underline">
    //           Innovation, Business Models and Entrepreneurship
    //         </li>
    //       </Link>
    //       <Link href="https://onlinecourses.nptel.ac.in/noc23_mg110/preview">
    //         <li className="mb-2 hover:underline">
    //           Product And Brand Management
    //         </li>
    //       </Link>
    //       <Link href="https://onlinecourses.nptel.ac.in/noc23_mg32/preview">
    //         {" "}
    //         <li className="mb-2 hover:underline">
    //           Integrated Marketing Communication
    //         </li>
    //       </Link>
    //       <Link href="https://onlinecourses.nptel.ac.in/noc24_mg25/preview">
    //         {" "}
    //         <li className="mb-2 hover:underline">
    //           Innovation in Marketing and Marketing of Innovation
    //         </li>
    //       </Link>
    //       <Link href="https://onlinecourses.nptel.ac.in/noc24_mg112/previews">
    //         {" "}
    //         <li className="mb-2 hover:underline">Strategic Management</li>
    //       </Link>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default CoursesSection;
