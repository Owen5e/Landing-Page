import React from "react";
import logo from "../assets/abstract-svgrepo-com.svg";
// import logo from "../assets/abstract-svg.svg";
// import logo from "../assets/abstract-svg.svg";
// import logo from "../assets/abstract-svg.svg";
// import logo from "../assets/abstract-svg.svg";
// import logo from "../assets/abstract-svg.svg";
// import logo from "../assets/abstract-svg.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between px-18 py-4 bg-black text-white text-2xl w-full ">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <img
            src={logo}
            alt="abstract logo"
            className="text-white accent-white w-8 h-full"
          />
          <h1 className=" font-semibold border-r-2 border-white pr-4">
            Abstract
          </h1>
        </div>
        <p>Help Center</p>
      </div>
      <div className="flex gap-4 items-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="bg-white text-black rounded-md px-4 py-2 outline-none md:w-65 placeholder:text-xl"
        />
        <button className="md:px-6 border border-white py-2 px-2 rounded-md">
          Submit a request
        </button>
        <button className=" bg-blue py-2 px-6 rounded-md">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
