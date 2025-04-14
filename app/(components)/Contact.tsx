import React from "react";
import Link from "next/link";
import { Reveal } from "../framer-motion/Reveal";
import { MdOutlineEmail } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
export default function Contact() {
  return (
    <section className="min-h-screen flex mx-5 lg:mx-0 justify-center items-center">
      <Reveal side="up">
        <div className="mt-20 flex justify-center w-full">
          <div className="flex flex-col gap-10 lg:gap-0 items-center justify-center">
            <span className="text-[#66FCF1] text-2xl lg:text-3xl font-semibold opacity-80 lg:mb-8">
              Liked My Work?
            </span>
            <span className="text-5xl font-semibold opacity-90 text-[#f3f3f3] lg:mb-10 text-center">
              Reach Out to Me!
            </span>
            <span className="lg:text-xl text-lg lg:w-[80vh] text-center font-medium border-b-2 pb-6 opacity-75">
              I am always looking for new opportunities to work with
              professionals and companies. I would also like to contirbute to
              opensource projects providing real world value.
            </span>
            <div className=" w-fit flex flex-col justify-center items-center gap-6 rounded transition-all my-10">
              <a href="mailto:dave.t.dev715@gmail.com" className="flex flex-row gap-1 justify-center items-center text-lg text-white hover:text-[#66FCF1]">
                <MdOutlineEmail className="text-2xl" />
                <div className="z-10 ">
                  dave.t.dev715@gmail.com
                </div>
              </a>

              <div className="w-full flex flex-row justify-around items-center">
                <a href="https://t.me/dave_r_dev715" >
                  <div className="w-fit bg-inherit hover:bg-[#66FCF1] text-2xl text-white border-2 hover:font-bold border-[#66FCF1] p-4 rounded-full">
                    <PiTelegramLogoLight />
                  </div>
                </a>
                <a href="https://twitter.com/RbluedragonR" >
                  <div className="w-fit bg-inherit hover:bg-[#66FCF1] text-2xl text-white border-2 hover:font-bold border-[#66FCF1] p-4 rounded-full">
                  <FiTwitter />
                    
                  </div>
                </a>
              </div>


            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
