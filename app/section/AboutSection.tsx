"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import foxdark from "@/public/svg/foxflue-dark.svg";
import foxlight from "@/public/svg/foxflue-light.svg";
import netdark from "@/public/svg/netsqure-dark.svg";
import netlight from "@/public/svg/netsqure-light.svg";
import ledark from "@/public/svg/netlead-dark.svg";
import lelight from "@/public/svg/netlead-light.svg";

const AboutSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // Function to check if <html> element has dark className
    const checkDarkMode = () => {
      const element = document.documentElement;
      if (element.classList.contains("dark")) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="px-6 md:max-w-screen-md md:px-6 lg:max-w-screen-xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold dark:text-slate-50">
            {" "}
            Things I do and <br className="lg:hidden"></br> brag about{" "}
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {" "}
            I help businesses connect with audiences, delivering greater brand
            engagement <br className="hidden lg:block"></br> through innovative
            digital solutions.{" "}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 lg:gap-10">
          <div className="md:col-span-1 border p-5 rounded-3xl transition-all duration-300 bg-gray-100 dark:border-white/10 dark:bg-white/5">
            <div className="rounded-xl flex justify-center items-center h-16 w-16 mb-4 bg-black/10 dark:bg-white/10">
              <i className="fi fi-rr-browser-ui text-4xl flex justify-center items-center dark:text-slate-300"></i>
            </div>
            <h3 className="text-2xl font-bold dark:text-slate-300">
              Website Development
            </h3>
            <p className="mt-2 dark:text-slate-500 text-sm">
              Creating functional websites with HTML, CSS, JavaScript and
              NextJS.
            </p>
          </div>
          <div className="md:col-span-1 border p-5 rounded-3xl transition-all duration-300 bg-gray-100 dark:border-white/10 dark:bg-white/5">
            <div className="rounded-xl h-16 w-16 p-2 flex justify-center items-center mb-4 bg-black/10 dark:bg-white/10">
              <i className="fi fi-brands-wordpress text-4xl flex justify-center items-center dark:text-slate-300"></i>
            </div>
            <h3 className="text-2xl font-bold dark:text-slate-300">
              Wordpress
            </h3>
            <p className="mt-2 dark:text-slate-500 text-sm">
              Customizing dynamic websites with user-friendly WordPress
              platform.
            </p>
          </div>
          <div className="md:col-span-1 border p-5 rounded-3xl transition-all duration-300 bg-gray-100 dark:border-white/10 dark:bg-white/5">
            <div className="rounded-xl flex justify-center items-center h-16 w-16 p-2 mb-4 bg-black/10 dark:bg-white/10">
              <i className="fi fi-rr-paint-brush text-3xl flex justify-center items-center dark:text-slate-300"></i>
            </div>
            <h3 className="text-2xl font-bold dark:text-slate-300">
              Logo Design
            </h3>
            <p className="mt-2 dark:text-slate-500 text-sm">
              Crafting memorable visual identities for brand recognition.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 my-5 lg:my-10 gap-5 lg:gap-10">
          <div className="md:col-span-2 py-5 px-10 border dark:border-white/10 rounded-3xl bg-gray-100 dark:bg-white/10 text-center relative overflow-hidden">
            <div className="z-10">
              <h3 className="text-2xl font-bold dark:text-slate-50">
                Trusted by Brands Globally
              </h3>
              <p className="mt-2 text-sm dark:text-slate-500">
                {" "}
                Here are some organizations, I had a pleasure to work with.{" "}
              </p>
              <div className="flex flex-wrap gap-y-3 pt-4 justify-between items-center">
                <div className="w-[40%] sm:w-[200px]">
                  {isDarkMode ? (
                    <Image src={foxdark} alt="foxdark" className="" />
                  ) : (
                    <Image src={foxlight} alt="foxlight" className="" />
                  )}
                </div>
                <div className="w-[40%] sm:w-[200px]">
                  {isDarkMode ? (
                    <Image
                      src={ledark}
                      alt="ledark"
                      className="-mt-2 sm:-mt-3"
                    />
                  ) : (
                    <Image
                      src={lelight}
                      alt="lelight"
                      className="-mt-2 sm:-mt-3"
                    />
                  )}
                </div>
                <div className="w-[40%] sm:w-[200px] ">
                  {isDarkMode ? (
                    <Image src={netdark} alt="netdark" className="-mt-1" />
                  ) : (
                    <Image src={netlight} alt="netlight" className="-mt-1" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 py-5 px-8 text-center rounded-3xl bg-gradient-to-r from-primary-500 from-teal-600 to-cyan-600 flex flex-col justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="icon"
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.03 4.95L3.49 8.49c-3.32 3.32-3.32 8.7 0 12.02s8.7 3.32 12.02 0l6.01-6.01a2.517 2.517 0 0 0-.39-3.86l.39-.39c.97-.97.97-2.56 0-3.54c-.16-.16-.35-.3-.54-.41a2.497 2.497 0 0 0-3.72-3.05a2.517 2.517 0 0 0-3.88-.42l-2.51 2.51a2.493 2.493 0 0 0-3.84-.39zm1.41 1.42c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-3.18 3.18a3 3 0 0 1 0 4.24l1.41 1.41a5.004 5.004 0 0 0 1.12-5.36l6.3-6.3c.2-.2.51-.2.71 0s.2.51 0 .71l-4.6 4.6l1.41 1.41l6.01-6.01c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-6.01 6.01l1.41 1.41l4.95-4.95c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-5.66 5.66l1.41 1.41l3.54-3.54c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-6 6.01c-2.54 2.54-6.65 2.54-9.19 0s-2.54-6.65 0-9.19l3.53-3.54zM23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7z"
              ></path>
            </svg>
            <h3 className="my-2 text-2xl font-bold">Say Hello</h3>
            <p className="text-sm">For project inquiries or just to say hi</p>
            <a
              href="/contact"
              className="mt-5 inline-flex bg-slate-100/20 px-4 py-2 rounded-lg items-center group !text-white"
            >
              <span className="text-white text-[14px]">Contact Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="icon ml-1 group-hover:translate-x-1 duration-300"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
