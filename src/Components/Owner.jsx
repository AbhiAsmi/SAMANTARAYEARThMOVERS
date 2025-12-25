import React, { useRef } from "react";
export default function Owner() {
  const containerRef = useRef(null);

  const testimonials = [
    {
      name: "Alexandra Rodriguez",
      title: "CEO of Global Trade Solutions LLC",
      text:
        "ARROW has completely transformed the way we manage our supply chain. Their level of professionalism and dedication is unmatched...",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format",
    },
    {
      name: "Emily Johnson",
      title: "Operations Manager at FreshMart Foods",
      text:
        "As a growing tech company, we've dealt with several logistics providers over the years, but none have come close to the service we get from ARROW...",
      avatar:
        "https://images.unsplash.com/photo-1545996124-1b5e16a9b1e1?w=400&h=400&fit=crop&auto=format",
    },
    {
      name: "David Chen",
      title: "CEO of TechNest Solutions",
      text:
        "I've worked with many shipping companies, but [Your Company Name] stands out for their professionalism and reliability...",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&auto=format",
    },
    {
      name: "James Carter",
      title: "Head of Supply Chain at UrbanCraft Imports",
      text:
        "Partnering with ARROW has been one of the best decisions we've made for our logistics needs. They handle everything...",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop&auto=format",
    },
  ];

  function scroll(direction = "right") {
    const el = containerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  }

  return (
    <section className="bg-[#0b0b0b] text-gray-200 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div className="flex-1">
            <span className="inline-block text-xs uppercase tracking-widest bg-gray-800 px-3 py-1 rounded-md mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              YOUR TRUST, OUR JOURNEY —<br /> DELIVERING EXCELLENCE WORLDWIDE.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="scroll left"
              className="w-11 h-11 rounded-full bg-gray-800/70 hover:bg-gray-700 transition shadow-inner flex items-center justify-center"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="scroll right"
              className="w-11 h-11 rounded-full bg-orange-600 hover:bg-orange-500 transition shadow flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-6 -mx-2 md:-mx-0 px-2 md:px-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className={`desc-card flex-shrink-0 w-[320px] md:w-80 lg:w-96 p-6 rounded-2xl bg-gray-800/70 ring-1 ring-black/60 shadow-md transform transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:shadow-2xl`}
              style={{ scrollSnapAlign: "center" }}
              data-index={i}
            >
              <div className="flex items-start gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-black/50"
                />
                <div className="flex-1">
                  <p className="text-sm leading-relaxed mb-4 text-gray-300">{t.text}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/40">
                <p className="font-semibold text-gray-100">{t.name}</p>
                <p className="text-xs text-gray-400 mt-1">{t.title}</p>
              </div>
              <style>{`
                /* Add a smooth "yellow" overlay on hover using the :hover state on the article */
                .desc-card:hover {
                  /* background transition is handled by Tailwind's transition-all; change bg here to a warm yellow */
                }
                /* Use a subtle animation for floating effect when hovering */
                .desc-card:hover {
                  box-shadow: 0 25px 50px rgba(0,0,0,0.45);
                }
              `}</style>

            </article>
          ))}
        </div>
        <style>
          {`
            /* hide scrollbar for modern browsers (small helper) */
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

            /* We'll change the card background and text color on hover using a CSS selector so color transitions are smooth. */
            .desc-card { transition-property: transform, box-shadow, background-color, color; }
            .desc-card:hover { background-color: #f5c542; color: #0b0b0b; }
            .desc-card:hover p { color: inherit; }

            /* Slight staggered entrance animation when the component first mounts (CSS only) */
            .desc-card { opacity: 0; transform: translateY(10px); }
            .desc-card:nth-child(1) { animation: fadeUp 500ms ease forwards 120ms; }
            .desc-card:nth-child(2) { animation: fadeUp 500ms ease forwards 200ms; }
            .desc-card:nth-child(3) { animation: fadeUp 500ms ease forwards 280ms; }
            .desc-card:nth-child(4) { animation: fadeUp 500ms ease forwards 360ms; }

            @keyframes fadeUp {
              to { opacity: 1; transform: translateY(0); }
            }

            /* Make the center card (on wide screens) pop slightly to mimic the highlighted card in the image */
            @media (min-width: 1024px) {
              .desc-card:nth-child(2) { transform: translateY(-6px); }
            }
          `}
        </style>
      </div>
    </section>
  );
}
