import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Description({ items = defaultItems }) {
  const containerRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.35,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      rafIdRef.current = requestAnimationFrame(raf);
    };
    rafIdRef.current = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      const itemsEls = gsap.utils.toArray(".desc-item", container);
      const wrapper = container.querySelector(".stack-wrapper");
      if (!itemsEls.length || !wrapper) return;

      const mm = gsap.matchMedia();

      /* ================= DESKTOP ================= */
      mm.add("(min-width: 768px)", () => {
        gsap.set(wrapper, { position: "relative" });

        gsap.set(itemsEls, {
          position: "absolute",
          inset: 0,
          margin: "auto",
          width: "100%",
          autoAlpha: 0,
          y: 60,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top 20%",
            end: "+=1600",
            scrub: 0.6,
            pin: true,
          },
        });

        let z = 1;
        itemsEls.forEach((el, i) => {
          tl.to(
            el,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power3.out",
              onStart: () => gsap.set(el, { zIndex: z++ }),
            },
            i === 0 ? 0 : "-=0.22"
          ).to(el, {
            autoAlpha: 0,
            y: -40,
            duration: 0.3,
            ease: "power2.inOut",
          });
        });

        return () => tl.kill();
      });

      /* ================= MOBILE ================= */
      mm.add("(max-width: 767px)", () => {
        gsap.set(wrapper, { position: "relative" });

        gsap.set(itemsEls, {
          position: "absolute",
          inset: 0,
          margin: "auto",
          width: "92%",
          height: "80vh",
          autoAlpha: 0,
          y: 30,
          display: "flex",
          flexDirection: "column",
        });

        itemsEls.forEach((el) => {
          const img = el.querySelector(".desc-image");
          const arrow = el.querySelector(".desc-arrow");
          const text = el.querySelector(".desc-text");

          if (img) gsap.set(img, { height: "55%" });
          if (arrow) gsap.set(arrow, { height: "10%" });
          if (text)
            gsap.set(text, {
              height: "35%",
              overflowY: "auto",
            });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top 10%",
            end: "+=1200",
            scrub: 0.4,
            pin: true,
          },
        });

        let z = 1;
        itemsEls.forEach((el, i) => {
          tl.to(
            el,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: "power3.out",
              onStart: () => gsap.set(el, { zIndex: z++ }),
            },
            i === 0 ? 0 : "-=0.18"
          ).to(el, {
            autoAlpha: 0,
            y: -25,
            duration: 0.25,
            ease: "power2.inOut",
          });
        });

        return () => tl.kill();
      });
    }, containerRef);

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white text-black py-24 px-4 md:px-16"
    >
      {/* LONG HEADING */}
      <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-tight max-w-4xl">
        Heavy Vehicles & Machinery <br className="hidden md:block" />
        Powering Infrastructure Development
      </h1>

      <div
        className="stack-wrapper relative w-full"
        style={{ height: "80vh" }}
      >
        {items.map((it) => (
          <article
            key={it.id}
            className="
              desc-item
              flex flex-col md:flex-row
              items-center gap-6
              px-5 py-6
              rounded-3xl
              bg-black md:bg-white
              shadow-xl
            "
          >
            {/* IMAGE */}
            <div className="desc-image w-full md:w-[45%] rounded-xl overflow-hidden">
              <img
                src={it.imgSrc}
                alt={it.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="desc-arrow flex items-center justify-center">
              <ArrowIcon />
            </div>
            <div className="desc-text w-full md:w-[45%] px-2">
              <h2 className="text-2xl font-semibold underline decoration-orange-600 mb-3">
                {it.title}
              </h2>
              <p className="text-white md:text-black text-base md:text-lg leading-relaxed">
                {it.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const ArrowIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="8" fill="white" fillOpacity="0.08" />
    <path
      d="M7 12h10M13 8l4 4-4 4"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const defaultItems = [
  {
    id: "1",
    title: "Mixer Machine",
    text: "Reliable concrete mixer for road construction, infrastructure projects, and professional rental operations.",
    imgSrc: "photos/ChatGPT Image Dec 21, 2025, 12_29_54 PM.png",
  },
  {
    id: "2",
    title: "Earthmover",
    text: "Powerful earthmover for construction, land development, and major infrastructure projects with rental support.",
    imgSrc: "photos/ChatGPT Image Dec 21, 2025, 12_38_02 PM.png",
  },
  {
    id: "3",
    title: "Trailer",
    text: "Heavy trailer for transporting machinery, vehicles, and construction materials safely.",
    imgSrc: "photos/Gemini_Generated_Image_2r89lj2r89lj2r89.png",
  },
  {
    id: "4",
    title: "Excavator",
    text: "High-performance excavator for infrastructure, mining, and land development projects.",
    imgSrc: "photos/Gemini_Generated_Image_jx7z57jx7z57jx7z~2.png",
  },
  {
    id: "5",
    title: "Road Roller",
    text: "Powerful road roller for highways, site preparation, and infrastructure development.",
    imgSrc: "photos/Gemini_Generated_Image_x58sxzx58sxzx58s~2.png",
  },
];
