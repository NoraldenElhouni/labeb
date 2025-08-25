"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function SuccessPartner() {
  const partners = [
    { name: "Innovation Garden", logo: "/logo/logo.png" },
    { name: "Tadauowl", logo: "/logo/logo.png" },
    { name: "WASATA", logo: "/logo/logo.png" },
    { name: "ATOM", logo: "/logo/logo.png" },
    { name: "IFC", logo: "/logo/logo.png" },
    { name: "European Union", logo: "/logo/logo.png" },
    { name: "SUPER NOVA", logo: "/logo/logo.png" },
    { name: "SPARK", logo: "/logo/logo.png" },
    { name: "TechFlow Inc.", logo: "/logo/logo.png" },
    { name: "InnovateLab", logo: "/logo/logo.png" },
    { name: "StartupXYZ", logo: "/logo/logo.png" },
    { name: "Digital Solutions Co.", logo: "/logo/logo.png" },
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
                className="flex-shrink-0 bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg px-8 py-6 min-w-[200px] flex items-center justify-center"
              >
                <Image
                  src={partner.logo || "/logo/logo.png"}
                  alt={`${partner.name} logo`}
                  fill
                  className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default SuccessPartner;
