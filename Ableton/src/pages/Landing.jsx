import React from "react";
import Navbar from "../components/Navbar";
import wallpaper from "../assets/abletonWallpaper.png";
import disk1 from "../assets/abletonDisk1.jpeg";
import disk2 from "../assets/abletonDisk2.jpg";
import wall2 from "../assets/abletonWall2.jpg";
import disk3 from "../assets/abletonDisk3.jpg";
import disk4 from "../assets/abletonDisk4.jpg";
import logo2 from "../assets/abletonLogo2.jpg";
import people1 from "../assets/abletonPeople1.jpg";
import people2 from "../assets/abletonPeople2.jpg";
import people3 from "../assets/abletonPeople3.jpg";
import people4 from "../assets/abletonPeople4.jpg";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full px-30 mt-15 ">
        <div
          className=" bg-center bg-cover relative h-120 mb-20 w-full"
          style={{ backgroundImage: `url(${wallpaper})` }}
        >
          {/* <img className="w-full relative" src={wallpaper} alt="wallpaper" /> */}
          <h1 className="font-bold text-9xl text-orange flex justify-center items-center h-full max-sm:text-4xl max-md:text-6xl">
            Ableton
          </h1>
        </div>
      </div>
      <div className="mb-20 w-full flex flex-col justify-center items-center px-70">
        <p className="text-[26px] mb-4 font-semibold tracking-wide leading-10 ">
          We make <span className="text-blue">Live</span>,{" "}
          <span className="text-blue">Push</span>,{" "}
          <span className="text-blue">Note</span>,{" "}
          <span className="text-blue">Move</span> and{" "}
          <span className="text-blue">Link</span> — unique software and hardware
          for music creation and performance. With these products, our community
          of users creates amazing things.
        </p>
        <p className=" text-[19px] leading-8 ">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>
      <div className="relative mb-25 h-170 w-full  ">
        <div className="absolute bg-yellow w-[60%] h-full top-0 right-0"></div>
        <div className="absolute left-0 top-0 w-full h-full  ">
          <div className="flex w-full gap-25 justify-center items-center h-full py-25 px-25">
            <div className="flex-1 h-125">
              {" "}
              <img
                className=" w-full h-full object-cover "
                src={disk1}
                alt=""
              />
            </div>
            <div className="flex-1 max-w-100">
              <img className=" w-full h-70 object-cover " src={disk2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-25 flex justify-around ">
        <div className="w-150">
          <p className="text-[24px] leading-10 tracking-wide font-semibold">
            Making music isn't easy. It takes time, effort, and learning. But
            when you're in the flow, it's incredibly rewarding.
          </p>
          <p className="text-[17px] leading-8 ">
            We feel the same way about making Ableton products. The driving
            force behind Ableton is our passion for what we make, and the people
            we make it for.
          </p>
        </div>
      </div>
      <div className="flex justify-around mb-25 w-full">
        <div className="w-150">
          <img src={wall2} alt="ableton video" />
          <p className="pl-2">Why Ableton - Owen Olabode</p>
        </div>
      </div>
      <div className="w-full mb-25 flex justify-around">
        <div className="w-155 pl-2">
          <p className="text-[24px] font-semibold leading-10 tracking-wide">
            We are more than 350 people from 30 different countries divided
            between our headquarters in Berlin and our offices in Los Angeles
            and Tokyo.
          </p>
          <p className="text-[17px] leading-7 ">
            Most of us are active musicians, producers, and DJs, and many of us
            use Live and Push every day. We come from a wide range of cultural
            and professional backgrounds. Some of us have PhDs, some are
            self-taught, and most of us are somewhere in between. What connects
            us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music
            culture.
          </p>
        </div>
      </div>
      <div className="w-full mb-25 relative h-220">
        <div className="absolute bg-green w-[60%] h-full"></div>
        <div className="absolute w-full h-full ">
          <div className="flex gap-25 px-25  w-full items-center h-full">
            <div className="flex flex-col flex-1 max-w-100  h-full justify-center gap-20">
              <div className="w-full max-h-80 h-full">
                {" "}
                <img
                  className="object-cover w-full h-full"
                  src={people1}
                  alt=""
                />
              </div>
              <div className="w-full max-h-80 h-full">
                {" "}
                <img
                  className=" object-cover w-full h-full"
                  src={logo2}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-1 max-h-120 h-full">
              <img
                className="w-full object-cover h-full"
                src={people2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-25 flex justify-around">
        <div className="w-155 gap-20 ">
          <p className="font-semibold tracking-wide leading-10 text-[24px] mb-4">
            We believe it takes focus to create truly outstanding instruments.
            We only work on a few products and we strive to make them great.
          </p>
          <p className="text-[17px] leading-7">
            Rather than having a one-size-fits-all process, we try to give our
            people what they need to work their magic and grow. We've learned
            that achieving the best results comes from building teams that are
            richly diverse, and thus able to explore problems from a wider set
            of perspectives. We don't always agree with each other, but opinion
            and debate are valued and openly encouraged.
          </p>
        </div>
      </div>
      <div className="flex justify-around mb-25">
        <div>
          <img src={disk3} alt="" />
        </div>
      </div>
      <div className="flex justify-around items-center mb-25">
        <div className="w-155 flex flex-col gap-4">
          <p className="font-semibold tracking-wide leading-10 text-[26px]">
            We're passionate about what we do, but we're equally passionate
            about improving who we are.
          </p>
          <p className="text-[17px] leading-7">
            We work hard to foster an environment where people can grow both
            personally and professionally, and we strive to create a wealth of
            opportunities to learn from and with each other.
          </p>
          <p className="text-[17px] leading-7">
            Alongside an internal training program, employees are actively
            supported in acquiring new knowledge and skills, and coached on
            applying these in their daily work. In addition, staff-organized
            development and music salons are a chance to discuss new
            technologies, production techniques and best practices.
          </p>
        </div>
      </div>
      <div className="relative w-full mb-25 h-190">
        <div className="absolute bg-purple w-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full"></div>
        <div className="absolute flex  w-full h-full items-center gap-50 ">
          <div className=" w-400 h-80 ml-25">
            <img className="w-full h-full  " src={people4} alt="" />
          </div>
          <div className="w-470 h-140  ">
            <img className="w-full h-full  " src={people3} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full mb-25 flex justify-around">
        <div className="w-155 ">
          <p className="text-[26px] font-semibold leading-10 mb-5">
            We want our employees to love it here. Since we're looking for
            exceptional talent from around the world, we will do everything we
            can to make your transition as easy as possible.
          </p>
          <p className="text-[17px] leading-7 font-normal text-black">
            If you're joining us in Berlin, we'll help with relocation and
            paperwork. We'll even provide you with free German or English
            lessons. Plus, working in Germany means you can expect comprehensive
            health insurance for you and your family, as well as generous
            maternity and paternity leave. Office hours are flexible, but it's
            not all work; we have several company and team outings throughout
            the year as well as a variety of fun, informal small-group
            activities.
          </p>
        </div>
      </div>
      <div className="flex pb-25 justify-around w-full border-b-2 border-gray-300">
        <div className="flex w-270 ">
          <div className="flex-1/2 h-150">
            <img className="w-full h-full" src={disk4} alt="" />
          </div>
          <div className="flex flex-1/2 bg-lightblue h-125 justify-around items-center">
            <div className="w-73">
              <p className=" text-2xl font-semibold leading-10 mb-4">
                We're really proud of the work we've done so far. But there's so
                much more to come. If you'd like to be a part of it, please join
                us.
              </p>
              <p className="text-2xl text-blue leading-10 font-semibold">
                See latest jobs {">"}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
