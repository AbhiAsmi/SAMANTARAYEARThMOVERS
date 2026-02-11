import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutFour = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.set(itemsRef.current, { opacity: 0, x: -80 });

    gsap.to(itemsRef.current, {
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  const points = [
    "Advanced and well-maintained machinery",
    "Experienced operators and engineers",
    "Strict safety and quality standards",
    "Transparent execution and timelines",
    "Complete land development solutions",
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-28 px-5 sm:px-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT — TEXT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-14 text-gray-900">
            Why <span className="text-orange-500">Choose Us</span>
          </h2>

          <div className="space-y-10">
            {points.map((p, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="relative pl-8"
              >
                {/* Accent Line */}
                <span className="absolute left-0 top-1 h-full w-[3px] bg-orange-500 rounded-full"></span>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="h-[60vh] rounded-3xl overflow-hidden shadow-2xl relative">
            <video
              src="/photos/5200378-uhd_3840_2160_30fps.mp4"
              muted
              autoPlay
              loop
              alt="Why choose us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 "></div>
            <div className="absolute inset-0 backdrop-blur-[1.5px]"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutFour;
