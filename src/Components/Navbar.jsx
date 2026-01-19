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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };
  const showWhiteNavbar = !isHome || scrolled;

  return (
    <>
      <div
        className={`hidden md:flex fixed top-0 left-0 w-full h-[10vh] z-50 items-center justify-center gap-8
          transition-all duration-300
          ${showWhiteNavbar ? "bg-white shadow-sm" : "bg-transparent"}
        `}
      >
        {navLinks.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavigate(item.path)}
            className={`px-6 py-2 rounded-full border transition-all duration-300
              ${
                location.pathname === item.path
                  ? "bg-black text-white border-black"
                  : showWhiteNavbar
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-black"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-[10vh] z-50 flex items-center justify-between px-5
          transition-all duration-300
          ${showWhiteNavbar ? "bg-white shadow-sm" : "bg-transparent"}
        `}
      >
        <div
          className={`text-xl font-bold cursor-pointer transition-colors duration-300
            ${showWhiteNavbar ? "text-black" : "text-white"}
          `}
          onClick={() => handleNavigate("/")}
        >
          Samantaray
        </div>

        <RiMenuLine
          className={`text-2xl cursor-pointer transition-colors duration-300
            ${showWhiteNavbar ? "text-black" : "text-white"}
          `}
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 w-[75%] h-full bg-white z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <RiCloseLine
          className="text-3xl absolute top-5 right-5 cursor-pointer text-black"
          onClick={() => setOpen(false)}
        />

        <div className="pt-28 flex flex-col items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              className={`text-lg font-semibold transition-colors
                ${
                  location.pathname === item.path
                    ? "text-orange-500"
                    : "text-black hover:text-orange-500"
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
