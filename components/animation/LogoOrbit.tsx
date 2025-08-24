"use client";

import Image from "next/image";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Home, Settings, User } from "lucide-react";

export default function LogoOrbit() {
  return (
    <div className="relative flex h-auto md:mt-6 w-full items-center justify-center">
      {/* Center Logo */}
      <div className="relative z-10 flex items-center justify-center">
        <Image
          src="/logo/logo.png" // replace with your logo path
          alt="Logo"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      {/* Orbiting Icons */}
      <OrbitingCircles radius={120} duration={20}>
        <Home className="h-8 w-8 text-blue-500" />
      </OrbitingCircles>

      <OrbitingCircles radius={120} duration={25} reverse>
        <Settings className="h-8 w-8 text-green-500" />
      </OrbitingCircles>

      <OrbitingCircles radius={120} duration={30}>
        <User className="h-8 w-8 text-red-500" />
      </OrbitingCircles>
    </div>
  );
}
