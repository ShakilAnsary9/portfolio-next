import React, { useState, useEffect } from "react";

const ColorSwitcher = () => {
  const [theme, setTheme] = useState("system");
  const [showSwitchBox, setShowSwitchBox] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []);

  useEffect(() => {
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const onWindowMatch = () => {
      if (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && darkQuery.matches)
      ) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    };

    if (!darkQuery) return;

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

    darkQuery.addEventListener("change", onWindowMatch);
    onWindowMatch();

    return () => {
      darkQuery.removeEventListener("change", onWindowMatch);
    };
  }, [theme]);

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("theme", selectedTheme);
    }
    setShowSwitchBox(false);
  };

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

  return (
    <div className="relative -mb-1">
      <div
        className="cursor-pointer switch flex justify-end"
        onClick={() => setShowSwitchBox(!showSwitchBox)}
      >
        <i
          className={`text-primary dark:text-dark fi fi-sr-${getSwitchIcon()}`}
        ></i>
      </div>
      {showSwitchBox && (
        <div className="switch-box absolute right-0 mt-10 w-40 py-2 rounded-lg bg-slate-200 dark:bg-slate-900 flex flex-col text-slate-700 dark:text-slate-400">
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => {
                handleThemeChange(opt.text);
              }}
              className={`flex button-box items-center px-2 py-1 mx-3 my-1 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-800 ${
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
