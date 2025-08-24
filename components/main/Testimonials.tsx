"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "LABEB AI transformed our infrastructure and reduced our costs by 40% while improving performance. Their expertise in cloud architecture is unmatched.",
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Inc.",
    },
    {
      quote:
        "The AI integration they built for us has revolutionized our customer service. Response times improved by 60% and customer satisfaction is at an all-time high.",
      name: "Michael Rodriguez",
      role: "Head of Product",
      company: "InnovateLab",
    },
    {
      quote:
        "Working with LABEB AI was seamless. They delivered our mobile app ahead of schedule and it's been performing flawlessly in production.",
      name: "Emily Johnson",
      role: "Founder",
      company: "StartupXYZ",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
