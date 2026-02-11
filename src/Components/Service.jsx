import React, { useRef, useState } from "react";

const services = [
  {
    title: "Infrastructure Development",
    image: "photos/infrastructure developement.png",
    video: "/videos/s earth movers~2.mp4",
    desc: "We provide advanced concrete mixer machines for a wide range of infrastructure projects, including building construction, bridges, highways, and dams, ensuring strong, reliable, and high-quality construction performance across every project.",
  },
  {
    title: "Land Site Development",
    image: "photos/landsite developement.png",
    video: "/videos/s earth movers~4.mp4",
    desc: "Landslide development uses excavators, bulldozers, loaders, dump trucks, and compactors to remove unstable soil, stabilize slopes, manage drainage, and safely prepare terrain for construction and infrastructure projects in challenging environments.",
  },
  {
    title: "Road Construction",
    image: "/photos/road roller.png",
    video: "/videos/road construction.mp4~2.mp4",
    desc: "We provide reliable, high-performance road rollers and professional road construction services to ensure strong, smooth and long-lasting roads for every project.",
  },
  {
    title: "Waterline Project",
    image: "/photos/trailers.png",
    video: "/videos/s earth movers~3.mp4",
    desc: "We provide powerful, heavy-duty trailers and transport support to safely carry large equipment, pipes, and materials for waterline construction and development projects.",
  },
];

const Service = () => {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // stop previous video
    if (activeIndex !== null && activeIndex !== index) {
      const prevVideo = videoRefs.current[activeIndex];
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }
    }

    if (activeIndex === index) {
      video.pause();
      video.currentTime = 0;
      setActiveIndex(null);
    } else {
      video.play();
      setActiveIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50 px-6 py-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-16 text-gray-900">
        Our <span className="text-orange-500">Services</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl bg-white/70 backdrop-blur-md
                       border border-orange-100
                       transition-all duration-500
                       hover:shadow-[0_20px_40px_rgba(255,165,0,0.35)]
                       p-6"
          >
            <h2 className="text-center text-xl font-semibold mb-5
                           text-black group-hover:text-orange-500
                           transition-colors duration-300">
              {item.title}
            </h2>
            <div
              className="relative mx-auto overflow-hidden rounded-2xl cursor-pointer bg-white
                         w-[90%] h-[260px]
                         sm:w-[85%] sm:h-[320px]
                         md:w-[80%] md:h-[420px]"
              onClick={() => handleToggle(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-500
                  ${
                    activeIndex === index
                      ? "opacity-0"
                      : "opacity-100 md:group-hover:opacity-0"
                  }
                `}
              />

              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-500
                  ${
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-0 md:group-hover:opacity-100"
                  }
                `}
                onMouseEnter={(e) => {
                  if (window.innerWidth >= 768) e.target.play();
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth >= 768) {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }
                }}
              />
            </div>
            <p className="text-center text-gray-600 text-sm mt-6 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
