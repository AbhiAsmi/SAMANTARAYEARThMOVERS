import React, { useEffect, useRef, useState } from "react";

const Counter = ({ target, label, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const stepTime = 25;
    const increment = target / (duration / stepTime);

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [start, target]);

  return (
    <div>
      <h2 className="text-4xl font-bold text-black">{count}+</h2>
      <p className="text-sm text-gray-600 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden"
    >
      <div
        className="
          relative
          bg-gradient-to-r
          from-white
          via-gray-100
          to-gray-300
          animate-gradient
        "
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Our Services—, <br />
              Everlasting Value
            </h1>

            <div className="w-14 h-1 bg-orange-500 my-6"></div>

            <p className="text-gray-700 mb-4 max-w-lg">
              At Samantaray Earthmovers, we provide end-to-end earthmoving, construction support,
               and logistics services for infrastructure and development projects of all scales. 
               Backed by modern machinery and 
              experienced operators, we ensure safe, timely, and efficient execution on every site.
            </p>

            <p className="text-gray-700 mb-12 max-w-lg">
              Our services include earthmoving and land development, excavator operations, reliable logistics and heavy transportation, 
              road roller services for compaction and roadworks, and mixer machine services for building and concrete works.
               Each project is handled with precision, strict safety standards, and a commitment to long-term value.
            </p>

            <div className="flex gap-14 flex-wrap">
              <Counter start={startCount} target={40} label="Years of Experience" />
              <Counter start={startCount} target={1000} label="Successful Projects" />
              <Counter start={startCount} target={60} label="Machines & Equipment" />
            </div>
          </div>
          <div className="relative h-[420px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/photos/ChatGPT Image Feb 9, 2026, 11_43_56 PM.png"
              alt="Earthmoving Machine"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-white
                via-white/60
                to-transparent
              "
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
