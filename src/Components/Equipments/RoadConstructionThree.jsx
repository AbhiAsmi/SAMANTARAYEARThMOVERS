import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoadConstructionThree = () => {
  const itemsRef = useRef([]);

  const images = [
    "/roadconstruction/tom-shamberger--KAoVUNv9W0-unsplash.jpg",
    "roadconstruction/maria-lupan-XeRqsvi9qBc-unsplash.jpg",
    "roadconstruction/troy-mortier-eKY6_9W_iqY-unsplash.jpg",
  ];

  useEffect(() => {
    if (!itemsRef.current.length) return;

    gsap.from(itemsRef.current, {
      opacity: 0,
      scale: 0.95,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: itemsRef.current[0],
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="bg-gradient-to-br from-white to-[#fff7ef] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Project <span className="text-orange-500">Showcase</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={img}
                alt="Road construction project"
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="font-bold mb-2">Urban Road Project</h4>
                <p className="text-gray-600 text-sm">
                  Smooth, durable roads built with precision machinery.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadConstructionThree;
