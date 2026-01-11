import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutTwo = () => {
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
    <section className="bg-white py-28 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTwo;
