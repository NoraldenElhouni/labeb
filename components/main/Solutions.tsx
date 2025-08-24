"use client";
import { Rocket, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

function Solutions() {
  const solutions = [
    {
      icon: Rocket,
      title: "Faster launches",
      description: "Template libraries + battle-tested patterns.",
    },
    {
      icon: Shield,
      title: "Lower risk",
      description: "Quality gates, testing, SLOs.",
    },
    {
      icon: TrendingUp,
      title: "Scale securely",
      description: "Least-privilege, secrets, compliance hints.",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose LABEB AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver results that matter to your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl p-8 h-full">
                <solution.icon className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
