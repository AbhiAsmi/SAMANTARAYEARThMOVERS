import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadConstructionOne = () => {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current || !imgRef.current) return;

    gsap.from([...wrapRef.current.children], {
      opacity: 0,
      y: 60,
      stagger: 0.18,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: wrapRef.current,
        start: "top 80%",
      },
    });

  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff3e8] via-white to-[#fff9f4] py-20 px-5 sm:px-8 lg:px-12">
    
      <div className="absolute -top-40 -right-40 w-[360px] h-[360px] bg-orange-300/30 blur-[140px] rounded-full" />

      <div
        ref={wrapRef}
        className="relative max-w-7xl mx-auto rounded-3xl bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        <div>
          <span className="inline-block mb-3 text-sm tracking-widest text-orange-500 font-semibold uppercase">
            Rental Equipments
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Road Construction{" "}
            <span className="text-orange-500">Solutions</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            We deliver high-performance road construction machinery designed to
            handle projects of all scales—from urban infrastructure to
            large-scale highways. Our equipment ensures strength, precision, and
            long-lasting durability.
          </p>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
            With expert support, on-time delivery, and modern technology, we help
            contractors achieve faster execution, reduced downtime, and superior
            construction quality.
          </p>
        </div>
        <div
          className="relative w-full 
                     min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]
                     aspect-[16/10]
                     rounded-2xl overflow-hidden group shadow-2xl"
        >
          <img
            src="/photos/road construction.png"
            alt="Road construction machinery"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/30 to-orange-400/40 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default RoadConstructionOne;
