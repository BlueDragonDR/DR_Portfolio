"use client";
import React, { useState } from "react";
import Image from "next/image";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { Reveal } from "../framer-motion/Reveal";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const technologies = [
    { name: "Frontend", level: "w-[95%]" },
    { name: "Backend", level: "w-[75%]" },
    { name: "Blockchain", level: "w-[80%]" },
    { name: "Database", level: "w-[70%]" },
    { name: "Services", level: "w-[65%]" },
    { name: "PM Tools", level: "w-[60%]" },
    { name: "Mobile", level: "w-[70%]" },
    { name: "Others", level: "w-[85%]" },
    { name: "Studying", level: "w-[90%]" },
  ];

  const skills = [
    {
      title: "Frontend",
      items:
        "HTML/HTML5, CSS/SCSS, Javascript/Typescript, Pixel Perfect/Responsive Design, Bootstrap/Tailwind/Material UI/Styled Components, React.js/Angular.js/Vue.js/Next.js/Vite.js ...",
    },
    {
      title: "Backend",
      items:
        "Node.js/Express.js, PHP/Laravel, C#/ASP.NET Core, Python/Django, Postman ...",
    },
    {
      title: "Blockchain",
      items:
        "Web3.js/Ether.js, Smart Contract(Solidity/Rust), Wagmi, Hardhat/Truffle/Remix, Dapps, Cex, NFT Marketplace, P2E, Alchemy, crypto wallets, networks as evm, solana ...",
    },
    {
      title: "Database",
      items: "MySQL, MongoDB, SQLite, Amazon DynamoDB, S3, Firebase, Supabase ...",
    },
    {
      title: "Mobile",
      items: "React Native, Java, Flutter, Kotlin ...",
    },
    {
      title: "PM Tools",
      items: "Github, Gitlab, Trello, Monday, Bitbucket, Jira ...",
    },
    {
      title: "Services",
      items: "Netlify/Vercel, Docker, AWS, Amplify, Heroku ...",
    },
    {
      title: "Others",
      items: "Figma, Adobe XD, Webflow, Linux, nginx, Hostinger ...",
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-12 xl:px-20 min-h-screen flex flex-col justify-center items-center gap-4">
        {/* Top Section */}
        <div className="flex flex-col items-center lg:items-start">
          <Reveal side="up">
            <div className="mt-10 lg:mt-20 flex flex-row lg:gap-x-10 items-center justify-center lg:justify-normal mb-10 lg:mb-14">
              <span className="text-4xl font-semibold text-[#f3f3f3] opacity-90">About Me</span>
              <div className="border-t hidden lg:flex w-80 border-[#353D47]" />
            </div>
          </Reveal>

          <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:w-full lg:gap-x-20">
            {/* Left Text Block */}
            <div className="my-auto mx-5 lg:mx-0 lg:w-2/3 mt-10 lg:mt-0">
              <div className="flex flex-col gap-y-4 text-lg opacity-70">
                <Reveal side="left">
                  <span>Hello, I am David Rin and I enjoy creating software. I have been creating websites for over 10 years.</span>
                </Reveal>
                <Reveal side="left">
                  <span>I have over 10 years of experience in building websites, web apps, and software development, and over 5 years of experience in blockchain technology.</span>
                </Reveal>
                <Reveal side="left">
                  <span>Passionate about launching, developing, and maintaining web & blockchain requiring a broad yet experienced skillset. Intuitive problem-solving skills and proficiency in frontend & backend development, web3 integration, system and application security, auditing, and project management.</span>
                </Reveal>
                <Reveal side="left">
                  <span>Here are a few technologies I&apos;ve been working with recently:</span>
                </Reveal>
              </div>

              {/* Tech list */}
              <Reveal side="left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm sm:text-base mt-5">
                  {[
                    "Solidity | Rust | FunC",
                    "TypeScript | JavaScript",
                    "NextJS | ReactJS",
                    "Python | Django",
                    "Node.js | Express.js",
                    "Bootstrap | Tailwind CSS | Material UI",
                    "Web3.js | Ethers.js",
                    "Wagmi | RainbowKit",
                    "React Native | Flutter",
                    "Firebase | MongoDB | MySQL",
                  ].map((item, idx) => (
                    <span key={idx} className="text-[#66FCF1] flex items-center gap-2">
                      <VscDebugBreakpointLogUnverified />
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Image Block */}
            <Reveal side="right">
              <div
                className={`ml-5 mt-5 border-2 border-[#66FCF1] rounded w-fit h-fit transition-all ${isHovered ? "translate-x-1 translate-y-1" : ""}`}
              >
                <div className="w-[200px] sm:w-[250px] lg:w-[300px]">
                  <Image
                    src="/assets/pfp.png"
                    alt="image"
                    width={500}
                    height={500}
                    className={`w-full h-auto object-cover rounded -translate-x-4 -translate-y-4 transition-all ${isHovered ? "hover:-translate-x-6 hover:-translate-y-6" : ""}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Skillset Section */}
        <div className="flex flex-wrap gap-6 justify-between bg-[#1c1c1c] text-white p-6 rounded-lg w-full">
          {/* Technologies Column */}
          <div className="w-full md:w-[48%]">
            <h2 className="text-xl font-bold mb-4">TECHNOLOGIES</h2>
            <div className="space-y-3">
              {technologies.map((tech) => (
                <div key={tech.name}>
                  <div className="text-sm mb-1">{tech.name}</div>
                  <div className="bg-gray-700 rounded-full h-2 w-full">
                    <div className={`bg-white h-2 rounded-full ${tech.level}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div className="w-full md:w-[48%]">
            <h2 className="text-xl font-bold mb-4">SKILLS</h2>
            <ul className="space-y-2 text-sm">
              {skills.map((skill) => (
                <li key={skill.title}>
                  <span className="font-semibold">{`● ${skill.title} : `}</span>
                  {skill.items}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
