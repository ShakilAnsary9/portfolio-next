import { useState } from "react";
import ColorSwitcher from "./ColorSwitcher";

const Menu = () => {
  const [showMenuBox, setShowMenuBox] = useState(false);

  return (
    <div>
      <div className="hidden lg:block">
        <ul className="flex gap-4 pr-4">
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="relative flex gap-3 justify-end lg:hidden">
        <div onClick={() => setShowMenuBox(!showMenuBox)}>
          <i className="fi fi-sr-bars-staggered"></i>
        </div>
        <div>
          <ColorSwitcher />
        </div>
        {showMenuBox && (
          <div className="absolute bg-slate-200 dark:bg-slate-900 right-0 py-2 rounded-lg mt-16">
            <ul className="gap-2 flex flex-col">
              <li className="py-1 px-2 mx-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-800">
                <a href="">Blog</a>
              </li>
              <li className="py-1 px-2 mx-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-800">
                <a href="">Projects</a>
              </li>
              <li className="py-1 px-2 mx-2 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-800">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
