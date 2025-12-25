
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Description({ items = defaultItems }) {
  const containerRef = useRef(null);
  const rafIdRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.3,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
    });
    lenisRef.current = lenis;

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
      if (!itemsEls.length) return;

      const mm = gsap.matchMedia();

      /* ================= DESKTOP ================= */
      mm.add("(min-width: 768px)", () => {
        const wrapper = container.querySelector(".stack-wrapper");
        gsap.set(wrapper, { position: "relative" });

        gsap.set(itemsEls, {
          position: "absolute",
          inset: 0,
          margin: "auto",
          width: "100%",
          autoAlpha: 0,
          y: 50,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top 20%",
            end: "+=1600",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
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
            y: -35,
            duration: 0.28,
            ease: "power2.inOut",
          });
        });

        return () => tl.kill();
      });
      mm.add("(max-width: 767px)", () => {
        const wrapper = container.querySelector(".stack-wrapper");
        gsap.set(wrapper, { position: "relative" });

        gsap.set(itemsEls, {
          position: "absolute",
          inset: 0,
          margin: "auto",
          width: "95%",
          height: "90%",
          autoAlpha: 0,
          y: 20,
          display: "flex",
          flexDirection: "column",
        });

        itemsEls.forEach((el) => {
          const img = el.querySelector(".desc-image");
          const arrow = el.querySelector(".desc-arrow");
          const text = el.querySelector(".desc-text");

          if (img) gsap.set(img, { height: "60%", width: "100%" });
          if (arrow)
            gsap.set(arrow, {
              height: "10%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            });
          if (text)
            gsap.set(text, {
              height: "30%",
              width: "100%",
              overflowY: "auto",
            });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top 15%",
            end: "+=1000",
            scrub: 0.4,
            pin: true,
            anticipatePin: 1,
          },
        });

        let z = 1;
        itemsEls.forEach((el, i) => {
          tl.to(
            el,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.25,
              ease: "power3.out",
              onStart: () => gsap.set(el, { zIndex: z++ }),
            },
            i === 0 ? 0 : "-=0.18"
          ).to(el, {
            autoAlpha: 0,
            y: -18,
            duration: 0.2,
            ease: "power2.inOut",
          });
        });

        return () => tl.kill();
      });
    }, containerRef);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white text-black py-20 px-6 md:px-16"
    >
      <h1 className="text-3xl font-semibold mb-6">VEHICLES</h1>

      <div className="stack-wrapper relative w-full h-full" style={{ height: "70vh" }}>
        {items.map((it) => (
          <article
            key={it.id}
            className="desc-item flex flex-col md:flex-row  items-center gap-6 px-6 py-6 rounded-2xl bg-black md:bg-white"
          >
            <div className="desc-image w-full md:w-[45%] h-[40%] md:h-[70%] text-black bg-amber-900 rounded-md overflow-hidden">
              <img
                src={it.imgSrc}
                alt={it.title}
                className="w-full h-full object-cover text-black"
              /> 
            </div>

            <div className="desc-arrow h-[10%] md:h-auto flex items-center justify-center">
              <ArrowIcon />
            </div>

            <div className="desc-text w-full md:w-[45%] h-[40%] md:h-auto overflow-hidden">
              <h1 className="text-2xl underline">{it.title}</h1>
              <p className="text-white md:text-black  text-[3vw] md:text-[2vw] p-4">{it.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const ArrowIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="8" fill="white" fillOpacity="0.06" />
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
    text: "mixer machine- Reliable concrete mixer for road construction, infrastructure projects, and professional rental operations.",
    imgSrc: "photos/ChatGPT Image Dec 21, 2025, 12_29_54 PM.png",
  },
  {
    id: "2",
    title: "Earthmover",
    text: " Powerful earthmover for construction, land development, and major infrastructure projects with rental support.",
    imgSrc: "photos/ChatGPT Image Dec 21, 2025, 12_38_02 PM.png",
  },
  {
    id: "3",
    title: "Trailer",
    text: "Reliable heavy trailer for transporting machinery, vehicles, electrical poles, and construction materials safely.",
    imgSrc: "photos/Gemini_Generated_Image_2r89lj2r89lj2r89.png",
  },
  {
    id: "4",
    title: "Exavitor",
    text: "Powerful excavator for construction, land development, and infrastructure projects with reliable rental service.",
    imgSrc: "photos/Gemini_Generated_Image_jx7z57jx7z57jx7z~2.png",
  },
  {
    id: "5",
    title: "Road-Roller",
    text: "road roller- Powerful road roller for highway building, site preparation, infrastructure development, and rental use.",
    imgSrc: "photos/Gemini_Generated_Image_x58sxzx58sxzx58s~2.png",
  },
];
