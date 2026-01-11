import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LandSiteDevelopmentOne = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: -150, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.4, ease: "power4.out" }
    );

    gsap.fromTo(
      textRef.current.children,
      { x: 120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section className="min-h-[100vh] bg-[#f7f4ef] flex items-center px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* IMAGE */}
        <div
          ref={imageRef}
          className="relative h-[65vh] w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <img
            src="/images/landsite-hero.jpg"
            alt="Land Development"
            className="h-full w-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div ref={textRef}>
          <span className="uppercase tracking-widest text-sm text-orange-600 font-semibold">
            Land Site Development
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight mt-4 mb-6">
            Preparing Land <br />
            <span className="text-orange-600">For the Future</span>
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-xl">
            We transform raw land into development-ready sites through expert
            excavation, grading, drainage, and soil stabilization solutions.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-xl">
            Our approach balances environmental responsibility with engineering
            precision, ensuring strong foundations for long-term projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandSiteDevelopmentOne;
