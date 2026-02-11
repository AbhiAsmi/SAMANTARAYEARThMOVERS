import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadRollerOne = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
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
        ease: "none",
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div ref={textRef}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Road Roller <span className="text-orange-500">Compaction</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Our road roller services ensure maximum soil and asphalt compaction,
            delivering long-lasting strength for highways and infrastructure.
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:scale-105 transition">
            Get Service
          </button>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -right-10 w-[85%] h-[85%] bg-orange-500 rounded-xl"></div>
          <video
            ref={imageRef}
            src="/photos/road construction.mp4~2.mp4"
            muted
            autoPlay
            loop
            alt="Road roller"
            className="relative rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default RoadRollerOne;
