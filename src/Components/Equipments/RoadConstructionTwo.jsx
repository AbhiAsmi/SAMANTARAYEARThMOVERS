import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadConstructionTwo = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

useEffect(() => {
  gsap.set(cardsRef.current, {
    opacity: 0,
    y: 100,
  });

  gsap.to(cardsRef.current, {
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: "power4.out",
    stagger: 0.18,
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 85%",
      once: true,
    },
  });
}, []);


  const machines = [
    {
      name: "Road Rollers",
      img: "/photos/road construction.png",
      description:"A road roller compacts soil, gravel, or asphalt to create a strong, smooth, and durable surface for roads."
    },
    {
      name: "Concrete Mixer Machines",
      img: "/photos/mixer equipments (1).png",
      description:"A mixer machine mixes cement, sand, aggregates, and water to produce uniform concrete for construction works."
    },
    {
      name: "Trailers & Dump Trucks",
      img: "/photos/truck equipments.png",
      description:"A trailer is a transport vehicle attached to trucks for carrying heavy construction materials, equipment, or machinery safely."
    },
    {
      name: "Excavators",
      img: "/photos/excavator equipments.png",
      description:"An excavator is a heavy machine used for digging, lifting, trenching, demolition, and moving large amounts of earth."
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#fafafa] to-white py-24 px-5 sm:px-8"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Machinery <span className="text-orange-500">For Projects</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Advanced, reliable, and performance-driven machinery built for modern
          road construction requirements.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {machines.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >

            <div className="h-[220px] w-full overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
               {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadConstructionTwo;
