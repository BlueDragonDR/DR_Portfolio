"use client";
import React, { useState } from "react";
import Image from "next/image";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { Reveal } from "../framer-motion/Reveal";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section>
      <div className="lg:mx-28 xl:mx-96 min-h-screen flex flex-col items-center lg:items-start">
        <Reveal side="up">
          <div className="mt-10 lg:mt-20 flex flex-row lg:gap-x-10 items-center justify-center lg:justify-normal mb-10 lg:mb-14">
            <span className="text-4xl font-semibold text-[#f3f3f3] opacity-90">
              About Me
            </span>
            <div className="border-t hidden lg:flex w-80 border-[#353D47]" />
          </div>
        </Reveal>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:w-full lg:gap-x-20">
          <div className="my-auto mx-5 lg:mx-0 lg:w-2/3 mt-10 lg:mt-0">
            <div className="flex flex-col gap-y-4 text-lg opacity-70">
              <Reveal side="left">
                <span>
                  Hello, I am David Rin and I enjoy creating software. I have
                  been creating websites for over 10 years.
                </span>
              </Reveal>
              <Reveal side="left">
                <span>
                  I have over 10 years of experience in building websites, web apps, and software development, and over 5 years of experience in
                  blockchain technology.
                </span>
              </Reveal>
              <Reveal side="left">
                <span>
                  Passionate about launching, developing, and maintaining web & blockchain requiring a broad yet experienced skillset.
                  Intuitive problem-solving skills and proficiency in frontend & backend development, web3 integration, system and application
                  security, auditing, and project management.
                </span>
              </Reveal>
              
              <Reveal side="left">
                <span>
                  Here are a few technologies I&apos;ve been working with
                  recently:
                </span>
              </Reveal>
            </div>
            <Reveal side="left">
              <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-base mt-5">
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Solidity | Rust | FunC
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  TypeScript | JavaScript
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  NextJS | ReactJS
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Python | Django
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Node.js | Express.js
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Bootstrap | tailwind CSS | Material UI
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Web3.js | Ethers.js
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Wagmi | RainbowKit
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  React Native | Flutter
                </span>
                <span className="text-[#66FCF1] flex flex-row items-center gap-2">
                  <VscDebugBreakpointLogUnverified />
                  Firebase | MongoDB | MySQL 
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal side="right">
            <div
              className={`ml-5 mt-5 border-2 border-[#66FCF1] rounded h-fit w-fit lg:my-auto transition-all ${isHovered ? "translate-x-1 translate-y-1" : ""
                }`}
            >
              <Image
                src="/assets/pfp.png"
                alt="image"
                width={300}
                height={300}
                className={`-translate-x-4 -translate-y-4 rounded transition-all ${isHovered ? "hover:-translate-x-6 hover:-translate-y-6" : ""
                  }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
