"use client";
import { motion } from "framer-motion";

function SuccessPartners() {
  const partners = [
    "Innovation Garden",
    "Tadauowl",
    "WASATA",
    "ATOM",
    "IFC",
    "European Union",
    "SUPER NOVA",
    "SPARK",
    "TechFlow Inc.",
    "InnovateLab",
    "StartupXYZ",
    "Digital Solutions Co.",
  ];

  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Success Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations and supported by prestigious
            institutions
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -100 * partners.length],
            }}
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
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg px-8 py-4 min-w-[200px] flex items-center justify-center"
              >
                <span className="text-lg font-semibold text-muted-foreground">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SuccessPartners;
