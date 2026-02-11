import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrailerOne = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      wrapRef.current.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] py-24 px-6 text-white">
      <div
        ref={wrapRef}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Heavy Trailer <span className="text-orange-500">Transport</span>
          </h1>

          <p className="text-gray-300 mb-6 leading-relaxed">
            We specialize in transporting heavy machinery, construction equipment,
            and oversized loads using high-capacity trailers designed for safety
            and efficiency.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"></div>
          <img
            src="/photos/trailer logistics.png"
            alt="Heavy trailer"
            className="relative rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default TrailerOne;
