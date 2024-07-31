"use client";
import Lottie from "lottie-react";
import React from "react";
import EducationImage from "../asset/lottie/education.json";
import { LuGraduationCap } from "react-icons/lu";

type Props = {};

const expData = [
  {
    comp: "Hindustan College of Science and Technology",
    profile: "Bachelor of Technology",
    duration: "2018 - 2022",
  },
  {
    comp: "Shivalik Cambridge College",
    profile: "Higher Secondary",
    duration: "2017 - 2018",
  },
];

const Education = (props: Props) => {
  return (
    <div className="font-poppins md:px-20 px-5 sm:space-y-10 space-y-5 md:mt-20 mt-10">
      <div className="text-3xl sm:text-5xl font-bold flex lg:justify-start justify-center tracking-wide dark:text-white">
        Education
      </div>
      <div className="flex flex-row-reverse justify-between gap-10">
        <div className=" my-auto lg:block hidden max-w-lg w-full">
          <Lottie animationData={EducationImage} loop={true} />
        </div>
        <div className="max-w-4xl w-full sm:space-y-10 space-y-5 my-auto">
          {expData?.map((item, i) => {
            return (
              <div key={`expData-${i}`} className="border h-min rounded-3xl p-5 pb-10  bg-blue-100 hover:bg-blue-200 cursor-pointer">
                <div className="flex sm:flex-row flex-col gap-5">
                  <div className="bg-blue-500  rounded-full h-min p-3 w-min">
                    <LuGraduationCap color="white" className="text-5xl" />
                  </div>
                  <div className="tracking-wide font-bold">
                    <p className="sm:text-2xl text-xl font-bold">
                      {item?.profile}
                    </p>
                    <p className="sm:text-lg text-gray-500">{item?.comp}</p>
                    <p className="mt-3">{item?.duration}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
