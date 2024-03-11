// "use client"
import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

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
      <div className="flex justify-between border p-5">
        <div>LOGO</div>
        <div className="flex gap-1">
          {navigation?.map((item, id) => {
            return (
              <div key={id} className="font-poppins py-2 px-3 hover:bg-slate-100 rounded flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out text-sm">
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
