import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Earthmoverthree = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-[#fffaf5] via-white to-[#fff1e6] py-20 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* TEXT CONTENT */}
        <div ref={textRef}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
            What is <span className="text-orange-500">earthmoving</span>?
          </h1>

          <h3 className="text-lg font-semibold text-gray-700 mb-6">
            Understanding Earthmoving and Its Importance in Construction and
            Land Development
          </h3>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Earthmoving refers to the process of moving large quantities of
            soil, rocks, and other materials from one place to another, typically
            using heavy machinery like excavators, bulldozers, and graders.
            This process is essential in construction, mining, and infrastructure
            development projects.
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Earthmoving is vital for preparing construction sites, leveling land,
            and creating stable ground for roads, bridges, and other infrastructures.
            It also plays a key role in mining operations by enabling the extraction
            of valuable resources.
          </p>

          <button
            ref={buttonRef}
            className="
              inline-flex items-center justify-center
              bg-gradient-to-r from-orange-500 to-orange-600
              text-white font-semibold px-8 py-4 rounded-full
              shadow-lg shadow-orange-500/30
              transition-all duration-300
              hover:scale-105 hover:shadow-orange-500/50
              active:scale-95
            "
          >
            CALL & GET QUOTE
          </button>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Orange frame */}
          <div className="absolute -top-10 -right-10 w-[85%] h-[85%] bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl"></div>

          <img
            ref={imageRef}
            src="https://media.istockphoto.com/id/1141690656/photo/crane-working-near-sand-quarry.jpg?s=2048x2048&w=is&k=20&c=3RxRCZWT0gUgK2wcEezUbKKueESaSVc-26RhFLPODh0=" // replace with your image path
            alt="Earthmoving"
            className="
              relative z-10 w-full max-w-lg rounded-xl
              shadow-2xl object-cover
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Earthmoverthree;
