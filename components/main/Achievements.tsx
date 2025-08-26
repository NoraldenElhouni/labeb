"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Award } from "lucide-react";
import { useTranslations } from "next-intl";
import { Lightbox } from "../ui/lightbox";

function Achievements() {
  const t = useTranslations("achievements");
  const achievements = [
    {
      title: t("list.project1.title"),
      description: t("list.project1.description"),
      year: "2023",
      image: "/achievements/achievements1.jpg",
    },
    {
      title: t("list.project2.title"),
      description: t("list.project2.description"),
      year: "2023",
      image: "/achievements/achievements2.jpg",
    },
  ];

  // Lightbox state
  const images = achievements.map((a) => ({
    src: a.image,
    alt: a.title,
    title: a.title,
  }));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const previousImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
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
                      className="w-full h-[60%] object-cover rounded-lg mb-4 cursor-pointer"
                      onClick={() => openLightbox(index)}
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
      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
}

export default Achievements;
