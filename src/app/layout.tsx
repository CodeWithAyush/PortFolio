"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Provider from "./theme/theme-provider";
import Switcher from "./theme/theme-switcher";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <div className="">
          <Provider>
            <div className="sticky top-0 bg-white dark:bg-black z-50">
              <Header />
            </div>
            <Intro />
            <div id="about" className="pt-8 -mt-8">
              <About />
            </div>
            <div id="skills"  className="pt-8 -mt-8">
              <Skills />
            </div>
            <div id="experience" className="pt-8 -mt-8">
              <Experience />
            </div>
            <div id="education" className="pt-8 -mt-8">
              <Education />
            </div>
            <div id="contact" className="pt-5 -mt-5">
              <Contact />
            </div>
            <Footer />
            {children}
            <div>
              {isVisible && (
                <button
                  onClick={scrollToTop}
                  className="fixed bottom-5 right-5 bg-black dark:bg-white hover:bg-slate-400 text-white dark:text-black font-bold p-3 text-3xl dont-bold rounded-full transition-all duration-300 ease-in-out"
                >
                  <IoIosArrowUp />
                </button>
              )}
            </div>
          </Provider>
        </div>
      </body>
    </html>
  );
}
