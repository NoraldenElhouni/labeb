"use client";
import { motion } from "framer-motion";
import { ModernGallery } from "../modern-gallery";

function Gallery() {
  const galleryImages = [
    {
      src: "/gallery/assel-mahdi-g1.jpg",
      alt: "Aseel And Mahdi",
      title: "Workshop",
    },
    {
      src: "/gallery/mahdi-suit-g2.jpg",
      alt: "Mahdi",
      title: "Collaborative Innovation",
    },
    {
      src: "/gallery/taha-suit-g3.jpg",
      alt: "Taha",
      title: "Advanced Analytics",
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
              Our Work Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our innovative projects and cutting-edge solutions that
              showcase our expertise in AI, technology, and digital
              transformation.
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
