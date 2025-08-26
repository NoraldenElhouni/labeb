"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

function Services() {
  const t = useTranslations("services");
  const services = [
    {
      image: "/services/ai-training-workshop-education-technology.jpg",
      alt: "AI Solutions Development",
      title: t("list.ai_solutions.title"),
      description: t("list.ai_solutions.description"),
    },
    {
      image: "/services/satellite-monitoring-oil-pipeline-detection.jpg",
      alt: "Satellite Monitoring Systems",
      title: t("list.satellite_monitoring.title"),
      description: t("list.satellite_monitoring.description"),
    },
    {
      image: "/services/ai-brain-neural-network-technology.jpg",
      alt: "AI Training Programs",
      title: t("list.ai_training.title"),
      description: t("list.ai_training.description"),
    },
    {
      image: "/services/technical-consulting-team-collaboration.jpg",
      alt: "Technical Consulting",
      title: t("list.technical_consulting.title"),
      description: t("list.technical_consulting.description"),
    },
    {
      image: "/services/web3.jpg",
      alt: "Web3 Services",
      title: t("list.web3_services.title"),
      description: t("list.web3_services.description"),
    },
    {
      image: "/services/no-code-low-code-development.jpg",
      alt: "No code low-code development",
      title: t("list.no_code_low_code_development.title"),
      description: t("list.no_code_low_code_development.description"),
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="pt-0 h-full bg-card/50 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-all duration-300 overflow-hidden">
                <div className="relative w-full h-48 sm:h-52">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader className="px-6 pt-6 pb-2">
                  <CardTitle className="text-lg sm:text-xl leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
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
