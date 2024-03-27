import React from "react";

interface AppButtonProps {
  title: string;
  className: string;
  link: string;
  icon: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  className,
  link,
  icon,
}) => {
  return (
    <a
      href={link}
      className={`text-slate-800 dark:text-slate-100 py-2 text-sm px-4 rounded-lg flex gap-2 items-center cursor-pointer ${className}`}
    >
      <span>{title}</span>{" "}
      <i className={`fi fi-rr-${icon} -mb-1 text-base`}></i>
    </a>
  );
};

export default AppButton;
