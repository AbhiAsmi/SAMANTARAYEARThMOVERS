import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrailerTwo = () => {
  const cards = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cards.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  const data = [
    {
      title: "Flatbed Trailers",
      desc: "Ideal for transporting steel, pipes, containers, and construction materials.",
    },
    {
      title: "Lowbed Trailers",
      desc: "Designed for heavy machinery like excavators, rollers, and cranes.",
    },
  ];

  return (
    <section className="bg-[#fafafa] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Trailer <span className="text-orange-500">Solutions</span>
        </h2>
        <p className="text-gray-600">
          Specialized trailer services for safe and reliable logistics.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cards.current[i] = el)}
            className="bg-white p-10 rounded-xl shadow-lg hover:-translate-y-2 transition"
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrailerTwo;
