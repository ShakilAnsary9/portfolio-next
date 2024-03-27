"use client";
import React, { useState, useEffect } from "react";

const ColorSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const [showSwitchBox, setShowSwitchBox] = useState(false); // State to control visibility of switch-box

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: "brightness",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "devices",
      text: "system",
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useEffect(() => {
    onWindowMatch();
    darkQuery.addEventListener("change", onWindowMatch);
    return () => darkQuery.removeEventListener("change", onWindowMatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to ensure this effect runs only once

  // Define a function to get the icon based on the selected theme
  const getSwitchIcon = () => {
    switch (theme) {
      case "light":
        return "brightness";
      case "dark":
        return "moon";
      default:
        return "devices";
    }
  };

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <div className="relative -mb-1">
      <div
        className="cursor-pointer switch flex justify-end"
        onClick={() => setShowSwitchBox(!showSwitchBox)} // Toggle visibility of switch-box
      >
        {/* Dynamically render the icon based on the selected theme */}
        <i
          className={`text-primary dark:text-dark fi fi-sr-${getSwitchIcon()}`}
        ></i>
      </div>
      {showSwitchBox && ( // Render switch-box only when showSwitchBox is true
        <div className="switch-box absolute right-0 mt-10 w-40 py-2 rounded-lg bg-slate-200 dark:bg-slate-900 flex flex-col text-slate-700 dark:text-slate-400">
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => {
                setTheme(opt.text);
                setShowSwitchBox(false); // Hide switch-box when an option is clicked
              }}
              className={`flex button-box items-center px-2 py-1 mx-3 my-1 rounded-lg hover:bg-slate-300  dark:hover:bg-slate-800 ${
                theme === opt.text && "text-teal-500"
              }`}
            >
              <i className={`flex items-center fi fi-sr-${opt.icon}`}></i>
              <span className="ps-2 capitalize">{opt.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorSwitcher;
