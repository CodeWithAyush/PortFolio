"use client";
import React from "react";
// import Typewriter from "typewriter-effect";
// import Typewriter from 'react-simple-typewriter';
// import { ReactTyped } from "react-typed";
// import FacebookIcon from "../images/facebook.svg";
import Lottie from "lottie-react";
import introLogo from "../asset/lottie/intro.json";
import { IdentificationIcon } from "@heroicons/react/16/solid";

type Props = {};

const icons = [
  {
    svgIcon: (
      <svg
        stroke="#6B7280"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={22}
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    name: "Facebook",
  },
  {
    svgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={20}
        height={22}
        fill="#6B7280"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    ),
    name: "Twitter",
  },
  {
    svgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width={20}
        height={22}
        fill="#6B7280"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
    name: "Instagram",
  },
  {
    svgIcon: (
      <svg
        fill="none"
        width={20}
        height={22}
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
          stroke="#6B7280"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
          stroke="#6B7280"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    name: "Github",
  },
  {
    svgIcon: (
      <svg
        stroke="#6B7280"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        width={20}
        height={22}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    name: "Linkedin",
  },
];

const Intro = (props: Props) => {
  return (
    <div className="bg-slate-100 font-poppins py-20">
      <div className="lg:flex justify-evenly items-center px-5 sm:px-0">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-5xl font-bold text-gray-700">
            <p className="">Hi, there!</p>
            <p className="">I am</p>
            <p className="text-7xl bg-gradient-to-r from-indigo-600  to-emerald-400 inline-block text-transparent bg-clip-text min-h-20">
              Ayush Sengar
            </p>
          </div>
          <div className="text-5xl font-extrabold font-mont tracking-wide">
            Web Developer
          </div>
          {/* <Typewriter
            options={{
              strings: ["Hello", "World"],
              autoStart: true,
              loop: true,
              }}
              /> */}
          <div className="max-w-md text-lg text-gray-500">
            Im a Front-end React Developer based In India, over 2 years of
            professional experience.
          </div>
          {/* <FacebookIcon /> */}
          {/* <img src={FacebookIcon} alt="" /> */}
          <div className="flex gap-4 mt-3">
            {icons?.map((item, id) => {
              return (
                <div
                  key={`social-${IdentificationIcon}`}
                  className="flex items-center gap-4"
                >
                  <a
                    className="hover:-translate-y-1 duration-300 ease-in-out"
                    href="#"
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
          <button className="border-black hover:bg-black hover:text-white text-black text-lg border-2 rounded-full py-2 px-7 font-bold mt-5 hover:-translate-y-1 duration-300 ease-in-out">
            Download CV
          </button>
        </div>
        <div className="flex lg:block justify-center">
          <div className="w-[30rem] ">
            <Lottie animationData={introLogo} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
