import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { Reveal } from "../framer-motion/Reveal";

interface job {
  key: number;
  title: string;
  company_name: string;
  duration: string;
  description: string[];
}

const jobs: job[] = [
  {
    key: 1,
    title: "Senior Full Stack Developer",
    company_name: "ARIMAX Distribution AG, Full-time",
    duration: "Jan 2023 to Ocb 2024",
    description: [
      "Demonstrated proficiency in utilizing Python, REST APIs, MS SQL Server, and Power BI to develop a comprehensive data management system.",
      "Demonstrated proficiency in utilizing blockchain technologies, front-end development frameworks to create a user-friendly and functional dashboard.",
      "Skills: react.js, typescript, material-ui,node.js/express.js, mongoDB, ether.js, hardhat, token & staking smart contracts, google cloud",
    ],
  },
  {
    key: 1,
    title: "Frontend and Blockchain Engineer",
    company_name: "HOFA Gallery, Part-time",
    duration: "Mar 2022 to Jun 2022, Nov 2024 to Feb 2025",
    description: [
      "Worked as frontend and web3 developer and upgraded v1 to v2 in 2024.",
      "Produced high-quality figma design and mobile app using React Native. Also, implement the NFT market place smart contract on EVM",
      "Skills: React Native, creative and responsible design, figma, Firebase, Solidity",
    ],
  },
  {
    key: 1,
    title: "Blockchain Developer",
    company_name: "Safu Network, Part-time",
    duration: "Nov 2021 to Dec 2022",
    description: [
      "Worked as blockchain developer of Safu Network Team",
      "Built dex platform of Safu Network called SAFUNET DEX by forking pancake swap.",
      "Skills: react.js, web3.js/ether.js, hardhat, smart contracts, forking pancake/biswap/uniswap",
    ],
  },
  {
    key: 1,
    title: "Smart Contract Developer",
    company_name: "Kip Protocol, Full time",
    duration: "Jan 2022 to Nov 2022",
    description: [
      "Collaborated with cross-functional teams to develop and deploy smart contracts on the Ethereum & Solana networks using Solidity and Rust.",
      "Pioneered the implementation of advanced smart contract features, such as atomic swaps, flash loans, liquid staking and batch transactions, increasing the efficiency and scalability of decentralized finance DeFi protocols.",
      "Designed and deployed 10 high-performance, secure smart contracts on the Ethereum and Solana blockchains, powering decentralized applications (dApps) with over $10 million in total value locked",
      "Integrated secure wallet functionality, supporting Meta Mask, Phantom, and Solana Wallet, into 8 decentralized applications (dApps), enabling seamless user onboarding",
    ],
  },
 
  {
    key: 1,
    title: "Fullstack Web3 Developer",
    company_name: "FIXER, Full-time",
    duration: "Jan 2019 to Nov 2021",
    description: [
      "Built and deployed 4 Smart Contracts using Solidity to automatically manage uploaded base64-based data sets in the platform.",
      "Developed 5 professional REST APIs for the dashboard and admin portal.",
      "Reduced costs by 40% using an Ethereum smart contract to automate supply chain management processes.",
      "Assisted in developing the backend that became the foundation for the intersection between Web3 and FinTech.",
      "Closely collaborated with the product and dev teams to improve the efficiency of the platform by 25%.",
    ],
  },
  {
    key: 2,
    title: "Frontend & Full-Stack Developer",
    company_name: "METICULOSITY Company, Full-time",
    duration: "June 2016 to Dec 2018",
    description: [
      "Worked as a frontend developer for 3 years, full-stack developer for 2 years.",
      "Identified web-based user interactions and developed responsive userinterface components via php and Javascript frameworks concepts. Assisted in developing the front-end of web2 projects such as marketing,",
      "Skills: html, css/scss, bootstrap/tailwind, php, codeigniter(CI), laravel, modal-view-controller(mvc),angular/react.js, node.js, express.js, mysql, postgresql, magento, github, figma, aws, nginx, linux, jira",
    ],
  }, 
];

export default function Experience() {
  return (
    <section>
      <div className="min-h-screen mx-5 lg:mx-0 flex ">
        <div className="flex flex-col w-full items-center mt-28">
          <Reveal side="up">
            <span className="text-4xl font-semibold opacity-90 text-[#f3f3f3] mb-10 lg:mb-20">
              Experience
            </span>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-start ">
            {jobs.map((info) => (
              <ProjectCard
                company_name={info.company_name}
                description={info.description}
                duration={info.duration}
                key={info.key}
                title={info.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ProjectCard: React.FC<job> = ({
  key,
  title,
  company_name,
  description,
  duration,
}) => {
  return (
    <Reveal side="up">
      <div className="hover:bg-[#66FCF1] rounded-md transition-all mt-10 flex">
        <div className="bg-[#0B0C10] min-h-[50vh] justify-center shadow-md w-[80vw] lg:w-[25vw] flex flex-col gap-2 p-5 rounded-md shadow-[#232427] transition-all hover:-translate-x-2 hover:-translate-y-2">
          <div className="flex flex-col font-mono font-medium">
            <span className="text-lg">{title}</span>
            <span className="text-lg text-[#66FCF1]">
              &nbsp;@{company_name}
            </span>
          </div>
          <span className="opacity-80 font-mono mb-5">{duration}</span>
          <ul className="list-none flex flex-col gap-y-2 opacity-80 text-[#f3f3f3]">
            {description.map((descrip) => (
              <li key={descrip} className="pl-2">
                <VscDebugBreakpointLogUnverified className="inline-block mr-2 text-[#66FCF1]" />
                {descrip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
};
