// "use client"
import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Logo from "../asset/Logo.png";

type Props = {
  children: any;
};
const navigation = [
  {
    name: "Home",
    href: "#",
    current: true,
    icon: <HomeIcon className="w-4" />,
  },
  {
    name: "About",
    href: "#",
    current: false,
    icon: <UserIcon className="w-4" />,
  },
  {
    name: "Service",
    href: "#",
    current: false,
    icon: <PresentationChartLineIcon className="w-4" />,
  },
  {
    name: "Portfolio",
    href: "#",
    current: false,
    icon: <NewspaperIcon className="w-4" />,
  },
  {
    name: "Testimonial",
    href: "#",
    current: false,
    icon: <ChatBubbleLeftRightIcon className="w-4" />,
  },
  {
    name: "Blog",
    href: "#",
    current: false,
    icon: <IdentificationIcon className="w-4" />,
  },
  {
    name: "Contact",
    href: "#",
    current: false,
    icon: <PhoneIcon className="w-4" />,
  },
];
const Header = () => {
  return (
    <div>
      <div className="flex justify-between bg-transparent p-5">
        {/* <img className="w-52" src={Logo?.src} /> */}
        <span className="text-3xl font-extrabold tracking-widest font-varela dark:text-white">&lt;AYUSH/&gt;</span>
        <div className="flex gap-1">
          {navigation?.map((item, id) => {
            return (
              <div
                key={id}
                className="font-poppins dark:text-white py-2 px-3 hover:bg-slate-100 dark:hover:text-black rounded flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out text"
              >
                {item?.icon}
                {item?.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
