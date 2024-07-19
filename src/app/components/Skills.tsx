"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import IconItems from "./IconItems";
import Slider from "react-slick";
import JSIcon from "../asset/javascript.png";
import ReactIcon from "../asset/react.png";
import NodeIcon from "../asset/nodejs.png";
import NestIcon from "../asset/Nest.png";
import GatsbyIcon from "../asset/gatsby.png";
import TailwindIcon from "../asset/tailwind.png";
import MongoDBIcon from "../asset/mongodb.png";
import TSIcon from "../asset/typescript.png";
import I18NextIcon from "../asset/i18.png";
import CIcon from "../asset/c.png";
import BootstrapIcon from "../asset/bootstrap.png";
import ContentfulIcon from "../asset/contentful.png";
import JavaIcon from "../asset/java.png";
import GaIcon from "../asset/googleanalytics.png";
import ViteIcon from "../asset/vite.png";

type Props = {};

const skill = [
  { title: "React.JS", rate: "90%" },
  { title: "Next.JS", rate: "80%" },
  { title: "Gatsby.JS", rate: "85%" },
  { title: "Tailwind", rate: "95%" },
  { title: "Google Analytics", rate: "70%" },
  { title: "Mongo DB", rate: "60%" },
];

const iconItems = [
  { icon: JSIcon, label: "Javascript" },
  { icon: ReactIcon, label: "React" },
  { icon: NodeIcon, label: "Node" },
  { icon: NestIcon, label: "Nest" },
  { icon: GatsbyIcon, label: "Gastbsy" },
  { icon: TailwindIcon, label: "Tailwind" },
  { icon: MongoDBIcon, label: "Mongo" },
  { icon: I18NextIcon, label: "I18Next" },
  { icon: CIcon, label: "C" },
  { icon: TSIcon, label: "Typescript" },
  { icon: BootstrapIcon, label: "Bootstrap" },
  { icon: ContentfulIcon, label: "Contentful" },
  { icon: JavaIcon, label: "Java" },
  { icon: GaIcon, label: "Google Analytics" },
  { icon: ViteIcon, label: "Vite" },
];

const Skills = (props: Props) => {
  const [open, setOpen] = useState(false);
  console.log(open, "LL");

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1500, // Screen width up to 1024px
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1300, // Screen width up to 600px
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200, // Screen width up to 600px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 930, // Screen width up to 480px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // Screen width up to 480px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400, // Screen width up to 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" font-poppins md:px-20 px-5 w-full 1.5xl:mx-auto space-y-10 md:mt-20 mt-10">
      <div className="text-3xl sm:text-5xl font-bold flex justify-center tracking-wide dark:text-white">
        Skills
      </div>
      <div>
        <Slider {...settings}>
          {iconItems?.map((item, n) => {
            return <IconItems key={n} icon={item?.icon} label={item?.label} />;
          })}
        </Slider>
      </div>
      {/* <div className="1.5xl:px-0 px-5">
        <div className="text-5xl font-mont font-extrabold mb-16 tracking-wide">
          Skills Me
        </div>
        <div className="flex border justify-between ">
          <div className=" border-blue-600 w-1/2 space-y-3">
            <div className="text-xl">
              Hi, Im <span className="font-bold">Ayush Sengar</span>
            </div>
            <div className="text-lg text-gray-500">
              Im Full Stack Developer with over 2 years of experience. Im from
              India. I code and create web elements for amazing people around
              the world. I like work with new people.
            </div>
            <div className="text-xl font-bold pt-12">
              What is my skill level?
            </div>
            <div className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              odio illum minus! Maxime consequatur molestiae dolorum laudantium
            </div>
            <div className="grid-cols-2 grid gap-8 pt-12">
              {skill?.map((item, id) => {
                return (
                  <div key={id}>
                    <div className="mb-2 font-bold text-lg">{item.title}</div>
                    <div className="w-full  border border-[#34495e]  h-4 p-[2px]">
                      <div
                        className="bg-[#34495e] h-full  "
                        style={{ width: item?.rate }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border relative border-red-600 w-2/5">
            <img className="rounded-2xl" src="demo.jpg" alt="image" />
            <div className="absolute -left-16 -bottom-16 rounded-full w-60 h-60 flex flex-col justify-center items-center text-white bg-[#34495e] gap-2">
              <div className="text-4xl font-bold font-mont tracking-wide">
                2+ Years
              </div>
              <div className="text-xl">Of Experiance</div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="border-black hover:bg-black hover:text-white text-black text-lg border-2 rounded-md py-2 px-7 font-bold mt-12"
        >
          See More
        </button>
        <Modal show={open} setOpen={setOpen} />
      </div> */}
    </div>
  );
};

export default Skills;
