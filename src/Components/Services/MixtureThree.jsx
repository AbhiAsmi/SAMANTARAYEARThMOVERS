import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MixtureThree = () => {
  const textRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        x: -150,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.35,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current[0],
          start: "top 80%",
          end: "bottom 30%",
          scrub: true, // 🔥 forward + reverse
        },
      }
    );

    return () => ScrollTrigger.killAll();
  }, []);

  const steps = [
    "Material Loading",
    "Controlled Mixing Process",
    "Uniform Consistency Check",
    "Concrete Discharge & Usage",
  ];

  return (
    <section className="bg-white py-40 px-6 overflow-hidden">
      
      <h1 className="text-5xl md:text-5xl font-extrabold text-black mb-28 max-w-6xl mx-auto">
        Mixing <span className="text-orange-500">Process</span>
      </h1>

      <div className="max-w-6xl mx-auto space-y-20">
        {steps.map((step, i) => (
          <h2
            key={i}
            ref={(el) => (textRef.current[i] = el)}
            className="
              text-2xl md:text-3xl font-bold uppercase tracking-tight
              text-transparent bg-clip-text
              bg-gradient-to-r from-black via-yellow-400 to-orange-600
            "
          >
            {step}
          </h2>
        ))}
      </div>
    </section>
  );
};

export default MixtureThree;
