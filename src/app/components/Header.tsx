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
import Switcher from "../theme/theme-switcher";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
    href: "#about",
    current: false,
    icon: <UserIcon className="w-4" />,
  },
  {
    name: "Skills",
    href: "#skills",
    current: false,
    icon: <PresentationChartLineIcon className="w-4" />,
  },
  {
    name: "Experience",
    href: "#experience",
    current: false,
    icon: <NewspaperIcon className="w-4" />,
  },
  {
    name: "Education",
    href: "#education",
    current: false,
    icon: <ChatBubbleLeftRightIcon className="w-4" />,
  },
  // {
  //   name: "Contact",
  //   href: "#",
  //   current: false,
  //   icon: <IdentificationIcon className="w-4" />,
  // },
  {
    name: "Contact",
    href: "#contact",
    current: false,
    icon: <PhoneIcon className="w-4" />,
  },
];
const Header = () => {
  return (
    <div className="">
      <Disclosure as="nav" className="dark:border-b border-gray-200 ">
        <div className="flex justify-between bg-transparent p-5 items-center">
          {/* <img className="w-52" src={Logo?.src} /> */}
          <span className="sm:text-3xl text-xl font-extrabold tracking-widest font-varela dark:text-white">
            &lt;AYUSH/&gt;
          </span>
          <div className="lg:flex hidden gap-1 scroll-smooth">
            {navigation?.map((item, id) => {
              return (
                <a
                  href={item?.href}
                  key={id}
                  className="font-poppins dark:text-white py-2 px-3 hover:bg-slate-100 dark:hover:text-black rounded flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out text scroll-smooth"
                >
                  {item?.icon}
                  {item?.name}
                </a>
              );
            })}
          </div>
          <div className="lg:block hidden">

          <Switcher />
          </div>
          <div className="-mr-2 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <Switcher />
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-500 ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
        <DisclosurePanel className="lg:hidden">
          {navigation?.map((item, id) => {
            return (
              <a
                href={item?.href}
                key={id}
                className="font-poppins dark:text-white py-2 px-3 hover:bg-slate-100 dark:hover:text-black rounded flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out text scroll-smooth"
              >
                {item?.icon}
                {item?.name}
              </a>
            );
          })}
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default Header;
