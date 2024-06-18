// "use client";
import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
type Props = {
  show: boolean;
  setOpen?: any;
};

const personalDetails = [
  { key: "First Name:", value: "Ayush" },
  { key: "Last Name:", value: "Sengar" },
  { key: "Age:", value: "23 Years" },
  { key: "Nationality", value: "India" },
  { key: "Company:", value: "Cloud Analogy" },
  { key: "Address:", value: "India" },
  { key: "Phone:", value: "+917505641416" },
  { key: "Email:", value: "ayushsengar@forcebolt.com" },
  { key: "Languages:", value: "Hindi, English" },
];

const achivements = [
  { num: "06+", desc: "years of Experience" },
  { num: "97+", desc: "Completed Projects" },
  { num: "81+", desc: "Happy Customers" },
  { num: "53+", desc: "Most awards Winner" },
];

const experience = [
  { year: "2018 - Present", title: "Web Developer", place: "Envato" },
  { year: "2018 - Present", title: "Web Developer", place: "Envato" },
  { year: "2018 - Present", title: "Web Developer", place: "Envato" },
];

const education = [
  { year: "2018", title: "ENGINEERING DEGREE", place: "IIT FARAH" },
  { year: "2018", title: "Web Developer", place: "Envato" },
  { year: "2018", title: "Web Developer", place: "Envato" },
];

const Modal = (props: Props) => {
  return (
    <div>
      {/* <Transition.Root show={false} as={Fragment}>
        <Dialog as="div" onClose={props?.setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div>
                      <div>Personal Info</div>
                    </div>
                    <div>dyfugjv</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root> */}
    </div>
  );
};

export default Modal;
