"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ModernGallery } from "@/components/modern-gallery";
import { useTranslations } from "next-intl";

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "team",
    "conference",
    "app-development",
    "machine-learning",
    "cybersecurity",
    "internet-of-things",
    "blockchain",
  ];

  const allGalleryImages = [
    {
      src: "/gallery/taha-suit-g3.jpg",
      alt: "Taha",
      title: t("images.advanced"),
      category: t("categories.team"),
    },
    {
      src: "/gallery/mahdi-suit-g2.jpg",
      alt: "Mahdi",
      title: t("images.collaborative"),
      category: t("categories.team"),
    },
    {
      src: "/gallery/assel-mahdi-g1.jpg",
      alt: "Aseel And Mahdi",
      title: t("images.workshop"),
      category: t("categories.conference"),
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? allGalleryImages
      : allGalleryImages.filter(
          (image) => image.category === t(`categories.${selectedCategory}`)
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500/10 via-violet-500/5">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted-foreground mb-12">{t("description")}</p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent border-border hover:bg-primary/10 hover:border-primary/50"
                }`}
              >
                {t(`categories.${category}`)}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ModernGallery
              images={filteredImages}
              showViewMore={false}
              maxImages={4}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
