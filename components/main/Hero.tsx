"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import LogoOrbit from "../animation/LogoOrbit";

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* subtle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-transparent" />
      {/* floating glows with parallax */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 opacity-30"
      >
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl [animation-delay:800ms] animate-pulse" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo + orbit */}
          <LogoOrbit />

          {/* Heading */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-balance font-bold tracking-tight text-4xl sm:text-6xl lg:text-7xl"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI
            </span>{" "}
            solution
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto max-w-3xl text-pretty text-base sm:text-xl text-muted-foreground leading-relaxed"
          >
            LABEB AI is a Libyan tech startup enabling organizations to achieve
            secure and efficient digital transformation while ensuring data
            privacy protection.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-2 flex flex-col sm:flex-row items-center gap-3"
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-8 py-6 text-base shadow-lg shadow-blue-500/10
                         bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              <span className="mr-2">Get started</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-6 text-base border-white/20 bg-background/30 backdrop-blur
                         hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-offset-2 focus-visible:ring-violet-500"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Our services
            </Button>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Supported by
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-6 opacity-70"
          >
            {[
              "Innovation Garden",
              "Tadauowl",
              "WASATA",
              "ATOM",
              "IFC",
              "EU",
              "SUPER NOVA",
              "SPARK",
            ].map((partner) => (
              <div key={partner} className="text-xs sm:text-sm font-semibold">
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
