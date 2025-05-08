// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//       if (scrollPosition > scrollThreshold) {
//         imageElement.classList.add("scrolled");
//       } else {
//         imageElement.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="w-full pt-36 md:pt-48 pb-10">
//       <div className="space-y-6 text-center">
//         <div className="space-y-6 mx-auto">
//           <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
//             Your AI Career Coach for
//             <br />
//             Professional Success
//           </h1>
//           <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
//             Advance your career with personalized guidance, interview prep, and
//             AI-powered tools for job success.
//           </p>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8">
//               Get Started
//             </Button>
//           </Link>
//           <Link href="https://www.youtube.com/roadsidecoder">
//             <Button size="lg" variant="outline" className="px-8">
//               Watch Demo
//             </Button>
//           </Link>
//         </div>
//         <div className="hero-image-wrapper mt-5 md:mt-0">
//           <div ref={imageRef} className="hero-image">
//             <Image
//               src="/banner.jpeg"
//               width={1280}
//               height={720}
//               alt="Dashboard Preview"
//               className="rounded-lg shadow-2xl border mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-float");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 -z-10 pointer-events-none opacity-70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content Side */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-block">
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                Welcome to Career Accelerator
              </span>
            </div>
            <h1 className="text-2xl gradient-title md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Navigate Your Path to Professional Success

            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
              Advance your career with personalized guidance, interview prep, and
              AI-powered tools for job success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="h-12 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 border-primary/20 hover:bg-primary/5 font-semibold"
                >
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 w-full max-w-2xl">
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/10 bg-background/50 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
              <Image
                src="/demo.jpg"
                width={1280}
                height={720}
                alt="Dashboard Preview"
                className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="angle-bottom">
          <div className="h-16 bg-gradient-to-r from-background via-primary/5 to-background"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;