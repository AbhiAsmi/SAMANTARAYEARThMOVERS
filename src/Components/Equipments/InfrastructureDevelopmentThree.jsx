import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfrastructureDevelopmentThree = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    gsap.set(stepsRef.current, { opacity: 0, y: 120 });

    gsap.to(stepsRef.current, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: stepsRef.current[0],
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  const steps = [
    "Planning & Survey",
    "Machinery Deployment",
    "Execution & Monitoring",
    "Final Delivery",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#f2f6ff] py-28 px-6">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-extrabold">
          Execution <span className="text-orange-500">Workflow</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (stepsRef.current[i] = el)}
            className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition"
          >
            <span className="text-orange-500 text-6xl font-extrabold block mb-6">
              {i + 1}
            </span>
            <h3 className="text-2xl font-bold mb-4">{step}</h3>
            <p className="text-gray-600 leading-relaxed">
              Each stage is executed with safety, quality control, and efficiency
              to ensure long-lasting infrastructure.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfrastructureDevelopmentThree;
