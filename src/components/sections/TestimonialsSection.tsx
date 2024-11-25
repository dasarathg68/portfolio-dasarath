"use client";

import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";
import portfolioData from "@/utils/data.json";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = portfolioData.testimonials;

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  return (
    <>
      <section id="testimonials" className="py-24 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              What My Clients and Managers Have to Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take my word for it. Here&apos;s what industry
              leaders have to say about my work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                onClick={() => setSelectedTestimonial(testimonial)}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className="h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <CardHeader>
                    <Quote className="w-12 h-12 text-primary mb-6" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 flex-grow line-clamp-4 text-sm">
                      {testimonial.content}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      <Dialog
        open={!!selectedTestimonial}
        onOpenChange={() => setSelectedTestimonial(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedTestimonial?.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-muted-foreground">
              {selectedTestimonial?.content}
            </p>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                {selectedTestimonial?.role} at {selectedTestimonial?.company}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
