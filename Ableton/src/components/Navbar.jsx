import React, { useState, useEffect } from "react";
import logo from "../assets/abletonLogo.jpg";
import { motion } from "motion/react";

const Navbar = () => {
  const [showNav2, setShowNav2] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Check if at the very top of the page
      setAtTop(currentScroll <= 10);

      if (currentScroll > lastScrollY) {
        // Scrolling DOWN → hide Nav2
        setShowNav2(false);
      } else if (currentScroll < lastScrollY && currentScroll > 80) {
        // Scrolling UP (but not at top) → show Nav2
        setShowNav2(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="w-full relative">
      <nav className="w-full flex px-8 bg-white items-center border-b-2 border-gray-300 relative z-20">
        <img className="w-15 mr-6 " src={logo} alt="ableton logo" />
        <div>
          <ul className="flex space-x-8 font-semibold text-sm">
            <li>Live</li>
            <li>Push</li>
            <li>Move</li>
            <li>Note</li>
            <li>Link</li>
            <li>Shop</li>
            <li>Packs</li>
            <li>Help</li>
            <li className="text-orange">More</li>
          </ul>
        </div>
        <div className="ml-auto">
          <ul className="flex space-x-6 items-center text-sm font-semibold">
            <li className="text-blue text-lg font-semibold">
              Try Live 12 for free
            </li>
            <li>Log in or register</li>
          </ul>
        </div>
      </nav>
      <motion.nav
        initial={{ y: -80 }}
        animate={{
          y: showNav2 ? 0 : -80,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`w-full px-8 py-6 bg-white ${
          atTop
            ? "absolute left-0 top-full z-10"
            : "fixed left-0 top-0 z-30 shadow-md"
        }`}
      >
        <ul className="flex items-center space-x-6 font-semibold text-sm">
          <li className="text-orange">About</li>
          <li>Jobs</li>
          <li>Apprenticeships</li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
