import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" rounded-3xl mt-20 relative h-[60vh] min-h-[600px] w-full overflow-hidden bg-gray-100">
      <Image
        src="/hero.jpg?height=1080&width=1920"
        alt="IIT Roorkee campus or lecture hall"
        width={1920}
        height={1080}
        className="absolute inset-0 object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70" aria-hidden="true" />
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Dr. Vinay Sharma
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6">
          Faculty at Department of Management Studies
        </p>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
          Indian Institute of Technology Roorkee
        </p>
         
        <Link

        href="/about"
        className="mt-8     "
        >
         <Button> Learn More</Button>
        </Link>
      </div>
    </section>
    // <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
    //   <Image
    //     src="/placeholder.svg?height=1080&width=1920"
    //     alt="Hero background"
    //     width={1920}
    //     height={1080}
    //     className="absolute inset-0 object-cover w-full h-full"
    //     priority
    //   />
    //   <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />
    //   <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
    //     <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
    //       Welcome to Our Amazing Website
    //     </h1>
    //   </div>
    // </section>
    // <section className="mb-16 mt-5 drop-shadow-2xl md:mt-24 lg:mt-32">
    //   <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
    //     <div className="order-2 space-y-4 sm:order-1">
    //       <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
    //         Professor
    //       </div>
    //       <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //         Dr. Vinay Sharma
    //       </h1>
    //       <p className="text-muted-foreground md:text-xl">
    //         Faculty at DoMS, IIT Roorkee
    //       </p>
    //       <p className="max-w-[600px] text-justify text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //         An educator, researcher and marketing expert, Dr Vinay Sharma is a
    //         professor from Roorkee, India. He is a distinguished academic with
    //         over two decades of experience in marketing, branding, integrated
    //         marketing communication, strategy and innovation. A design thinker,
    //         Dr Vinay Sharma combines his knowledge on innovation and marketing
    //         in his works and directs them towards causes closer to his heart.
    //         Having received multiple awards and accolades for his works, Dr
    //         Vinay Sharma currently works as a professor at the prestigious
    //         Indian Institute of Technology, Roorkee guiding his group of
    //         research scholars, project teams and undergraduate and master
    //         students.
    //       </p>
    //       <Button asChild variant="default" className="">
    //         <Link href="/about">Leran More</Link>
    //       </Button>
    //     </div>
    //     {/* Todo: fix iamge loade time */}
    //     <Image
    //       src="/me.png"
    //       width="1800"
    //       height="1800"
    //       alt="John Doe"
    //       className="mx-auto aspect-square overflow-hidden rounded-3xl object-cover drop-shadow-2xl sm:order-2 sm:w-full"
    //     />
    //   </div>
    // </section>
  );
};

export default HeroSection;
