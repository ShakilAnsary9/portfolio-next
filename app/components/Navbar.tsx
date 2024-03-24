import ColorSwitcher from "@/app/components/ColorSwitcher";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center font-semibold text-2xl whitespace-nowrap text-slate-700 dark:text-slate-400">
            <span className="text-primary">WebP</span>to
            <span className="text-primary">JPG</span>
          </span>
        </a>
        <div className="items-center justify-between w-8 md:flex md:w-auto md:order-1 text-gray-50">
          <ColorSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
