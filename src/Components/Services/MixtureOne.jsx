import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MixtureOne = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%",
      },
    });

    gsap.fromTo(
      imageRef.current,
      { y: 80 },
      {
        y: -40,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#fff7ef] to-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* TEXT */}
        <div ref={textRef}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Concrete <span className="text-orange-500">Mixer Machine</span>
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mixer machines ensure uniform and high-quality concrete mixing
            for residential, commercial, and infrastructure projects.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Designed for efficiency and durability, our mixers handle heavy
            workloads while maintaining consistent output.
          </p>

          <button className="bg-orange-500 text-white px-9 py-4 rounded-full shadow-lg hover:scale-105 transition">
            Get Rental Quote
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -top-12 -right-12 w-[85%] h-[85%] bg-orange-500 rounded-xl"></div>
          <img
            ref={imageRef}
            src="/photos/Concrete Mixture Machine.png"
            alt="Concrete mixer machine"
            className="relative rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MixtureOne;
