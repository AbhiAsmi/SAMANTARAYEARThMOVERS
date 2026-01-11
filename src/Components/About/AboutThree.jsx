import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutThree = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    gsap.from(statsRef.current, {
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.9,
      ease: "power4.out",
      scrollTrigger: {
        trigger: statsRef.current[0],
        start: "top 85%",
        once: true,
      },
    });
  }, []);

  const stats = [
    ["15+", "Years Experience"],
    ["120+", "Projects Completed"],
    ["50+", "Heavy Machines"],
    ["100+", "Skilled Experts"],
  ];

  return (
    <section className="bg-[#f9fafb] py-28 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map(([num, label], i) => (
          <div key={i} ref={(el) => (statsRef.current[i] = el)}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500">
              {num}
            </h2>
            <p className="text-gray-600 mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutThree;
