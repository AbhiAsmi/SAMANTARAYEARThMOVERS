import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutThree = () => {
  const statsRef = useRef([]);
  const hasAnimated = useRef(false); // 🔒 prevents re-run

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    statsRef.current.forEach((el) => {
      const endValue = parseInt(el.dataset.value, 10);
      const counter = { value: 0 };

      gsap.to(counter, {
        value: endValue,
        duration: 2,
        ease: "power3.out",
        onUpdate: () => {
          el.innerText = `${Math.floor(counter.value)}+`;
        },
      });
    });
  }, []);

  const stats = [
    ["15", "Years Experience"],
    ["120", "Projects Completed"],
    ["50", "Heavy Machines"],
    ["100", "Skilled Experts"],
  ];

  return (
    <section
      className="relative py-28 px-5 sm:px-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(255,115,0,0.55)), url('https://i.pinimg.com/736x/ef/37/22/ef37222f917ef763f5feeb78ff6ac402.jpg') ",
          cover: "true",
          center: "true",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
        {stats.map(([num, label], i) => (
          <div key={i}>
            <h2
              ref={(el) => (statsRef.current[i] = el)}
              data-value={num}
              className="text-4xl sm:text-5xl font-extrabold"
            >
              0+
            </h2>
            <p className="mt-2 text-gray-200">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutThree;
