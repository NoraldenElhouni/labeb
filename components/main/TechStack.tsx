"use client";
import { motion } from "framer-motion";

function TechStack() {
  const technologies = [
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Go",
    "PostgreSQL",
    "Redis",
    "Kubernetes",
    "Docker",
    "AWS",
    "GCP",
    "Azure",
    "LangChain",
    "OpenAI",
  ];

  return (
    <section id="stack" className="py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We work with the latest and most reliable technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-muted/50 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-sm font-medium hover:bg-muted/80 transition-colors"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
