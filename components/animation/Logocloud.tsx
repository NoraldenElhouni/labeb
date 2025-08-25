"use client";
import { motion } from "framer-motion";
import { Particles } from "../magicui/particles";
import { IconCloud } from "../magicui/icon-cloud";

function LogoCloud() {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section id="cloud">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden mx-auto"
        >
          <Particles
            className="absolute inset-0"
            quantity={50}
            ease={80}
            color="#0ea5e9"
            refresh={false}
          />

          {/* Icon Cloud Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <IconCloud images={images} />

            {/* LABEB AI logo in the center - precise positioning */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative group"
              >
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-r rounded-full blur-xl scale-150 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Logo container with better styling */}
                <div className="relative bg-background/95 backdrop-blur-md border border-primary/20 rounded-full p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo/logo.png"
                    alt="LABEB AI Logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LogoCloud;
