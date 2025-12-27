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

const Pages = () => {
  return (
    <div className="w-full relative">
      <Navbar />

      <section id="home">
        <HomePage />
      </section>

      <section id="icons">
        <IconContent />
      </section>

      <section id="description">
        <Description />
      </section>

      <section id="stats">
        <StatsSection />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="owner">
        <Owner />
      </section>
    </div>
  );
};

export default Pages;
