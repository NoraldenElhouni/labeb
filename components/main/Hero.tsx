"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import { Particles } from "../magicui/particles";
import LogoIconCloud from "../animation/LogoIconCloud";
import { useLocale, useTranslations } from "next-intl";

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const dir = useLocale() === "ar" ? "rtl" : "ltr";
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#0ea5e9"
        refresh={false}
      />
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
          <LogoIconCloud />

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
            {t("description")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center mb-12 w-full"
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-8 py-6 text-base shadow-lg shadow-blue-500/10
                         bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              <span className="mr-2">{t("buttons.get_started")}</span>
              {dir === "ltr" ? (
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              ) : (
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              )}
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
              {t("buttons.our_services")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("team")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-6 text-base border-white/20 bg-background/30 backdrop-blur
                         hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-offset-2 focus-visible:ring-violet-500"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              {t("buttons.our_team")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-6 text-base border-white/20 bg-background/30 backdrop-blur
                         hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-offset-2 focus-visible:ring-violet-500"
            >
              {dir === "ltr" ? (
                <>
                  <PlayCircle className="mr-2 h-5 w-5" />
                  {t("buttons.contact_us")}
                </>
              ) : (
                <>
                  {t("buttons.contact_us")}
                  <PlayCircle className="mr-2 h-5 w-5" />
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
