"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Brain,
  Code2,
  Cloud,
  Database,
  Github,
  GitBranch,
  Boxes,
  Bot,
  Shield,
  Globe,
  Rocket,
  Zap,
  Layers,
  Terminal,
  Cog,
  Wrench,
  Server,
  Satellite,
  Wifi,
  BarChart,
  GraduationCap,
  User,
  Users,
} from "lucide-react";
import { JSX, useMemo } from "react";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

interface OrbitRingConfig {
  radius: number;
  iconCount: number;
  duration: number;
  delay: number;
  size: number;
}

export default function LogoIconCloud() {
  const shouldReduceMotion = useReducedMotion();

  const icons: IconType[] = [
    BarChart,
    Brain,
    GraduationCap,
    Satellite,
    Shield,
    Users,
    BarChart,
    Brain,
    GraduationCap,
    Satellite,
    Shield,
    Users,
  ];

  // Updated orbit configurations - both have 6 icons now
  const orbitConfigs: OrbitRingConfig[] = useMemo(
    () => [
      { radius: 160, iconCount: 6, duration: 30, delay: 0, size: 20 },
      { radius: 120, iconCount: 6, duration: 25, delay: 1, size: 18 },
    ],
    []
  );

  const createOrbitRing = (config: OrbitRingConfig): JSX.Element[] => {
    const { radius, iconCount, duration, delay, size } = config;
    // Use different icons for each orbit to avoid duplicates
    const startIndex = config.radius === 160 ? 0 : 6;
    const selectedIcons = icons.slice(startIndex, startIndex + iconCount);

    return selectedIcons.map((Icon: IconType, index: number) => {
      const angle = (360 / iconCount) * index;
      const itemDelay = delay + index * 0.08;

      return (
        <motion.div
          key={`${radius}-${index}`}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transformOrigin: "0 0",
          }}
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{
            duration: shouldReduceMotion ? 0 : duration,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear",
            delay: itemDelay,
          }}
        >
          <div
            className="flex items-center justify-center group cursor-pointer"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                delay: itemDelay + 0.5,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-violet-400/20 blur-sm group-hover:blur-md group-hover:from-blue-400/40 group-hover:to-violet-400/40 transition-all duration-300" />

              {/* Icon container with better light/dark mode support */}
              <div className="relative p-3 rounded-full bg-white/10 dark:bg-background/15 backdrop-blur-sm border border-gray-200/20 dark:border-white/10 shadow-lg group-hover:bg-white/20 dark:group-hover:bg-background/25 group-hover:border-gray-200/30 dark:group-hover:border-white/20 group-hover:shadow-xl transition-all duration-300">
                <Icon
                  size={size}
                  className="text-gray-700 dark:text-foreground/70 group-hover:text-gray-900 dark:group-hover:text-foreground group-hover:drop-shadow-sm transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      );
    });
  };

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center select-none mt-14">
      {/* Background rings */}
      <div
        className="absolute inset-0 rounded-full border border-gray-200/10 dark:border-white/5"
        style={{ width: "320px", height: "320px", margin: "auto" }}
      />
      <div
        className="absolute inset-0 rounded-full border border-gray-200/8 dark:border-white/3"
        style={{ width: "240px", height: "240px", margin: "auto" }}
      />
      <div
        className="absolute inset-0 rounded-full border border-gray-200/5 dark:border-white/2"
        style={{ width: "170px", height: "170px", margin: "auto" }}
      />

      {/* Orbit rings */}
      {orbitConfigs.map((config, index) => (
        <div key={`orbit-${index}`} className="absolute inset-0">
          {createOrbitRing(config)}
        </div>
      ))}

      {/* Center Logo */}
      <motion.div
        className="relative z-50 flex items-center justify-center cursor-pointer"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 1,
        }}
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                scale: 1.08,
                rotate: [0, -5, 5, 0],
              }
        }
        whileTap={{ scale: 0.95 }}
      >
        {/* Enhanced outer glow with blur background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-3xl animate-pulse" />

        {/* Additional blur layer for better background effect */}
        <div className="absolute inset-0 rounded-full bg-white/30 dark:bg-background/30 blur-2xl" />

        {/* Main container with enhanced blur */}
        <div className="relative p-6 rounded-full bg-white/30 dark:bg-background/20 backdrop-blur-xl border border-gray-200/30 dark:border-white/20 shadow-2xl">
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-violet-500/10" />

          {/* Additional inner blur layer */}
          <div className="absolute inset-0 rounded-full bg-white/20 dark:bg-background/10 backdrop-blur-sm" />

          {/* Logo */}
          <div className="relative">
            <Image
              src="/logo/logo.png"
              alt="LABEB AI Logo"
              width={88}
              height={88}
              className="relative z-10 drop-shadow-lg"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Enhanced center glow with multiple layers */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-40 h-40 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-violet-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl animate-pulse pointer-events-none" />
    </div>
  );
}
