"use client";
import { motion } from "framer-motion";
import { Code, Search, TrendingUp, Users, Zap } from "lucide-react";

function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Understanding your needs and goals",
    },
    {
      icon: Code,
      title: "Define",
      description: "Creating detailed specifications",
    },
    {
      icon: Zap,
      title: "Architect",
      description: "Designing scalable solutions",
    },
    {
      icon: Users,
      title: "Build",
      description: "Developing with best practices",
    },
    {
      icon: TrendingUp,
      title: "Measure",
      description: "Iterating based on data",
    },
  ];

  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology for delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-background border-2 border-blue-500/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
