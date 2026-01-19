import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LandSiteDevelopmentThree = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: true, // 🔥 forward + reverse
        },
      }
    );

    return () => ScrollTrigger.killAll();
  }, []);

  const services = [
    "Earthwork & Grading",
    "Site Drainage Systems",
    "Soil Compaction",
    "Access Road Formation",
    "Boundary Preparation",
    "Utility Infrastructure Setup",
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-whitepy-40 px-6 overflow-hidden"
    >
      <h1 className="text-3xl md:text-7xl font-extrabold text-black mb-28 max-w-6xl mx-auto">
        Land Site <span className="text-orange-500">Development</span>
      </h1>

      <div className="max-w-6xl mx-auto space-y-16">
        {services.map((service, i) => (
          <h2
            key={i}
            ref={(el) => (textRef.current[i] = el)}
            className="text-2xl md:text-4xl font-bold tracking-tight
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-black to-yellow-400
                       uppercase"
          >
            {service}
          </h2>
        ))}
      </div>
    </section>
  );
};

export default LandSiteDevelopmentThree;
