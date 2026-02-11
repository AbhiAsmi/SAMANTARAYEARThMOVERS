import React, { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Equipments", path: "/equipments" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const isDarkNavbar = !isHome || scrolled;

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-[70px] z-50 transition-colors duration-300
        ${isDarkNavbar ? "bg-black" : "bg-transparent"}`}
      >
        <div
          onClick={() => handleNavigate("/")}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center cursor-pointer"
        >
          <img
            src="/icon/se logo.png"
            alt="logo"
            className="w-[70px] h-[70px] rounded-full"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-orange-500 font-bold text-lg">
              SAMANTARAY
            </span>
            <span
              className={`text-sm font-bold transition-colors
              ${isDarkNavbar ? "text-white" : "text-white"}`}
            >
              EARTHMOVERS
            </span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex absolute left-[30%] top-1/2 -translate-y-1/2 gap-8">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              className={`px-5 py-2 rounded-full border transition-all duration-300
                ${
                  location.pathname === item.path
                    ? "bg-white text-black border-black"
                    : isDarkNavbar
                    ? "border-black text-white hover:bg-white hover:text-black"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* MOBILE ICON */}
        <RiMenuLine
          className={`md:hidden absolute right-5 top-1/2 -translate-y-1/2 text-3xl cursor-pointer
          ${isDarkNavbar ? "text-white" : "text-white"}`}
          onClick={() => setOpen(true)}
        />
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 w-[75%] h-full bg-black z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <RiCloseLine
          className="absolute top-5 right-5 text-3xl cursor-pointer text-white"
          onClick={() => setOpen(false)}
        />

        <div className="mt-28 flex flex-col items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              className={`text-lg font-semibold transition-colors
                ${
                  location.pathname === item.path
                    ? "text-orange-500"
                    : "text-white hover:text-orange-500"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
