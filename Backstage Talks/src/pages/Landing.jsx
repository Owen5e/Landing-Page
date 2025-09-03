import React from "react";
import logo from "../assets/backstagetalks_logo.png";
import vanilla from "../assets/backstagetalks_vanilla.png";
import pinky from "../assets/backstagetalks_pink.png";
import grassy from "../assets/backstagetalks_green.png";
import orangy from "../assets/backstagetalks_orange.png";
import yellowy from "../assets/backstagetalks_yellow.png";
import white from "../assets/backstagetalks_white.png";
import blue from "../assets/backstagetalks_blue.png";
import reddy from "../assets/backstagetalks_red.png";
import { useState, useEffect, useMemo } from "react";

const Landing = () => {
  // Memoize colors array
  const colors = useMemo(
    () => [
      { backgroundColor: "var(--color-vanilla)" },
      { backgroundColor: "var(--color-pinky)" },
      { backgroundColor: "white" },
      { backgroundColor: "var(--color-grass)" },
      { backgroundColor: "var(--color-orangy)" },
      { backgroundColor: "var(--color-yellowy)" },
      { backgroundColor: "var(--color-bluey)" },
      { backgroundColor: "var(--color-reddy)" },
    ],
    []
  );

  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const handleScroll = () => {
      // Select all sections
      const sections = document.querySelectorAll("section");

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        // Check if the section is near the middle of the viewport
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setBgColor(colors[index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [colors]);

  const issues = [
    {
      img: vanilla,
      alt: "Vanilla",
      issue: "Issue #8",
      Buy: (
        <>
          <span className="hover:underline">BUY HERE</span>
          <p>
            Or in{" "}
            <span className="text-white hover:underline">selected stores</span>
          </p>
        </>
      ),
    },
    {
      img: pinky,
      alt: "Pinky",
      issue: "Issue #7",
      Buy: (
        <>
          <p
            style={
              bgColor.backgroundColor === "white"
                ? { color: "var(--color-pinky)" }
                : { color: "white" }
            }
            className="hover:underline"
          >
            BUY HERE <span className="text-black">(EUROPE)</span>
          </p>
          <p
            style={
              bgColor.backgroundColor === "white"
                ? { color: "var(--color-pinky)" }
                : { color: "white" }
            }
            className="hover:underline"
          >
            BUY HERE <span className="text-black">(UK & Overseas)</span>
          </p>
          <p>
            Or in{" "}
            <span
              style={
                bgColor.backgroundColor === "white"
                  ? { color: "var(--color-pinky)" }
                  : { color: "white" }
              }
              className="hover:underline"
            >
              selected stores
            </span>
          </p>
        </>
      ),
    },
    {
      img: white,
      alt: "White",
      issue: "Issue #6",
      Buy: (
        <>
          <span
            style={
              bgColor.backgroundColor === "white"
                ? { color: "var(--color-pinky)" }
                : { color: "white" }
            }
            className="hover:underline"
          >
            BUY HERE
          </span>
          <p>
            Or in{" "}
            <span
              style={
                bgColor.backgroundColor === "white"
                  ? { color: "var(--color-pinky)" }
                  : { color: "white" }
              }
              className="hover:underline"
            >
              selected stores
            </span>
          </p>
        </>
      ),
    },
    {
      img: grassy,
      alt: "Grassy",
      issue: "Issue #5",
      Buy: (
        <>
          <span className="hover:underline text-white">BUY HERE</span>
          <p>
            Or in{" "}
            <span className="text-white hover:underline">selected stores</span>
          </p>
        </>
      ),
    },
    {
      img: orangy,
      alt: "Orangy",
      issue: "Issue #4 is sold out.",
      Buy: (
        <>
          <p>
            If you're lucky, you may get the last pieces in{" "}
            <span className="text-white hover:underline">selected stores</span>.
          </p>
        </>
      ),
    },
    {
      img: yellowy,
      alt: "Yellowy",
      issue: "Issue #3 is sold out.",
      Buy: (
        <>
          <p>
            If you're lucky, you may get the last pieces in{" "}
            <span className="text-white hover:underline">selected stores</span>.
          </p>
        </>
      ),
    },
    {
      img: blue,
      alt: "Blue",
      issue: "Issue #2",
      Buy: (
        <>
          <span className="hover:underline text-white">BUY HERE</span>
          <p>
            Or in{" "}
            <span className="text-white hover:underline ">selected stores</span>
            .
          </p>
        </>
      ),
    },
    {
      img: reddy,
      alt: "Reddy",
      issue: "Issue #1 is sold out.",
      Buy: (
        <>
          <p>
            If you're lucky, you may get the last pieces in{" "}
            <span className="text-white hover:underline">selected stores</span>.
          </p>
        </>
      ),
    },
  ];

  return (
    <div
      style={bgColor}
      className="min-h-screen w-full transition-colors duration-500"
    >
      <header className="w-full">
        <img src={logo} alt="Backstage Talks Logo" className="" />
      </header>
      {issues.map((item, i) => (
        <section key={i} className="w-full">
          <main className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center leading-5">
              <img src={item.img} alt={item.alt} className="w-110 h-150" />
              <p className="font-semibold">{item.issue}</p>
              <p className="text-center font-semibold">{item.Buy}</p>
            </div>
          </main>
        </section>
      ))}

      {/* footer */}
      <div className="w-full px-4 mt-6">
        <div className="w-80 mb-4">
          <p className="font-semibold text-lg ">
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world—to have a chance to make the right ones, we need to talk.
          </p>
          <p className="font-light text-sm">
            © 2025{" "}
            <span className="underline hover:no-underline hover:cursor-pointer">
              Published by Büro Milk
            </span>
          </p>
        </div>
        <footer className="w-full flex justify-between text-lg font-semibold pb-4">
          <p className="underline hover:no-underline hover:cursor-pointer">
            privacy policy
          </p>
          <p className="hover:underline">info@Owensbackstage.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
