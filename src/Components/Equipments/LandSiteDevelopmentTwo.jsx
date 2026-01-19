import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LandSiteDevelopmentTwo = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current.children, {
      y: 120,
      opacity: 0,
      stagger: 0.2,
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        once: true,
      },
    });

    gsap.to(imageRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="bg-white py-28 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div ref={textRef}>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            What We <span className="text-orange-600">Deliver</span>
          </h2>

          <ul className="space-y-6 text-gray-700 text-lg">
            <li>• Land clearing & excavation</li>
            <li>• Precision grading & leveling</li>
            <li>• Drainage & soil stabilization</li>
            <li>• Utility & access preparation</li>
          </ul>

          <p className="mt-8 text-gray-600 max-w-lg leading-relaxed">
            Each site is prepared with compliance, safety, and future scalability
            in mind—reducing risk and accelerating project timelines.
          </p>
        </div>

        {/* IMAGE */}
        <div
          ref={imageRef}
          className="relative h-[60vh] rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <video
            src="videos/Excavation_and_Land_Clearing_Video.mp4"
            muted
            autoPlay
            loop
            alt="Site preparation"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LandSiteDevelopmentTwo;
