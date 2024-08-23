"use client";

import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { LuPaperclip } from "react-icons/lu";
import emailjs from "@emailjs/browser";

type Props = {};

const Contact = (props: Props) => {
  const form: any = useRef();
  const email = "ayushsengar6@gamil.com";
  const subject = "Hello from Ayush's Portfolio";
  const body = "Hi there, I would like to get in touch with you about...";
  const phone = "+91 75056 41416";
  const place = "Agra, India";
  const latitude = "27.205940"; // Replace with the latitude of your location
  const longitude = "77.975363";
  const serviceID: any = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
  const templateID: any = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
  const publicKey: any = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const telLink = `tel:${phone}`;
  const geoLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef: any = React.createRef();
  const [loader, setLoader] = useState(false);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: selectedFile,
  });
  // console.log(selectedFile,"LL");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    // Implement email sending logic here
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    if (selectedFile) {
      formDataToSend.append("my_file", selectedFile);
    }

    emailjs
      .sendForm(serviceID, templateID, e.target, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoader(false);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    console.log("Form Data:", formData, form, e.target);
  };

  return (
    <div>
      <div className="font-poppins  md:px-20 px-5 w-full 1.5xl:mx-auto space-y-10 md:mt-20 mt-10">
        <div className="text-3xl sm:text-5xl font-bold  tracking-wide dark:text-white">
          Contact
        </div>
        <div className="flex lg:flex-row flex-col xl:gap-20 gap-10">
          <div className="lg:max-w-xl w-full">
            <form
              ref={form}
              className="sm:space-y-10 space-y-5"
              onSubmit={handleSubmit}
            >
              <div className="relative">
                <input
                  type="text"
                  id="floating_filled"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  value={formData?.name}
                  name="name"
                  onChange={handleChange}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  name="message"
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
                    name="my_file"
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
                <button
                  disabled={loader}
                  className={`relative  inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-600 transition-all duration-150 ease-in-out rounded  bg-gray-50 group ${
                    loader
                      ? "cursor-not-allowed opacity-50"
                      : "hover:pl-10 hover:pr-6"
                  }`}
                >
                  <span
                    className={`absolute bottom-0 left-0 w-full h-1  ${
                      loader
                        ? "bg-blue-600 h-full"
                        : "transition-all duration-150 ease-in-out bg-blue-600 group-hover:h-full"
                    }`}
                  ></span>
                  {loader ? (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-5 h-5 me-3 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                  ) : (
                    <>
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
                    </>
                  )}

                  <p
                    className={`relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white`}
                  >
                    Send
                  </p>
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-10 lg:max-w-md xl:max-w-full dark:text-white">
            <div className="space-y-5">
              <p className="text-3xl font-bold">
                Get in{" "}
                <span className="text-green-600 tracking-wide">Touch</span>
              </p>
              <p className="xl:text-xl sm:text-lg tracking-wide">
                I&apos;d love to hear from you! Whether you have a project in
                mind, need a collaboration partner, or just want to say hello,
                feel free to reach out. You can contact me through the form
                left, or directly via email or phone. I aim to respond within 24
                hours.
              </p>
            </div>
            <div>
              <div className="flex items-center sm:gap-10 gap-5 ">
                <a
                  href={mailtoLink}
                  className=" bg-black rounded-full p-3 hover:bg-blue-500 transition duration-300  hover:ease-in-out hover:scale-110 "
                >
                  <MdEmail className="text-2xl  text-white" />
                </a>
                <a href={mailtoLink} className="xl:text-xl sm:text-lg">
                  {email}
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center sm:gap-10 gap-5 ">
                <a
                  href={telLink}
                  className="bg-black rounded-full p-3 hover:bg-blue-500 transition duration-300  hover:ease-in-out hover:scale-110"
                >
                  <FaPhoneAlt className="text-2xl  text-white" />
                </a>
                <a href={telLink} className="xl:text-xl sm:text-lg">
                  {phone}
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center sm:gap-10 gap-5 ">
                <a
                  href={geoLink}
                  className="bg-black rounded-full p-3 hover:bg-blue-500 transition duration-300  hover:ease-in-out hover:scale-110"
                >
                  <HiLocationMarker className="text-2xl  text-white" />
                </a>
                <a
                  href={geoLink}
                  target="_blank"
                  className="xl:text-xl sm:text-lg"
                >
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
