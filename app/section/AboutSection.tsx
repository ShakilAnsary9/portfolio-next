const AboutSection = () => {
  return (
    <section className="overflow-hidden">
      <h1 className="text-slate-50">
        <div className="px-6 md:max-w-screen-md md:px-6 lg:max-w-screen-xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-bold">
              {" "}
              Things I do and <br className="lg:hidden"></br> brag about{" "}
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              {" "}
              I help businesses connect with audiences, delivering greater brand
              engagement <br className="hidden lg:block"></br> through
              innovative digital solutions.{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 lg:gap-10">
            <div className="md:col-span-1 border p-5 rounded-3xl transition-all duration-300 bg-gray-100 dark:border-white/10 dark:bg-white/5">
              <div className="rounded-xl inline-flex p-2 mb-4 bg-black/10 dark:bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="icon"
                  width="40px"
                  height="40px"
                  viewBox="0 0 21 21"
                  data-v-d60c7640=""
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 3.5h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2m1 12h4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl">Web App</h3>
              <p className="mt-2">
                Custom web applications built to fit your unique business needs.
              </p>
            </div>
            <div className="md:col-span-1 border p-5 rounded-3xl transition-all duration-300 bg-gray-100 dark:border-white/10 dark:bg-white/5">
              <div className="rounded-xl inline-flex p-2 mb-4 bg-black/10 dark:bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="icon"
                  width="40px"
                  height="40px"
                  viewBox="0 0 21 21"
                  data-v-d60c7640=""
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.5 3.5l-4 14m-2-5l-4-4l4-4m8 12l4-4l-4-4"
                  ></path>
                </svg>
              </div>
              <h3>Mobile App</h3>
              <p className="mt-2">
                Beautiful and functional mobile applications for iOS and Android
                platforms.
              </p>
            </div>
            <div className="md:col-span-1 border p-5 rounded-3xl transition-all duration-300 bg-gray-100 dark:border-white/10 dark:bg-white/5">
              <div className="rounded-xl inline-flex p-2 mb-4 bg-black/10 dark:bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="icon"
                  width="40px"
                  height="40px"
                  viewBox="0 0 21 21"
                  data-v-d60c7640=""
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.5 18.5h4M10.5 5a4.5 4.5 0 0 1 2.001 8.532l-.001.968a2 2 0 1 1-4 0v-.968A4.5 4.5 0 0 1 10.5 5"
                  ></path>
                </svg>
              </div>
              <h3>Consultancy</h3>
              <p className="mt-2">
                Expert advice and guidance to help your business succeed in the
                digital world.
              </p>
            </div>
          </div>
        </div>
      </h1>
    </section>
  );
};

export default AboutSection;
