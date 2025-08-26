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
  ];

  // Memoized orbit configurations for better performance
  const orbitConfigs: OrbitRingConfig[] = useMemo(
    () => [
      { radius: 160, iconCount: 10, duration: 30, delay: 0, size: 20 },
      { radius: 120, iconCount: 8, duration: 25, delay: 1, size: 18 },
    ],
    []
  );

  const createOrbitRing = (config: OrbitRingConfig): JSX.Element[] => {
    const { radius, iconCount, duration, delay, size } = config;
    const selectedIcons = icons.slice(0, iconCount);

    return selectedIcons.map((Icon: IconType, index: number) => {
      const angle = (360 / iconCount) * index;
      const itemDelay = delay + index * 0.08;

      return (
        <motion.div
          key={`${radius}-${index}`}
          className="absolute pointer-events-none "
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
          <motion.div
            className="flex items-center justify-center pointer-events-auto"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    scale: 1.3,
                    rotate: 360,
                  }
            }
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              rotate: { duration: 0.6 },
            }}
          >
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: itemDelay + 0.5,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-violet-400/20 blur-sm group-hover:blur-md group-hover:from-blue-400/40 group-hover:to-violet-400/40 transition-all duration-300" />

              {/* Icon container */}
              <div className="relative p-2.5 rounded-full bg-background/15 backdrop-blur-sm border border-white/10 shadow-lg group-hover:bg-background/25 group-hover:border-white/20 group-hover:shadow-xl transition-all duration-300">
                <Icon
                  size={size}
                  className="text-foreground/70 group-hover:text-foreground group-hover:drop-shadow-sm transition-all duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      );
    });
  };

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center select-none mt-14">
      {/* Background rings */}
      <div
        className="absolute inset-0 rounded-full border border-white/5"
        style={{ width: "320px", height: "320px", margin: "auto" }}
      />
      <div
        className="absolute inset-0 rounded-full border border-white/3"
        style={{ width: "240px", height: "240px", margin: "auto" }}
      />
      <div
        className="absolute inset-0 rounded-full border border-white/2"
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
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-2xl animate-pulse" />

        {/* Main container */}
        <div className="relative p-6 rounded-full bg-background/20 backdrop-blur-md border border-white/20 shadow-2xl">
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-violet-500/10" />

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
        <div className="w-40 h-40 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-violet-500/20 rounded-full blur-2xl" />
      </motion.div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-xl animate-pulse pointer-events-none" />
    </div>
  );
}
