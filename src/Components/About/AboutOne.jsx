import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutOne = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      duration: 1.1,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="bg-white py-24 px-5 sm:px-10">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <span className="text-orange-500 text-3xl tracking-widest font-semibold uppercase">
            About Us
          </span>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            We Build Strong <br />
            Foundations for Growth
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
            We are a land and infrastructure development company specializing in
            site preparation, earthwork, and construction support using modern
            machinery and experienced teams.
          </p>
        </div>

        <div className="h-[45vh] sm:h-[55vh] rounded-3xl overflow-hidden">
          <img
            src="/photos/SE office.png"
            alt="About company"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
