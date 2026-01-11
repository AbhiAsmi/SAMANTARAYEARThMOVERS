import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadConstructionFour = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.from(gridRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">
          Road Construction <span className="text-orange-500">Excellence</span>
        </h2>
      </div>

      <div
        ref={gridRef}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <img
            key={i}
            src="photos/Gemini_Generated_Image_4c83wv4c83wv4c83.png"
            alt="Road work"
            className="rounded-xl shadow hover:scale-105 transition"
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-orange-500 text-white px-10 py-4 rounded-full shadow-lg hover:scale-105 transition">
          Get A Quote
        </button>
      </div>
    </section>
  );
};

export default RoadConstructionFour;
