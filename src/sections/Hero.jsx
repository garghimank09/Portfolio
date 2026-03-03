import GradientSpheres from "../components/GradientSpheres";
import HeroExperience from "../components/HeroExperience";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-dvh overflow-hidden relative text-white-50 md:p-0 px-5"
    >
      <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20"></div>
      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />

      <div className="w-full h-full flex-center">
        <div className="container relative w-full h-full">
          <div className="md:mt-40 mt-20">
            <p className="font md:text-2xl text-base">
              👋 Hey, I&apos;m Here
            </p>
            <h1 className="font-bold md:text-9xl text-5xl">HIMANK GARG</h1>
            <h1 className="font-bold md:text-9xl text-5xl">DATA & AI</h1>
          </div>
          <div className="absolute w-full z-30 bottom-20 left-0 right-0">
            <div className="flex justify-between items-end">
              <div className="flex-1" />
              <button
                type="button"
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col items-center md:gap-5 gap-1 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white-50 focus-visible:ring-offset-2 focus-visible:ring-offset-black-100"
                aria-label="Scroll to About section"
              >
                <p className="md:text-base text-xs">Explore</p>
                <img
                  src="/images/arrowdown.svg"
                  alt=""
                  className="size-7 animate-bounce pointer-events-none"
                />
              </button>
              <div className="flex-1 flex flex-col items-end">
                <img src="/images/shape.svg" alt="shape" />
                <h1 className="font-bold md:text-9xl text-5xl">ENGINEER</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 left-0">
        <HeroExperience />
      </div>
    </section>
  );
};

export default Hero;
