"use client";
import { motion } from "framer-motion";
import { ModernGallery } from "../modern-gallery";
import { useTranslations } from "next-intl";

function Gallery() {
  const t = useTranslations("gallery");
  const galleryImages = [
    {
      src: "/gallery/doha/doha1.jpg",
      alt: "doha",
      title: t("images.doha"),
    },
    {
      src: "/gallery/ifc/ifc1.jpg",
      alt: "IFC",
      title: t("images.ifc"),
    },
    {
      src: "/gallery/national/national1.jpg",
      alt: "National",
      title: t("images.national"),
    },
    {
      src: "/gallery/dialogue/dialogue1.jpg",
      alt: "Dialogue",
      title: t("images.dialogue"),
    },
  ];

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ModernGallery images={galleryImages} />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
