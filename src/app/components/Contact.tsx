"use client";

import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { LuPaperclip } from "react-icons/lu";

type Props = {};

const Contact = (props: Props) => {
  const email = "ayushsengar6@gamil.com";
  const subject = "Hello from Ayush's Portfolio";
  const body = "Hi there, I would like to get in touch with you about...";
  const phone = "+91 75056 41416";
  const place = "Agra, India";
  const latitude = "27.205940"; // Replace with the latitude of your location
  const longitude = "77.975363";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const telLink = `tel:${phone}`;
  const geoLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef: any = React.createRef();

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className="font-poppins  md:px-20 px-5 w-full 1.5xl:mx-auto space-y-10 md:mt-20 mt-10">
        <div className="text-3xl sm:text-5xl font-bold  tracking-wide dark:text-white">
          Contact
        </div>
        <div className="flex lg:flex-row flex-col xl:gap-20 gap-10">
          <div className="lg:max-w-xl w-full">
            <form className="sm:space-y-10 space-y-5" action="">
              <div className="relative">
                <input
                  type="text"
                  id="floating_filled"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_filled"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="floating_filled"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_filled"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="floating_filled"
                  className="block rounded-t-lg h-40 px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_filled"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Message
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <button
                    className="flex items-center gap-2 text-blue-500"
                    type="button"
                    onClick={handleIconClick}
                  >
                    <LuPaperclip /> <p>Add attachment</p>
                  </button>
                </div>
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-600 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Send
                  </span>
                </a>
              </div>
            </form>
          </div>
          <div className="space-y-10 lg:max-w-md xl:max-w-full dark:text-white">
            <div className="space-y-5">
              <p className="text-3xl ">
                Get in <span className="text-green-600 tracking-wide">Touch</span>
              </p>
              <p className="xl:text-xl sm:text-lg tracking-wide">
                I&apos;d love to hear from you! Whether you have a project in mind,
                need a collaboration partner, or just want to say hello, feel
                free to reach out. You can contact me through the form left, or
                directly via email or phone. I aim to respond within 24 hours.
              </p>
            </div>
            <div>
              <div className="flex items-center sm:gap-10 gap-5 ">
                <a href={mailtoLink} className=" bg-black rounded-full p-3 hover:bg-blue-500 transition duration-300  hover:ease-in-out hover:scale-110 ">
                  <MdEmail className="text-2xl  text-white" />
                </a>
                <a href={mailtoLink} className="xl:text-xl sm:text-lg">
                  {email}
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center sm:gap-10 gap-5 ">
                <a href={telLink} className="bg-black rounded-full p-3 hover:bg-blue-500 transition duration-300  hover:ease-in-out hover:scale-110">
                  <FaPhoneAlt className="text-2xl  text-white" />
                </a>
                <a href={telLink} className="xl:text-xl sm:text-lg">
                  {phone}
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center sm:gap-10 gap-5 ">
                <a href={geoLink} className="bg-black rounded-full p-3 hover:bg-blue-500 transition duration-300  hover:ease-in-out hover:scale-110">
                  <HiLocationMarker className="text-2xl  text-white" />
                </a>
                <a href={geoLink} target="_blank" className="xl:text-xl sm:text-lg">
                  {place}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
