import React from "react";
import logo from "../assets/abletonLogo.jpg";
import facebook from "../assets/facebook-svg.svg";
import x from "../assets/x-svg.svg";
import youtube from "../assets/youtube-svg.svg";
import instagram from "../assets/instagram-svg.svg";
import tiktok from "../assets/tiktok-svg.svg";
import discord from "../assets/discord-svg.svg";

const Footer = () => {
  return (
    <div className="md:px-25 py-25 w-full">
      <h1 className="text-6xl font-semibold mb-10 p-0">Ableton</h1>
      <div className="grid md:grid-cols-[1fr_1fr_1fr] gap-x-1 gap-y-12 text-lg w-full">
        <div className="col-span-1">
          <ul>
            <li>Register Live, Push or Move {">"}</li>
            <li>About Ableton {">"}</li>
            <li>Jobs {">"}</li>
          </ul>
          <div className="flex space-x-2 mt-6 items-center">
            <div className="w-8 h-8">
              <img
                src={facebook}
                alt="facebook logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-8 h-8">
              <img
                src={x}
                alt="x logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-8 h-8">
              <img
                src={youtube}
                alt="youtube logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-8 h-8">
              <img
                src={instagram}
                alt="instagram logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-8 h-8">
              <img
                src={tiktok}
                alt="tiktok logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-8 h-8">
              <img
                src={discord}
                alt="discord logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="font-semibold text-lg">Education</h2>
          <ul>
            <li>Offers for students and teachers {">"}</li>
            <li>Ableton for the Classroom {">"}</li>
            <li>Ableton for College and Universities {">"}</li>
          </ul>
        </div>
        <div className="col-span-1 md:w-110">
          <h2 className="font-semibold text-lg">Sign up to our newsletter</h2>

          <p className="mb-6">
            Enter your email address to stay up to date with our latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className=" p-2 outline-0 bg-gray-200 md:w-full pl-4"
            />
            <button
              disabled="disabled"
              className="bg-blue text-white px-4 py-2 font-semibold text-lg md:w-30"
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="font-semibold text-lg">Community</h2>
          <ul>
            <li>Find Ableton User Groups {">"}</li>
            <li>Find Certified Training {">"}</li>
            <li>Become a Certified Trainer {">"}</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="font-semibold text-lg mb-2">Language and Location</h2>
          <div className="flex space-x-2 w-full">
            <div className="px-2 py-1 outline-0 bg-gray-200 text-sm font-semibold flex-1">
              <select name="language" id="language" className="w-full h-full">
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </div>
            <div className="px-2 py-1 outline-0 bg-gray-200 text-sm font-semibold flex-1">
              <select name="country" id="country" className="w-full h-full">
                <option value="us">United States</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="es">Spain</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full text-[12px] font-semibold mt-15">
        <div>
          <ul className="flex space-x-4 ">
            <li>Contact Us</li>
            <li>Press Resources</li>
            <li>Legal Info</li>
            <li>Corporate Information</li>
            <li>Privacy Policy</li>
            <li>Cookie Settings</li>
            <li>Imprint</li>
          </ul>
        </div>
        <div className="flex space-x-4 items-center mx-left">
          <p>Made in Berlin</p>
          <img src={logo} alt="ableton logo" className="w-12 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
