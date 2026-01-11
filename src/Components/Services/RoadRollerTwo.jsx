import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadRollerTwo = () => {
  const cards = useRef([]);

  useEffect(() => {
    gsap.from(cards.current, {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cards.current[0],
        start: "top 80%",
      },
    });
  }, []);

  const data = [
    {
      title: "Soil Compaction",
      img: "/images/roller-soil.jpg",
    },
    {
      title: "Asphalt Compaction",
      img: "/images/roller-asphalt.jpg",
    },
  ];

  return (
    <section className="bg-[#fafafa] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">
          Road Roller <span className="text-orange-500">Services</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cards.current[i] = el)}
            className="group bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-8">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">
                Precision rolling for stable and durable surfaces.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadRollerTwo;
