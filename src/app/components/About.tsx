"use client";
import Lottie from "lottie-react";
import { useState } from "react";
import NestIcon from "../asset/Nest.png";
import BootstrapIcon from "../asset/bootstrap.png";
import CIcon from "../asset/c.png";
import ContentfulIcon from "../asset/contentful.png";
import GatsbyIcon from "../asset/gatsby.png";
import GaIcon from "../asset/googleanalytics.png";
import I18NextIcon from "../asset/i18.png";
import JavaIcon from "../asset/java.png";
import JSIcon from "../asset/javascript.png";
import AboutImage from "../asset/lottie/example.json";
import MongoDBIcon from "../asset/mongodb.png";
import NodeIcon from "../asset/nodejs.png";
import ReactIcon from "../asset/react.png";
import TailwindIcon from "../asset/tailwind.png";
import TSIcon from "../asset/typescript.png";
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

const About = (props: Props) => {
  const [open, setOpen] = useState(false);
  // console.log(open, "LL");

  return (
    <div className=" font-poppins  md:px-20 px-5 w-full 1.5xl:mx-auto space-y-10 lg:mt-20">
      <div className="lg:flex flex-row-reverse justify-between gap-5">
        <div className="lg:my-auto  max-w-full">
          <Lottie animationData={AboutImage} loop={true} />
        </div>
        <div className=" border-blue-600  w-full space-y-3 my-auto max-w-5xl">
          <div className="text-3xl sm:text-5xl font-mont font-extrabold sm:mb-10 tracking-wide dark:text-white">
            About Me
          </div>
          <div className="sm:text-xl dark:text-white">
            Hi, I&#39;m <span className="font-bold">Ayush Sengar</span>
          </div>
          <div className="sm:text-lg text-gray-500 dark:text-gray-300 tracking-wide">
            <p>
              I&#39;m web developer with 2.5+ years of experience who thrives on
              solving problems and optimizing performance.
            </p>
            <br />
            <p>
              {" "}
              I&#39;ve been passionate about building high-quality websites and
              applications. I&#39;ve honed my skills in both front-end and
              back-end development, ensuring that every project I work on is
              both visually appealing and highly functional. I&#39;m always
              eager to learn new technologies and improve my skills. I believe
              that a good website should be fast, responsive, and user-friendly,
              and I strive to achieve that in every project I undertake.
            </p>
            <br />
            <p>
              When I&apos;m not coding, you can find me biking, I love hiking,
              playing video games, and exploring new cuisines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
