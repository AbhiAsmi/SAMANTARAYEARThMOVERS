import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const navLinks = [
  { label: "Home", id: "home" },
  // { label: "Building", id: "building" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Equipments", id: "description" },
  { label: "Contact US", id: "owner" },
];

const Navbar = () => {
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const overlay = overlayRef.current;

    gsap.set(menu, { right: "-100%" });
    gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none" });

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(overlay, {
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 0.2,
      })
      .to(
        menu,
        {
          right: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "<"
      )
      .from(menu.querySelectorAll("h1"), {
        x: 60,
        opacity: 0,
        stagger: 0.08,
        duration: 0.3,
      });
  }, []);

  const openMenu = () => tl.current.play();
  const closeMenu = () => tl.current.reverse();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <>
      {/* DESKTOP NAV */}
      <div className="hidden md:flex w-full h-[10vh] items-center justify-evenly fixed top-0 left-0 z-50 bg-white">
        {navLinks.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.id)}
            className="border-2 border-black rounded-full px-6 h-[38px] flex items-center hover:bg-black hover:text-white transition"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 w-full h-[10vh] bg-white flex items-center justify-between px-5 z-50">
        <div className="font-bold text-xl">Samantaray</div>
        <RiMenuLine className="text-2xl cursor-pointer" onClick={openMenu} />
      </div>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        onClick={closeMenu}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
        className="fixed top-0 right-[-100%] w-[60%] h-full bg-black text-white z-50"
      >
        <RiCloseLine
          className="text-3xl absolute top-5 right-5 cursor-pointer hover:rotate-90 transition-transform"
          onClick={closeMenu}
        />

        <div className="pt-24 flex flex-col items-center gap-6">
          {navLinks.map((item) => (
            <h1
              key={item.label}
              className="text-lg font-medium cursor-pointer hover:text-blue-400"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
