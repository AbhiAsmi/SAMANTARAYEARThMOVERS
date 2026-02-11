import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfrastructureDevelopmentOne = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
      }
    );

    gsap.to(imageRef.current, {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative min-h-[100vh] bg-gradient-to-br from-[#f2f6ff] via-white to-[#fff4ec] px-6 py-24 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-orange-300/30 blur-[140px] rounded-full" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={textRef}>
          <span className="text-orange-500 text-sm tracking-widest uppercase font-semibold">
            Infrastructure Development 
          </span>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight mt-4 mb-6">
            Engineering the
            <span className="text-orange-500"> Future</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
            We help to design, build, and deliver world-class infrastructure using
            advanced machinery, precision planning, and industry expertise.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {[
              ["40+", "Years"],
              ["1000+", "Projects"],
              ["98%", "Success"],
            ].map(([num, label], i) => (
              <div key={i} className="bg-white/70 backdrop-blur-lg rounded-2xl p-5 shadow-lg">
                <h3 className="text-3xl font-extrabold text-orange-500">
                  {num}
                </h3>
                <p className="text-gray-600 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={imageRef}
          className="relative h-[60vh] w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="photos/ChatGPT Image Dec 21, 2025, 12_29_54 PM.png"
            alt="Infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InfrastructureDevelopmentOne;
