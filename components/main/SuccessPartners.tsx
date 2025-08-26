"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Partner = {
  name: string;
  logo?: string;
};

function SuccessPartners() {
  const t = useTranslations("partners");

  const partners: Partner[] = [
    { name: "Innovation Garden", logo: "/partners/innovation-garden.svg" },
    { name: "Tadauowl", logo: "/partners/tadauowl.svg" },
    { name: "WASATA", logo: "/partners/wasata.svg" },
    { name: "SME", logo: "/partners/sme.svg" },
    { name: "ATOM", logo: "/partners/atom.svg" },
    { name: "IFC", logo: "/partners/ifc.svg" },
    { name: "European Union", logo: "/partners/eu.svg" },
    { name: "SUPER NOVA", logo: "/partners/super-nova.svg" },
    { name: "WASATA", logo: "/partners/wasatam.svg" },
    { name: "SPARK", logo: "/partners/spark.svg" },
    { name: "UNDP", logo: "/partners/undp.svg" },
  ];

  // Duplicate for seamless loop
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          // Animate header in view
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            aria-label="partners-marquee"
            animate={{ x: [0, -100 * partners.length] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex space-x-16 whitespace-nowrap"
          >
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg px-8 py-4 min-w-[200px] flex items-center justify-center"
                title={partner.name}
              >
                {partner.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-lg font-semibold text-muted-foreground">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SuccessPartners;
