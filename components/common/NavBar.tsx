"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ModeToggle } from "../ModeToggle";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="drop-shadow-sm">
      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between px-2 py-3">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-semibold">Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <Link href="/about" className="text-lg font-medium hover:underline">
              About
            </Link>
            <Link
              href="/talks"
              className="text-lg font-medium hover:underline"
            ></Link>

            <Link
              href="/projects"
              className="text-lg font-medium hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/courses"
              className="text-lg font-medium hover:underline"
            >
              Course
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:underline"
            >
              Contact
            </Link>
            <div className="text-lg">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg">
                      Recommended
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      <div className="h-24 w-[100px] gap-2 p-3">
                        <p className="hover:bg-gray-100 dark:hover:bg-zinc-800">
                          {" "}
                          <Link href="/poem"> Poem</Link>
                        </p>

                        <p className="hover:bg-gray-100 dark:hover:bg-zinc-800">
                          {" "}
                          <Link href="/teaching/training">Training</Link>
                        </p>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <ModeToggle />
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className={`w-full p-2 shadow-sm lg:hidden ${menu ? "py-1" : ""} `}>
        <div className="flex justify-between">
          <div className="flex select-none items-center gap-[50px] text-[16px]">
            <Link href="/">
              <span className="text-xl font-semibold">Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="t cursor-pointer text-black animate-in fade-in zoom-in dark:text-white"
                onClick={toggleMenu}
              />
            ) : (
              <div className="flex items-center gap-1">
                <ModeToggle />
                <Menu
                  className="text-black dark:text-white"
                  onClick={toggleMenu}
                />
              </div>
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-6">
              <Link
                onClick={toggleMenu}
                href="/about"
                className="text-lg font-medium hover:underline"
              >
                About
              </Link>
              <Link
                onClick={toggleMenu}
                href="/projects"
                className="text-lg font-medium hover:underline"
              >
                Projects
              </Link>

              <Link
                onClick={toggleMenu}
                href="/courses"
                className="text-lg font-medium hover:underline"
              >
                Course
              </Link>
              <Link
                onClick={toggleMenu}
                href="/contact"
                className="text-lg font-medium hover:underline"
              >
                Contact
              </Link>
              <div className="text-lg">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger> Recommended</AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-1 space-y-1 text-base font-medium">
                        <p>
                          {" "}
                          <Link onClick={toggleMenu} href="/poem">
                            Poem
                          </Link>
                        </p>
                        <div>
                          <Link onClick={toggleMenu} href="/teaching/training">
                            Training
                          </Link>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default NavBar;

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { MenuIcon } from "lucide-react";
// import { ModeToggle } from "@/components/ModeToggle";

// const NavBar = () => {
//   const [menu, setMenu] = useState(false);

//   const toggleMenu = () => {
//     setMenu(!menu);
//   };
//   return (
//     <nav>
//       <header className="flex h-20 w-full items-center justify-between bg-background">
//         <Link href="/" className="flex items-center gap-3" prefetch={false}>
//           <span className="text-lg font-medium tracking-tighter sm:text-2xl">
//             {" "}
//             Home
//           </span>
//         </Link>
//         <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
//           <Link
//             href="/about"
//             className="text-lg transition-colors hover:text-primary"
//             prefetch={false}
//           >
//             About
//           </Link>
//           <Link
//             href="/projects"
//             className="text-lg transition-colors hover:text-primary"
//             prefetch={false}
//           >
//             Projects
//           </Link>
//           <Link
//             href="/courses"
//             className="text-lg transition-colors hover:text-primary"
//             prefetch={false}
//           >
//             Course
//           </Link>
//           <Link
//             href="/recommended"
//             className="text-lg transition-colors hover:text-primary"
//             prefetch={false}
//           >
//             Recommended
//           </Link>
//           <Link
//             href="/contact"
//             className="text-lg transition-colors hover:text-primary"
//             prefetch={false}
//           >
//             Contact
//           </Link>

//           <ModeToggle />
//         </nav>
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="outline" size="icon" className="md:hidden">
//               <MenuIcon className="h-6 w-6" />
//               <span className="sr-only">Toggle navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="md:hidden">
//             <div className="grid gap-4 p-4">
//               <Link
//                 href="/about"
//                 className="text-lg font-medium transition-colors hover:text-primary"
//                 prefetch={false}
//                 onClick={toggleMenu}
//               >
//                 About
//               </Link>

//               <Link
//                 href="#"
//                 className="text-lg font-medium transition-colors hover:text-primary"
//                 prefetch={false}
//               >
//                 Projects
//               </Link>
//               <Link
//                 href="#"
//                 className="text-lg font-medium transition-colors hover:text-primary"
//                 prefetch={false}
//               >
//                 Course
//               </Link>
//               <Link
//                 href="#"
//                 className="text-lg font-medium transition-colors hover:text-primary"
//                 prefetch={false}
//               >
//                 Recommended
//               </Link>
//               <Link
//                 href="#"
//                 className="text-lg font-medium transition-colors hover:text-primary"
//                 prefetch={false}
//               >
//                 Contact
//               </Link>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </header>
//     </nav>
//   );
// };

// export default NavBar;
