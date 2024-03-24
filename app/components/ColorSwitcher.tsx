"use client";
import { useState, useEffect } from "react";
import sun from "@/public/svg/SolarSunBold.svg";
import moon from "@/public/svg/SolarMoonBold.svg";
import device from "@/public/svg/SolarSliderVerticalBoldDuotone.svg";
import Image from "next/image";

const ColorSwitcher = () => {
  const [theme, setTheme] = useState("system");
  return (
    <div className="relative">
      <div className="cursor-pointer">switch</div>
      <div className="switch-box absolute right-0 mt-10 w-40 rounded-lg bg-slate-900 flex flex-col p-3 text-slate-400">
        <button
          className={`flex px-2 py-1 mb-2 rounded-lg hover:bg-slate-800 ${
            theme === light
          }`}
        >
          <Image src={sun} alt="sun" height={20} width={20} />
          <span className="ps-2">Light</span>
        </button>
        <button
          className={`flex px-2 py-1 mb-2 rounded-lg hover:bg-slate-800 ${
            theme === dark
          }`}
        >
          <Image src={moon} alt="moon" height={20} width={20} />
          <span className="ps-2">Dark</span>
        </button>
        <button
          className={`flex px-2 py-1 rounded-lg hover:bg-slate-800 ${
            theme === system
          }`}
        >
          <Image src={device} alt="system" height={20} width={20} />
          <span className="ps-2">System</span>
        </button>
      </div>
    </div>
  );
};

export default ColorSwitcher;
