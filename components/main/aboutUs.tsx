"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function AboutUs() {
  const t = useTranslations("about");
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
