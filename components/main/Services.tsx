"use client";
import {
  BarChart,
  Brain,
  GraduationCap,
  Satellite,
  Shield,
  Users2 as Users,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions Development",
      description:
        "Smart solutions based on artificial intelligence technologies tailored to various sectors.",
    },
    {
      icon: Satellite,
      title: "Satellite Monitoring Systems",
      description:
        "Satellite-based monitoring system for leak detection, specifically designed for oil companies.",
    },
    {
      icon: GraduationCap,
      title: "AI Training Programs",
      description:
        "Training programs and workshops on safe use of AI and digital transformation tools ensuring data privacy.",
    },
    {
      icon: Users,
      title: "Technical Consulting",
      description:
        "Technical consulting services to help organizations adopt AI strategies and integrate them into operations.",
    },
    {
      icon: BarChart,
      title: "Intelligent Systems",
      description:
        "Designing intelligent systems to improve productivity, data analysis, and decision-making support.",
    },
    {
      icon: Shield,
      title: "Management Consulting",
      description:
        "Specialized management consulting in corporate governance to enhance performance and transparency.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end engineering solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-all duration-300">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
