import React from "react";
import Navbar from "../Components/Navbar";
import HomePage from "../Components/HomePage";
import Building from "../Components/Building";
import IconContent from "../Components/IconContent";
import Description from "../Components/Description";
import StatsSection from "../Components/StatsSection";
import Service from "../Components/Service";
import AboutUs from "../Components/AboutUs";
import Owner from "../Components/Owner";
import Services from "../Components/Services/Services.jsx";
import Equipments from "../Components/Equipments/Equipments.jsx";
import About from "../Components/About/About.jsx";

const Pages = () => {
  return (
    <div className="w-full relative">
      <HomePage />
      <IconContent/>
      <Description/>
      <StatsSection/>
      <Service/>
      <AboutUs/>
      
    </div>
  );
};

export default Pages;
