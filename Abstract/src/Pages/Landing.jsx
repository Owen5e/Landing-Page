import React from "react";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import design from "../assets/design.png";
import account from "../assets/icon-account.png";
import authenticate from "../assets/icon-authenticate.png";
import billing from "../assets/icon-billing.png";
import comment from "../assets/icon-comment.png";
import organization from "../assets/icon-organizations.png";
import logo from "../assets/abstract-svgrepo-com.svg";
import { MdOutlineHelpOutline } from "react-icons/md";

const Landing = () => {
  return (
    <div className="w-full h-screen font-['poppins'] relative">
      <Navbar />
      {/* container for search */}
      <div className="bg-bluegrey h-100 mx-auto w-full">
        <h1 className="text-7xl text-center pt-20 tracking-tighter">
          How can we help?
        </h1>
        <div className="flex items-center gap-4 border rounded-sm bg-white md:w-180 mx-auto mt-10 px-4 hover:border-blue hover:text-blue">
          <input
            type="input"
            name="search"
            id="search"
            placeholder="Search..."
            className="text-black outline-none placeholder:text-xl w-full py-4 "
          />
          <FaArrowRight className="w-6 h-6" />
        </div>
      </div>
      {/* container for main content */}
      <div className="p-35 w-full flex flex-col gap-20">
        <div className="flex justify-between w-full">
          <div className="flex gap-8 md:w-120">
            <img src={design} alt="Design" className="w-20 h-20" />
            <div className="flex flex-col gap-3 ">
              <h2 className="text-2xl font-semibold">Using Abstract</h2>
              <p className="text-[1.5rem] leading-8">
                Abstract lets you manage, version, and document your designs in
                one place.
              </p>
              <p className="text-blue text-xl">Learn More</p>
            </div>
          </div>
          <div className="flex gap-8 md:w-120">
            <img src={account} alt="Account" className="w-20 h-20" />
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Manage your account</h2>
              <p className="text-[1.5rem] leading-8">
                Configure your account settings, such as your email, profile
                details, and password.
              </p>
              <p className="text-blue text-xl">Learn More</p>
            </div>
          </div>
        </div>
        {/* code for organizations and billing */}
        <div className="flex justify-between w-full">
          <div className="flex gap-8 md:w-120">
            <img src={organization} alt="icon" className="w-20 h-20" />
            <div className="flex flex-col gap-3 ">
              <h2 className="text-2xl font-semibold">
                Manage organizations, teams, and projects
              </h2>
              <p className="text-[1.5rem] leading-8">
                Use Abstract organizations, teams, and projects to organize your
                people and your work.
              </p>
              <p className="text-blue text-xl">Learn More</p>
            </div>
          </div>
          <div className="flex gap-8 md:w-120">
            <img src={billing} alt="billing icon" className="w-20 h-20" />
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Manage billing</h2>
              <p className="text-[1.5rem] leading-8">
                Change subscriptions and payment details.
              </p>
              <p className="text-blue text-xl">Learn More</p>
            </div>
          </div>
        </div>
        {/* Code for authenticate and support */}
        <div className="flex justify-between w-full">
          <div className="flex gap-8 md:w-120">
            <img
              src={authenticate}
              alt="authenticate icon"
              className="w-20 h-20"
            />
            <div className="flex flex-col gap-3 ">
              <h2 className="text-2xl font-semibold">
                Authenticate to Abstract
              </h2>
              <p className="text-[1.5rem] leading-8">
                Set up and configure SSO, SCIM, and Just-in-Time provisioning.
              </p>
              <p className="text-blue text-xl">Learn More</p>
            </div>
          </div>
          <div className="flex gap-8 md:w-120">
            <img src={comment} alt="support icon" className="w-20 h-20" />
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Abstract support</h2>
              <p className="text-[1.5rem] leading-8">
                Get in touch with a human.
              </p>
              <p className="text-blue text-xl">Learn More</p>
            </div>
          </div>
        </div>
      </div>

      {/* footer code */}
      <div className="bg-black text-white py-14 px-20 w-full h-100">
        <footer className="w-full h-full flex">
          <div className="grid grid-cols-2 md:grid-cols-[110px_110px_130px_200px] gap-8">
            <div>
              <h2 className="text-xl font-bold pb-4">Abstract</h2>

              <ul className="hover:cursor-pointer hover:decoration-underline">
                <li>Start Trial</li>
                <li>Pricing</li>
                <li>Download</li>
                <li></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold pb-4">Resource</h2>

              <ul>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Release Notes</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold pb-4">Community</h2>

              <ul>
                <li>Twitter</li>
                <li>Linkedin</li>
                <li>Facebook</li>
                <li>Dribble</li>
                <li>Podcast</li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-xl font-bold pb-4">Company</h2>

                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Legal</li>
                </ul>
              </div>
              <div>
                <h2 className="text-md font-bold ">Contact Us</h2>

                <ul>
                  <li>info@owenabstract.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-end mt-8 ml-auto">
            <div className="flex flex-col gap-4 ">
              <img src={logo} alt="abstract logo" className="w-9 h-9" />
              <p className="text-xl ">
                © Copyright 2025 <br />
                Abstract Studio Design, Inc. <br />
                All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
      {/* code for sticky support button */}
      <div>
        <button className="fixed bottom-5 right-10 text-white bg-blue rounded-full z-10 flex items-center gap-1 py-2 px-4 hover:cursor-pointer hover:bg-darkblue hover:text-black">
          <MdOutlineHelpOutline className="w-5 h-5" />
          <span className="font-semibold">Help</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
