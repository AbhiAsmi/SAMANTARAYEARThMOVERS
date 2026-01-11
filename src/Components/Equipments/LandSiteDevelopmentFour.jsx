import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LandSiteDevelopmentFour = () => {
  const sectionRef = useRef(null);
  const [position, setPosition] = useState(50);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-32 px-6"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          Land <span className="text-orange-600">Transformation</span>
        </h2>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          See how raw land is transformed into development-ready sites through
          expert planning, grading, and execution.
        </p>
      </div>

      {/* Before After Container */}
      <div className="relative max-w-6xl mx-auto h-[65vh] rounded-[2.5rem] overflow-hidden shadow-2xl">

        {/* AFTER IMAGE */}
        <img
          src="/images/land-after.jpg"
          alt="Developed land"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BEFORE IMAGE */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src="/images/land-before.jpg"
            alt="Raw land"
            className="w-full h-full object-cover"
          />
        </div>

        {/* SLIDER */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[60%] accent-orange-600 cursor-pointer"
        />

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-orange-600"
          style={{ left: `${position}%` }}
        />
      </div>
    </section>
  );
};

export default LandSiteDevelopmentFour;
