import { ThemeToggle } from "@/components/buttons/ThemeToggle";
import Hero from "@/components/main/Hero";
import Process from "@/components/main/Process";
import Services from "@/components/main/Services";
import Solutions from "@/components/main/Solutions";
import TechStack from "@/components/main/TechStack";
import Testimonials from "@/components/main/Testimonials";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Solutions />
      <Process />
      <TechStack />
      <Testimonials />
    </div>
  );
};

export default HomePage;
