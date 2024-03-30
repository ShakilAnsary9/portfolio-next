/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import youtube from "@/public/images/youtube.gif";
import AppButton from "../components/AppButton";

const HeroSection = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="px-6 md:max-w-screen-md md:px-6 lg:max-w-screen-xl mx-auto py-24 h-screen md:flex items-center">
        <div className="mx-auto w-full md:w-7/12 z-20 flex flex-col gap-y-4 items-center md:items-start">
          <h1 className="text-4xl lg:text-5xl text-center md:text-left font-bold tracking-tight lg:w-11/12 dark:text-slate-50">
            Architecting the next generation of web applications
          </h1>
          <p className="leading-relaxed mt-6 w-11/12 lg:w-8/12 text-center md:text-left text-md md:text-lg text-slate-600 dark:text-slate-300">
            I'm Shakil, a full stack software engineer with a passion for
            building functional web applications tailored to your specific
            requirements.
          </p>
          <div className="flex my-3 md:my-6 gap-2 md:gap-4 flex-wrap justify-center">
            <AppButton
              link=""
              className="text-white bg-current hover:bg-teal-600"
              title="Got an Idea? Let's Talk"
              icon="comment-alt-dots"
            />
            <AppButton
              link=""
              className="text-slate-800 bg-black/30 hover:bg-black/40 dark:bg-gray-800 dark:hover:bg-gray-700"
              title="See My Work"
              icon="flame"
            />
          </div>
        </div>
        <div className="w-full md:w-5/12 feature-image-box mt-5 relative">
          <div className="globe opacity-30 lg:opacity-50">
            <div className="globe-item globe-item__primary rounded-full absolute z-10 w-[100px] h-[100px] md:w-[200px] lg:w-[400px] md:h-[200px] lg:h-[400px] lg:opacity-50 bg-gradient-to-tr from-blue-400 to-blue-600"></div>
            <div className="globe-item globe-item__warning rounded-full absolute z-10 w-24 h-24 md:w-48 md:h-48 lg:w-96 lg:h-96 lg:opacity-50 bg-gradient-to-tr from-yellow-500 to-yellow-300"></div>
            <div className="globe-item globe-item__success rounded-full absolute z-10 w-24 h-24 md:w-48 md:h-48 lg:w-96 lg:h-96 lg:opacity-50 bg-gradient-to-tr from-green-500 to-green-300"></div>
            <div className="globe-item globe-item__danger rounded-full absolute z-10 w-24 h-24 md:w-[150px] md:h-[150px] lg:w-[300px] lg:h-[300px] lg:opacity-50 bg-gradient-to-tr from-red-300 to-red-500"></div>
          </div>
          <div className="w-full min:h-[300px] relative rounded-2xl border-8 border-white border-opacity-30 dark:border-opacity-70 dark:border-black/30 bg-white dark:bg-gray-900 backdrop-blur bg-opacity-20 dark:bg-opacity-20 shadow-2xl dark:shadow-2xl group hover:cursor-pointer mb-12 overflow-hidden">
            <div className="w-full ">
              <div className="relative">
                <Image src={youtube} alt="youtube" className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-40 group-hover:bg-opacity-80 duration-300 backdrop-blur-[0px] group-hover:backdrop-blur-[5px] z-10">
                  <i className="fi fi-brands-youtube text-5xl opacity-0 group-hover:opacity-100 text-slate-50 transition-all duration-300 translate-y-5 group-hover:translate-y-0"></i>
                  <a
                    href="https://www.youtube.com/@blogbracket?sub_confirmation=1"
                    className="text-white -translate-y-5 scale-0 group-hover:scale-100 group-hover:-translate-y-0 transition-all duration-300 text-sm"
                  >
                    It's free 🔥
                  </a>
                </div>
              </div>
              <div className="p-4 w-full bg-white dark:bg-black/50 text-center flex justify-center bg-opacity-60 z-20 dark:text-slate-100">
                Explore Youtube Videos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
