"use client";
import { useTheme } from "next-themes";
import {} from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

type Props = {};

const Switcher = ({}: Props) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div>System</div>;
  // if (resolvedTheme === "dark") {
  //   return (
  //     <div
  //       onClick={() => {
  //         console.log("light");
  //         setTheme("light");
  //       }}
  //     >
  //       Dark
  //     </div>
  //   );
  // }
  // if (resolvedTheme === "light") {
  //   return (
  //     <div
  //       onClick={() => {
  //         console.log("light");
  //         setTheme("dark");
  //       }}
  //     >
  //       light
  //     </div>
  //   );
  // }
  else
    return (
      <Switch
        checked={resolvedTheme === "dark" ? true : false}
        onChange={() =>
          resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="group relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out"
      >
        <span className="sr-only">Use setting</span>
        <span className="pointer-events-none relative inline-block h-5 w-5 mt-[2px] mx-[2px] mr-1 group-data-[checked]:right-1 transform rounded-full bg-indigo-700  shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8">
          <span
            aria-hidden="true"
            className="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out"
          >
            {/* <svg
              fill="none"
              viewBox="0 0 12 12"
              className="h-3 w-3 text-gray-400"
            >
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 h-4 w-4 text-white "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-white h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </span>
        </span>
      </Switch>
    );
};

export default Switcher;
