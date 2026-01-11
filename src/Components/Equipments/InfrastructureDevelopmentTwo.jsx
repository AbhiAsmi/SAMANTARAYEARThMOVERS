import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfrastructureDevelopmentTwo = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.set(cardsRef.current, { opacity: 0, y: 120 });

    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  const machines = [
    { name: "Excavator", img: "photos/ChatGPT Image Dec 21, 2025, 12_38_02 PM.png" },
    { name: "Road Roller", img: "photos/Gemini_Generated_Image_x58sxzx58sxzx58s~2.png" },
    { name: "Concrete Mixer", img: "photos/ChatGPT Image Dec 21, 2025, 12_29_54 PM.png" },
    { name: "Dump Truck", img: "photos/Gemini_Generated_Image_2r89lj2r89lj2r89.png" },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#fafafa] py-28 px-6 sm:px-10"
    >
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-extrabold">
          Machinery <span className="text-orange-500">Fleet</span>
        </h2>
        <p className="text-gray-500 mt-4">
          Heavy-duty equipment built for large-scale infrastructure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {machines.map((m, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-4 transition-all duration-500"
          >
            <div className="h-[240px] overflow-hidden">
              <img
                src={m.img}
                alt={m.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{m.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Designed for endurance, productivity, and precision execution.
              </p>
            </div>

            {/* accent bar */}
            <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfrastructureDevelopmentTwo;
