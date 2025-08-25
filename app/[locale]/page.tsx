import AboutUs from "@/components/main/aboutUs";
import Achievements from "@/components/main/Achievements";
import Hero from "@/components/main/Hero";
import Services from "@/components/main/Services";
import Solutions from "@/components/main/Solutions";
import SuccessPartners from "@/components/main/SuccessPartners";
import Team from "@/components/main/team";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Solutions />
      <Team />
      <Achievements />
      <SuccessPartners />
    </div>
  );
};

export default HomePage;
