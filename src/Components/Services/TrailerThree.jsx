import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrailerThree = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemsRef.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  const steps = [
    "Route Planning & Permissions",
    "Load Securing & Inspection",
    "Long-Distance Transport",
    "Safe Delivery & Unloading",
  ];

  return (
    <section className="bg-gradient-to-br from-[#fff7ef] to-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Oversized Trailer <span className="text-orange-500">Logistics</span>
        </h2>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <p className="text-gray-700 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrailerThree;
