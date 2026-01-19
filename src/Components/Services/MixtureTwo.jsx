import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MixtureTwo = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,            // bottom → up
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  const services = [
    {
      title: "Residential Construction",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      desc: "Perfect for house foundations, slabs, and small-scale projects.",
    },
    {
      title: "Commercial Projects",
      img: "https://images.unsplash.com/photo-1590650153855-d9e808231d41",
      desc: "Reliable mixing for buildings, warehouses, and offices.",
    },
    {
      title: "Infrastructure Work",
      img: "https://images.unsplash.com/photo-1592833159051-5c3b2e1f7b8e",
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
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MixtureTwo;
