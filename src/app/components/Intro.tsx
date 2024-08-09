"use client";
import React from "react";
// import Typewriter from "typewriter-effect";
// import Typewriter from 'react-simple-typewriter';
// import { ReactTyped } from "react-typed";
// import FacebookIcon from "../images/facebook.svg";
import Lottie from "lottie-react";
import introLogo from "../asset/lottie/intro.json";
import { IdentificationIcon } from "@heroicons/react/16/solid";
import { FiFacebook, FiLinkedin, FiGithub,FiYoutube  } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

type Props = {};

const icons = [
  {
    svgIcon: (
      <AiOutlineYoutube  className="sm:text-4xl text-3xl p-1 text-[#6B7280] hover:text-[#FF0000] dark:hover:text-[#6B7280] " />
    ),
    name: "Youtube",
    link: "https://www.youtube.com/@ayushsengar3016",
  },
  {
    svgIcon: (
      <FaXTwitter className="sm:text-3xl text-2xl p-1 text-[#6B7280] hover:text-black dark:hover:text-[#6B7280]" />
    ),
    name: "Twitter",
    link: "https://x.com/Ayushsengar10",
  },
  {
    svgIcon: (
      <FaInstagram className="sm:text-3xl text-2xl p-1 text-[#6B7280] hover:text-[#d62976] dark:hover:text-[#6B7280]" />
    ),
    name: "Instagram",
    link: "https://www.instagram.com/iayushsengar/",
  },
  {
    svgIcon: (
      <FiGithub className="sm:text-3xl text-2xl p-1 text-[#6B7280] hover:text-[#2b3137] dark:hover:text-[#6B7280]" />
    ),
    name: "Github",
    link: "https://github.com/CodeWithAyush",
  },
  {
    svgIcon: (
      <FiLinkedin className="sm:text-3xl text-2xl p-1 text-[#6B7280] hover:text-[#0072b1] dark:hover:text-[#6B7280]" />
    ),
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ayush-sengar-a63856166/",
  },
];

const Intro = (props: Props) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 font-poppins sm:py-20 py-10 md:px-20 px-5 w-full 1.5xl:mx-auto">
      <div className="lg:flex justify-between items-center ">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-3xl sm:text-5xl font-bold text-gray-700 tracking-wide">
            <p className="dark:text-white">Hi, there!</p>
            <p className="dark:text-white">I am</p>
            <p className="text-5xl sm:text-7xl bg-gradient-to-r from-indigo-600  to-emerald-400 inline-block text-transparent bg-clip-text min-h-20 tracking-wide">
              Ayush Sengar
            </p>
          </div>
          {/* <div className="text-5xl font-extrabold font-mont tracking-wide">
            Web Developer
          </div> */}
          {/* <Typewriter
            options={{
              strings: ["Hello", "World"],
              autoStart: true,
              loop: true,
              }}
              /> */}
          <div className="lg:max-w-md max-w-lg sm:text-lg text-gray-500 dark:text-white tracking-wide">
            Im a Web Developer based In India, over 2.5+ years of professional
            experience. I code and create web elements for amazing people around
            the world. I like work with new people.
          </div>
          {/* <FacebookIcon /> */}
          {/* <img src={FacebookIcon} alt="" /> */}
          <div className="flex gap-3 sm:mt-3 mt-1">
            {icons?.map((item, id) => {
              return (
                <div
                  key={`social-${IdentificationIcon}`}
                  className="flex items-center gap-3 justify-evenly"
                >
                  <a
                    className="hover:-translate-y-1 duration-300 ease-in-out"
                    href={item?.link}
                    target="_blank"
                  >
                    {item?.svgIcon}{" "}
                  </a>
                  {id < icons?.length - 1 && (
                    <div className="border-r border-slate-300 h-2"></div>
                  )}
                </div>
              );
            })}
          </div>
          <button className="border-black  hover:bg-black active:opacity-30 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black text-black text-lg border-2 rounded-full py-2 px-7 font-bold mt-5 hover:-translate-y-1 duration-300 ease-in-out">
            <a href="/resume.pdf" download="resume.pdf">
              Download CV
            </a>
          </button>
        </div>
        <div className="hidden lg:block justify-center  ">
          <div className="w-[30rem] ">
            <Lottie animationData={introLogo} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
