/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/ui/lightbox";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category?: string;
}

interface ModernGalleryProps {
  images: GalleryImage[];
  showViewMore?: boolean;
  maxImages?: number;
}

export function ModernGallery({
  images,
  showViewMore = true,
  maxImages,
}: ModernGalleryProps) {
  const t = useTranslations("gallery");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImages = maxImages ? images.slice(0, maxImages) : images;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {displayImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

            {/* Expand icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2">
                <Expand className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">
                {image.title}
              </h3>
              {image.category && (
                <p className="text-white/80 text-sm">{image.category}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {showViewMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/gallery">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-border hover:bg-primary/10 hover:border-primary/50 text-foreground hover:text-primary"
            >
              {t("button")}
              <ArrowLeft className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      )}

      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </>
  );
}
