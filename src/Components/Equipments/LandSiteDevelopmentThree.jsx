import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LandSiteDevelopmentThree = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 100,
      stagger: 0.25,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
        once: true,
      },
    });
  }, []);

  const services = [
    "Earthwork & Grading",
    "Site Drainage Systems",
    "Soil Compaction",
    "Access Road Formation",
  ];

  return (
    <section className="bg-[#f7f4ef] py-32 px-6">
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold">
          Land Development <span className="text-orange-600">Services</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-14">
        {services.map((s, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-white rounded-[2.5rem] p-12 shadow-xl hover:-translate-y-4 transition-all duration-500"
          >
            <span className="text-orange-600 text-5xl font-extrabold block mb-6">
              {i + 1}
            </span>
            <h3 className="text-2xl font-bold mb-4">{s}</h3>
            <p className="text-gray-600 leading-relaxed">
              Executed using modern machinery and expert supervision to ensure
              stable, regulation-ready land development.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandSiteDevelopmentThree;
