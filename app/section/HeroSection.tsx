/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto py-24 h-screen flex items-center">
        <div className="mx-auto w-full md:w-7/12 z-20 flex flex-col gap-y-4 items-center md:items-start">
          <h1 className="text-4xl lg:text-5xl text-center md:text-left font-bold tracking-tight lg:w-11/12 dark:text-slate-50">
            Architecting the next generation of web applications
          </h1>
          <p className="leading-relaxed mt-6 w-11/12 lg:w-8/12 text-center md:text-left text-lg">
            I'm Shakil, a full stack software engineer with a passion for
            building functional web applications tailored to your specific
            requirements.
          </p>
        </div>
        <div className="w-full md:w-5/12 feature-image-box mt-5 relative">
          <div className="globe opacity-30 lg:opacity-50">
            <div className="globe-item globe-item__primary rounded-full absolute z-10 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400 to-blue-600"></div>
            <div className="globe-item globe-item__warning rounded-full absolute z-10 w-96 h-96 bg-gradient-to-tr from-yellow-500 to-yellow-300"></div>
            <div className="globe-item globe-item__success rounded-full absolute z-10 w-96 h-96 bg-gradient-to-tr from-green-500 to-green-300"></div>
            <div className="globe-item globe-item__danger rounded-full absolute z-10 w-[300px] h-[300px] bg-gradient-to-tr from-red-300 to-red-500"></div>
          </div>
          <div className="w-full min:h-[300px] relative rounded-2xl border-8 border-white border-opacity-30 dark:border-opacity-70 dark:border-black/30 bg-white dark:bg-gray-900 backdrop-blur bg-opacity-20 dark:bg-opacity-20 shadow-2xl dark:shadow-2xl group hover:cursor-pointer mb-12 overflow-hidden">
            <div className="h-[380px] w-full relative"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
