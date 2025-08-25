"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Award } from "lucide-react";

function Achievements() {
  const achievements = [
    {
      title: "ISO 27001 Certification",
      description:
        "Information Security Management System certification ensuring data protection standards.",
      year: "2024",
      image: "/Certification.png",
    },
    {
      title: "AI Ethics Compliance",
      description:
        "Certified for ethical AI development and deployment practices.",
      year: "2024",
      image: "/Certification.png",
    },
    {
      title: "Digital Transformation Excellence",
      description:
        "Recognition for outstanding digital transformation consulting services.",
      year: "2023",
      image: "/Certification.png",
    },
    {
      title: "Innovation Award",
      description:
        "Awarded for innovative satellite monitoring solutions in the oil & gas sector.",
      year: "2023",
      image: "/Certification.png",
    },
  ];

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Achievements We&apos;re Proud Of
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and certifications that validate our commitment to
            excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between mb-2">
                      <Award className="h-6 w-6 text-yellow-400" />
                      <span className="text-sm text-blue-400 font-semibold">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Achievements;
