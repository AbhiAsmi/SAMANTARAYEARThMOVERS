import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MixtureTwo = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 80%",
      },
    });
  }, []);

  const services = [
    {
      title: "Residential Construction",
      img: "",
      desc: "Perfect for house foundations, slabs, and small-scale projects.",
    },
    {
      title: "Commercial Projects",
      img: "/images/mixture-commercial.jpg",
      desc: "Reliable mixing for buildings, warehouses, and offices.",
    },
    {
      title: "Infrastructure Work",
      img: "/images/mixture-road.jpg",
      desc: "Heavy-duty concrete mixing for roads, bridges, and drains.",
    },
  ];

  return (
    <section className="bg-[#fafafa] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">
          Mixer Machine <span className="text-orange-500">Applications</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Versatile concrete mixing solutions for every construction need.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group bg-white rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-3"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MixtureTwo;
