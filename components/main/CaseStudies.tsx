"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

function CaseStudies() {
  const cases = [
    {
      title: "E-commerce Platform Optimization",
      goal: "Reduce infrastructure costs while improving performance",
      result: "−38% infra cost, +27% conversion",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      goal: "Build real-time data processing pipeline",
      result: "TtF −45%, 99.9% uptime",
    },
    {
      title: "Mobile App Modernization",
      goal: "Migrate legacy system to cloud-native architecture",
      result: "+150% user engagement, −60% load times",
    },
  ];

  return (
    <section id="case-studies" className="py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                  <CardDescription className="text-base">
                    {caseStudy.goal}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-400 mb-4">
                    {caseStudy.result}
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
