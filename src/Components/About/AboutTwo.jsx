import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutTwo = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        x: -120,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.35,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.8,
        },
      }
    );
  }, []);

  const data = [
    {
      title: "Our Mission",
      text: "Deliver reliable land and infrastructure solutions with safety, quality, and efficiency.",
    },
    {
      title: "Our Vision",
      text: "Become a trusted partner in shaping sustainable development projects.",
    },
    {
      title: "Our Values",
      text: "Safety, precision engineering, transparency, and on-time delivery.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {data.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="border border-black rounded-xl p-8 bg-white"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTwo;
