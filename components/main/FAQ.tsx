"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function FAQ() {
  const faqs = [
    {
      question: "What are your typical project timelines?",
      answer:
        "Project timelines vary based on scope and complexity. Simple integrations can be completed in 2-4 weeks, while full-scale applications typically take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "What are your pricing models?",
      answer:
        "We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. Our rates are competitive and reflect the senior-level expertise of our team.",
    },
    {
      question: "Who owns the code after project completion?",
      answer:
        "You retain full ownership of all code, documentation, and intellectual property created for your project. We provide complete source code and documentation upon project completion.",
    },
    {
      question: "How do you handle security and compliance?",
      answer:
        "Security is built into every aspect of our development process. We follow industry best practices, implement proper authentication and authorization, and can help with compliance requirements like SOC 2, HIPAA, or GDPR.",
    },
    {
      question: "What does your engagement model look like?",
      answer:
        "We typically start with a discovery phase to understand your needs, followed by architecture and planning, then iterative development with regular check-ins. We maintain transparent communication throughout the entire process.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your application continues to perform optimally. This includes monitoring, updates, bug fixes, and feature enhancements as needed.",
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
