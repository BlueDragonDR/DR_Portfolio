import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { Reveal } from "../framer-motion/Reveal";

interface project {
  key: number;
  image_path: string;
  type: string;
  title: string;
  description: string;
  tools: string[];
  github_link: string;
  link: string;
}

const projects: project[] = [
  {
    key: 1,
    image_path: "/assets/project1.png",
    type: "DeFi",
    title: "streeth",
    description:
      "I was responsible for designing the UI/UX for the frontend of the main website and marketplace's node, leveraging my creativity and imagination. Additionally, I successfully implemented marketplace's node frontend UI and seamlessly integrated the frontend with backend API endpoints and smart contracts.",
    tools: ["Solidity", "Next.JS", "TailwindCSS", "MongoDB", "ExpressJS"],
    github_link: "https://github.com/BlueDragonDR/",
    link: "https://www.streeth.app/",
  },
  {
    key: 2,
    image_path: "/assets/project2.png",
    type: "DeFi",
    title: "KIP",
    description:
      "Collaborated with cross-functional teams to develop and deploy smart contracts on the Ethereum & Solana networks using Solidity and Rust. Pioneered the implementation of advanced smart contract features, such as atomic swaps, flash loans, liquid staking and batch transactions, increasing the efficiency and scalability of decentralized finance (DeFi) protocols.",
    tools: ["Solidity", "Rust", "ReactJS", "TailwindCSS"],
    github_link: "https://github.com/BlueDragonDR/",
    link: "https://www.kip.pro/",
  },
  {
    key: 3,
    image_path: "/assets/project3.jpg",
    type: "Web3",
    title: "Mineralex",
    description:
      "I have upgraded figma and frontend ui of mineralex using react.js + material-ui + styled-components based on figma design, also fixed issues of dex integration and wallet connection for presale and staking on Solana. Reviewed application requirements and interface designs to ensure compatibility with existing projects.",
    tools: ["ReactJS", "TailwindCSS", "Rust", "ExpressJS", "RainbowKit"],
    github_link: "https://github.com/BlueDragonDR/Minerelax_Tom",
    link: "https://mineralexfrontend.vercel.app/",
  },
  {
    key: 4,
    image_path: "/assets/project4.png",
    type: "Defi",
    title: "MikeToken",
    description:
      "I developed this website for presale and staking as a web3 developer. I developed the frontend and integrated it with smart contracts for liquidity, swaps, pools and farms by collabrating with smart contract developers. Smart contracts had been deployed on the BNB network.",
    tools: [
      "ReactJS",
      "Solidity",
      "Wagmi",
      "Tailwind CSS",
    ],
    github_link: "https://github.com/BlueDragonDR/MikeSwap_Solidity",
    link: "https://miketoken.io/",
  },
  {
    key: 5,
    image_path: "/assets/project5.png",
    type: "Mobile App",
    title: "HOFA Gallery",
    description:
      "I developed React Native and NFT market place projects for mobile app to list their artists and have them delivered to the end customer. I deployed multi wallet connect functionality MetaMask, Phantom, CrossMint etc. Also, I developed TV app for google casting and implement the chat bot using gemini AI api.",
    tools: ["React Native", "Solidity", "Firebase", "CrossMint"],
    github_link: "https://github.com/BlueDragonDR/Hofa_ReactNative",
    link: "https://drive.google.com/drive/folders/15y9eS-_JiC6_VzSDoDVb6hrUsjCSigf1",
  },

  {
    key: 6,
    image_path: "/assets/project6.png",
    type: "website",
    title: "SEQUENCE",
    description:
      "I was a full-stack developer for this project. I had to convert this MEVN Stack website to MERN Stack website. I also was responsible for fixing some issues of styles and layouts. I got the new knowledge and experience to become a senior full-stack engineer.",
    tools: ["MongoDB", "Express", "TypeScript", "ReactJS", "TailwindCSS"],
    github_link: "https://github.com/BlueDragonDR/",
    link: "https://sequenceqcs.com",
  },
  {
    key: 7,
    image_path: "/assets/project7.png",
    type: "web App",
    title: "FIVEJARS",
    description:
      "Have experienced in codeigniter, mvc model, Magento and etc. Built database using MySQL and solved the issues with searching algorithm and database",
    tools: ["MySQL", "TypeScript", "ReactJS", "TailwindCSS"],
    github_link: "https://github.com/BlueDragonDR/",
    link: "https://fivejars.com/",
  },

];

export default function Projects() {
  return (
    <section className="min-h-screen">
      <div className="lg:flex hidden justify-center items-center">
        <div className="flex flex-col ">
          <div className="mt-28 flex flex-row items-center gap-x-10 lg:-ml-60">
            <span className="text-4xl font-semibold opacity-90 text-[#f3f3f3] ">
              Things I&apos;ve Built
            </span>
            <div className="border-t w-80 lg:flex overflow-hidden border-[#353D47]" />
          </div>
          <div className="flex flex-col-reverse ">
            {projects.map((data) => (
              <div key={data.key}>
                <Reveal side={`${data.key % 2 === 0 ? "right" : "left"}`}>
                  <div className="relative mt-14 flex flex-col justify-center items-center w-full mb-5">
                    <Link href={data.link} target="_blank">


                      <Image
                        src={data.image_path}
                        alt="project"
                        width={600}
                        height={600}
                        className={`w-[600px] ${data.key % 2 === 0 ? "ml-60" : ""
                          }`}
                      >
                      </Image>
                    </Link>
                    <div
                      className={`absolute z-10 flex flex-col text-right ${data.key % 2 === 0 ? "mr-[45vw]" : "ml-[55vw]"
                        }`}
                    >
                      <div className={`flex flex-col `}>
                        <span
                          className={`font-mono text-[#66FCF1] text-sm ${data.key % 2 === 0 ? "text-left" : ""
                            }`}
                        >
                          {data.type}
                        </span>
                        <span
                          className={`text-[#f3f3f3] font-semibold text-2xl mt-2 ${data.key % 2 === 0 ? "text-left" : ""
                            }`}
                        >
                          {data.title}
                        </span>
                      </div>
                      <div
                        className={` mt-8 text-left rounded p-8 bg-[#15171f] w-[30vw] shadow-md shadow-[#15171f] hover:shadow-lg hover:shadow-[#15171f] transition-all ${data.key % 2 === 0 ? "" : "ml-10"
                          }`}
                      >
                        <span className="text-[#f3f3f3] opacity-80">
                          {data.description}
                        </span>
                      </div>
                      <div
                        className={`flex flex-col ${data.key % 2 === 0 ? "items-start" : ""
                          }`}
                      >
                        <div
                          className={`mt-5 text-sm flex flex-wrap font-mono gap-x-2 w-[25vw] ${data.key % 2 === 0
                            ? "mr-auto"
                            : "ml-auto justify-end"
                            }`}
                        >
                          {data.tools.map((tool) => (
                            <span key={tool} className="whitespace-nowrap">
                              <span className="text-[#66FCF1]">|</span>
                              {tool}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-row justify-end text-2xl mt-4 gap-x-5">
                          <Link href={data.github_link} target="_blank">
                            <FiGithub className="hover:scale-110 hover:text-[#66FCF1] transition-all" />
                          </Link>
                          <Link href={data.link} target="_blank">
                            <FiExternalLink className="hover:scale-110 hover:text-[#66FCF1] transition-all" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex lg:hidden mx-5">
        <div className="mt-28 flex w-full items-center flex-col">
          <span className="text-4xl font-semibold opacity-90 text-[#f3f3f3] mb-10">
            Things I&apos;ve Built
          </span>
          <div className="flex flex-col gap-10">
            {projects.map((info) => (
              <div key={info.key} className="">
                <Reveal side={`${info.key % 2 === 0 ? "right" : "left"}`}>
                  <div className="shadow-md shadow-[#232427] flex flex-col p-5 gap-y-5">
                    <span className="font-mono text-[#66FCF1] text-sm">
                      {info.type}
                    </span>
                    <span className="text-xl font-semibold opacity-80">
                      {info.title}
                    </span>
                    <span className="text-[#f3f3f3] opacity-80">
                      {info.description}
                    </span>
                    <div className="mt-5 text-sm text-left flex flex-row flex-wrap font-mono gap-2">
                      {info.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                    <div className="flex flex-row text-2xl mt-4 mb-5 gap-x-5">
                      <Link href={info.github_link} target="_blank">
                        <FiGithub className="hover:scale-110 hover:text-[#66FCF1] transition-all" />
                      </Link>
                      <Link href={info.link} target="_blank">
                        <FiExternalLink className="hover:scale-110 hover:text-[#66FCF1] transition-all" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hover:bg-[#66FCF1] w-fit rounded transition-all mx-auto mt-10">
        <Reveal side="up">
          <Link href="https:github.com/BlueDragonDR" target="_blank">
            <button className="bg-[#0B0C10] border z-10 border-[#66FCF1] text-[#66FCF1] w-fit p-5 rounded hover:-translate-x-1 hover:-translate-y-1 transition-all">
              Check Out My Other Work
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
