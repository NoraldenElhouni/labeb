"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ModernGallery } from "@/components/modern-gallery";
import { useTranslations } from "next-intl";

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "doha", "ifc", "national", "dialogue", "park"];

  const allGalleryImages = [
    {
      src: "/gallery/park/park1.jpg",
      alt: "Park",
      title: t("images.park"),
      category: t("categories.park"),
    },
    {
      src: "/gallery/park/park2.jpg",
      alt: "Park",
      title: t("images.park"),
      category: t("categories.park"),
    },
    {
      src: "/gallery/doha/doha1.jpg",
      alt: "Doha",
      title: t("images.doha"),
      category: t("categories.doha"),
    },
    {
      src: "/gallery/doha/doha2.jpg",
      alt: "Doha",
      title: t("images.doha"),
      category: t("categories.doha"),
    },
    {
      src: "/gallery/doha/doha3.jpg",
      alt: "Doha",
      title: t("images.doha"),
      category: t("categories.doha"),
    },
    {
      src: "/gallery/doha/doha4.jpg",
      alt: "Doha",
      title: t("images.doha"),
      category: t("categories.doha"),
    },
    {
      src: "/gallery/doha/doha5.jpg",
      alt: "Doha",
      title: t("images.doha"),
      category: t("categories.doha"),
    },
    {
      src: "/gallery/ifc/ifc1.jpg",
      alt: "IFC",
      title: t("images.ifc"),
      category: t("categories.ifc"),
    },
    {
      src: "/gallery/ifc/ifc2.jpg",
      alt: "IFC",
      title: t("images.ifc"),
      category: t("categories.ifc"),
    },
    {
      src: "/gallery/ifc/ifc3.jpg",
      alt: "IFC",
      title: t("images.ifc"),
      category: t("categories.ifc"),
    },
    {
      src: "/gallery/ifc/ifc4.jpg",
      alt: "IFC",
      title: t("images.ifc"),
      category: t("categories.ifc"),
    },
    {
      src: "/gallery/ifc/ifc5.jpg",
      alt: "IFC",
      title: t("images.ifc"),
      category: t("categories.ifc"),
    },
    {
      src: "/gallery/ifc/ifc6.jpg",
      alt: "IFC",
      title: t("images.ifc"),
      category: t("categories.ifc"),
    },
    {
      src: "/gallery/national/national1.jpg",
      alt: "National",
      title: t("images.national"),
      category: t("categories.national"),
    },
    {
      src: "/gallery/national/national3.jpg",
      alt: "National",
      title: t("images.national"),
      category: t("categories.national"),
    },
    {
      src: "/gallery/national/national4.jpg",
      alt: "National",
      title: t("images.national"),
      category: t("categories.national"),
    },
    {
      src: "/gallery/dialogue/dialogue1.jpg",
      alt: "Dialogue",
      title: t("images.dialogue"),
      category: t("categories.dialogue"),
    },
    {
      src: "/gallery/dialogue/dialogue2.jpg",
      alt: "Dialogue",
      title: t("images.dialogue"),
      category: t("categories.dialogue"),
    },
    {
      src: "/gallery/dialogue/dialogue3.jpg",
      alt: "Dialogue",
      title: t("images.dialogue"),
      category: t("categories.dialogue"),
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
            <ModernGallery images={filteredImages} showViewMore={false} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
