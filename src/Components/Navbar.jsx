import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";

/* NAV ITEMS — MATCH YOUR ROUTES */
const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Equipments", path: "/equipments" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const menu = menuRef.current;
    const overlay = overlayRef.current;

    /* GSAP CONTROLS POSITION (IMPORTANT) */
    gsap.set(menu, { x: "100%" });
    gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none" });

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(overlay, {
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 0.25,
      })
      .to(
        menu,
        {
          x: "0%",
          duration: 0.45,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        menu.querySelectorAll("h1"),
        {
          x: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.3,
        },
        "-=0.2"
      );
  }, []);

  const openMenu = () => {
    tl.current.play();
  };

  const closeMenu = () => {
    tl.current.reverse();
  };

  const handleNavigate = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    closeMenu();
  };

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden md:flex w-full h-[10vh] fixed top-0 left-0 z-50 bg-white shadow-sm items-center justify-evenly">
        {navLinks.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavigate(item.path)}
            className={`border-2 rounded-full px-6 h-[38px] flex items-center transition-all
              ${
                location.pathname === item.path
                  ? "bg-black text-white border-black"
                  : "border-black hover:bg-black hover:text-white"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden fixed top-0 left-0 w-full h-[10vh] bg-white z-50 shadow-sm flex items-center justify-between px-5">
        <div
          className="font-bold text-xl cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          Samantaray
        </div>
        <RiMenuLine
          className="text-2xl cursor-pointer"
          onClick={openMenu}
        />
      </div>

      {/* ================= OVERLAY ================= */}
      <div
        ref={overlayRef}
        onClick={closeMenu}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* ================= MOBILE MENU ================= */}
      <div
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
        className="fixed top-0 right-0 w-[70%] h-full bg-black text-white z-50"
      >
        <RiCloseLine
          className="text-3xl absolute top-5 right-5 cursor-pointer hover:rotate-90 transition-transform"
          onClick={closeMenu}
        />

        <div className="pt-28 flex flex-col items-center gap-7">
          {navLinks.map((item) => (
            <h1
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              className={`text-lg font-medium cursor-pointer transition
                ${
                  location.pathname === item.path
                    ? "text-orange-400"
                    : "hover:text-orange-400"
                }`}
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
