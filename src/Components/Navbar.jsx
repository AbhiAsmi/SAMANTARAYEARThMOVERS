import React, { useState } from "react";
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
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden md:flex fixed top-0 left-0 w-full h-[10vh] bg-white z-50 shadow-sm items-center justify-center gap-8">
        {navLinks.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavigate(item.path)}
            className={`px-6 py-2 rounded-full border transition-all
              ${
                location.pathname === item.path
                  ? "bg-black text-white border-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden fixed top-0 left-0 w-full h-[10vh] bg-white z-50 shadow-sm flex items-center justify-between px-5">
        <div
          className="text-xl font-bold cursor-pointer text-black"
          onClick={() => handleNavigate("/")}
        >
          Samantaray
        </div>

        <RiMenuLine
          className="text-2xl cursor-pointer text-black"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= MOBILE MENU ================= */}
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
