import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaTractor,
  FaRoad,
  FaTruckMoving,
  FaTools,
  FaCity,
  FaHammer,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaTractor />,
    title: "Excavation",
    desc: "We specialize in excavation services, utilizing state-of-the-art equipment to perform precise and efficient excavations.",
  },
  {
    icon: <FaRoad />,
    title: "Grading and Leveling",
    desc: "Our team is proficient in grading and leveling services to create a uniform and stable surface for construction.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Earth Hauling",
    desc: "We provide earth hauling services to transport large volumes of rocks and other materials to or from the site.",
  },
  {
    icon: <FaTools />,
    title: "Site Preparation",
    desc: "We undertake comprehensive site evaluations and preparation to ensure a solid foundation for construction.",
  },
  {
    icon: <FaCity />,
    title: "Site Development",
    desc: "From small residential lots to large commercial properties, we offer complete site development solutions.",
  },
  {
    icon: <FaHammer />,
    title: "Demolition",
    desc: "Our demolition services provide safe and controlled dismantling to meet your project requirements.",
  },
];

const Eearthmovertwo = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full bg-[#faf8f4] py-20 px-6 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-5">
          Earthmoving Service With A Genuine Expertise
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
          With years of experience in the industry, our team of skilled operators
          and technicians possess the expertise necessary to handle complex
          earthmoving projects.
        </p>
      </div>

      {/* SERVICE GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="
              group bg-white p-8 rounded-xl
              transition-all duration-500 ease-out
              hover:-translate-y-4
              hover:shadow-[0_20px_50px_rgba(255,140,0,0.25)]
            "
          >
            {/* ICON */}
            <div className="text-5xl text-gray-700 mb-6 transition-all duration-500 group-hover:text-orange-500 group-hover:scale-110">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold text-black mb-4">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>

            {/* ORANGE LINE */}
            <div className="mt-6 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Eearthmovertwo;
