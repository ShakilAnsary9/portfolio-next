"use client";
import { useEffect, useState } from "react";
import ColorSwitcher from "@/app/components/ColorSwitcher";
import Image from "next/image";
import logo from "@/public/svg/shakil-black.svg";
import logodark from "@/public/svg/shakil-white.svg";
import Menu from "./Menu";

const Navbar = () => {
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
    <nav
      className={`bg-white/10 dark:bg-black/10 backdrop-blur-md border-black/10 dark:border-white/10 w-full fixed top-0 z-50 bg-white border-b border-gray-200 ${
        isDarkMode ? "dark:border-gray-700" : ""
      }`}
    >
      <div className="px-6 md:max-w-screen-md md:px-6 lg:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span>
            {isDarkMode ? (
              <a href="/">
                <Image src={logodark} alt="Shakil" width={120} />
              </a>
            ) : (
              <a href="/">
                <Image src={logo} alt="Shakil" width={120} />
              </a>
            )}
          </span>
        </a>
        <div className="items-center justify-between w-8 md:flex md:w-auto md:order-1 text-gray-800 dark:text-gray-50">
          <div>
            <Menu />
          </div>
          <div className="hidden lg:block">
            <ColorSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
