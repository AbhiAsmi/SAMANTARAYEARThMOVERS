import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MixtureThree = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    gsap.from(stepsRef.current, {
      opacity: 0,
      x: -60,
      stagger: 0.25,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: stepsRef.current[0],
        start: "top 80%",
      },
    });
  }, []);

  const steps = [
    "Material Loading",
    "Controlled Mixing Process",
    "Uniform Consistency Check",
    "Concrete Discharge & Use",
  ];

  return (
    <section className="bg-gradient-to-br from-[#fff7ef] to-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Mixing <span className="text-orange-500">Process</span>
        </h2>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepsRef.current[i] = el)}
              className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
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

export default MixtureThree;
