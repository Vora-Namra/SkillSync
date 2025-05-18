// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   ArrowRight,
// } from "lucide-react";
// import HeroSection from "@/components/hero";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import Image from "next/image";
// import { features } from "@/data/features";
// import { testimonial } from "@/data/testimonial";
// import { faqs } from "@/data/faqs";
// import { howItWorks } from "@/data/howItWorks";

// export default function LandingPage() {
//   return (
//     <>
//       <div className="grid-background"></div>

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Features Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
//             Powerful Features for Your Career Growth
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {features.map((feature, index) => (
//               <Card
//                 key={index}
//                 className="border-2 hover:border-primary transition-colors duration-300"
//               >
//                 <CardContent className="pt-6 text-center flex flex-col items-center">
//                   <div className="flex flex-col items-center justify-center">
//                     {feature.icon}
//                     <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                     <p className="text-muted-foreground">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="w-full py-12 md:py-24 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">50+</h3>
//               <p className="text-muted-foreground">Industries Covered</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">1000+</h3>
//               <p className="text-muted-foreground">Interview Questions</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">95%</h3>
//               <p className="text-muted-foreground">Success Rate</p>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2">
//               <h3 className="text-4xl font-bold">24/7</h3>
//               <p className="text-muted-foreground">AI Support</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="w-full py-12 md:py-24 bg-background">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">How It Works</h2>
//             <p className="text-muted-foreground">
//               Four simple steps to accelerate your career growth
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//             {howItWorks.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center space-y-4"
//               >
//                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-semibold text-xl">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 bg-muted/50">
//         <div className="container mx-auto px-4 md:px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             What Our Users Say
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {testimonial.map((testimonial, index) => (
//               <Card key={index} className="bg-background">
//                 <CardContent className="pt-6">
//                   <div className="flex flex-col space-y-4">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <div className="relative h-12 w-12 flex-shrink-0">
//                         <Image
//                           width={40}
//                           height={40}
//                           src={testimonial.image}
//                           alt={testimonial.author}
//                           className="rounded-full object-cover border-2 border-primary/20"
//                         />
//                       </div>
//                       <div>
//                         <p className="font-semibold">{testimonial.author}</p>
//                         <p className="text-sm text-muted-foreground">
//                           {testimonial.role}
//                         </p>
//                         <p className="text-sm text-primary">
//                           {testimonial.company}
//                         </p>
//                       </div>
//                     </div>
//                     <blockquote>
//                       <p className="text-muted-foreground italic relative">
//                         <span className="text-3xl text-primary absolute -top-4 -left-2">
//                           &quot;
//                         </span>
//                         {testimonial.quote}
//                         <span className="text-3xl text-primary absolute -bottom-4">
//                           &quot;
//                         </span>
//                       </p>
//                     </blockquote>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="w-full py-12 md:py-24">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl font-bold mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-muted-foreground">
//               Find answers to common questions about our platform
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq, index) => (
//                 <AccordionItem key={index} value={`item-${index}`}>
//                   <AccordionTrigger className="text-left">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent>{faq.answer}</AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="w-full">
//         <div className="mx-auto py-24 gradient rounded-lg">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
//               Ready to Accelerate Your Career?
//             </h2>
//             <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
//               Join thousands of professionals who are advancing their careers
//               with AI-powered guidance.
//             </p>
//             <Link href="/dashboard" passHref>
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="h-11 mt-5 animate-bounce"
//               >
//                 Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-background to-background/80 -z-10 pointer-events-none opacity-70"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10 pointer-events-none"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 -z-10"></div>
        <div className="absolute top-z0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center max-w-3xl">
              Powerful Features for Your Career Growth
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-16 md:py-24">
        <div className="absolute inset-0 bg-muted/30 skew-y-3 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative -skew-y-3">
            {[
              { value: "50+", label: "Industries Covered" },
              { value: "1000+", label: "Interview Questions" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "AI Support" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-background/90 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center max-w-xl mb-4">How It Works</h2>
            <p className="text-muted-foreground text-center text-lg max-w-2xl">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
              {howItWorks.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-20 h-20 rounded-2xl bg-background shadow-lg border border-border/50 flex items-center justify-center mb-6 z-10">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <span className="absolute -top-2 right-0 md:right-auto md:left-0 bg-primary text-primary-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-muted/20 -z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent -z-5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">What Our Users Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden backdrop-blur-sm bg-background/70 border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                  index === 1 ? "md:transform md:-translate-y-8" : ""
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col space-y-6">
                    <div className="text-4xl text-primary">&ldquo;</div>
                    <blockquote className="text-foreground/90 italic mb-6">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                        <Image
                          width={60}
                          height={60}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, <span className="text-primary">{testimonial.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center mb-16">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center text-lg max-w-2xl mt-4">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-border/70 last:border-0"
                >
                  <AccordionTrigger className="text-left py-5 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-20 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
            <div className="relative py-16 px-6 md:py-24 md:px-12">
              <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
                <span className="px-4 py-1.5 text-sm font-semibold bg-white/20 text-white rounded-full mb-2">Limited Time Offer</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Ready to Accelerate Your Career?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/90 text-lg md:text-xl">
                  Join thousands of professionals who are advancing their careers
                  with AI-powered guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Link href="/onboarding" passHref>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="h-12 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}