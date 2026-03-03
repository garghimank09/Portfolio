import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { bentoSocialLinks } from "../constants";
import { Alien } from "../components/models/Alien";

const About = () => {
  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Me"
          number="01"
          text="Passionate Creator, Lifelong Learner"
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    Himank Garg
                  </h1>
                  <p className="md:text-2xl mt-2">
                    I&apos;m Himank Garg, a final-year B.Tech CSE (AI &amp; ML) student passionate about building intelligent and scalable software solutions. I specialize in AI/ML, Data Science, and Full-Stack Development, with hands-on experience in Python, React, Node.js, and SQL. I enjoy solving real-world business problems using data-driven and AI-powered systems like my Bid Intelligence platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#C8D751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
                  <Canvas>
                    <ambientLight />
                    <OrbitControls enableZoom={false} />
                    <Alien
                      scale={2}
                      position={[0, -5.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Data Engineer
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Scalable, reliable data pipelines built for analytics and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    AI &amp; ML Engineer
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Smart, scalable ML systems that turn data into impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BE YOURSELF!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BE DIFFERENT!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BUILD DIFFERENT!
                  </h1>
                </div>
              </div>
            </div>
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(item.name === "Download CV" && { download: "Himank_Garg_Resume.pdf" })}
                  className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer block"
                >
                  <div className="flex justify-between items-center h-full">
                    <div className="flex items-center md:gap-5">
                      <img src={item.icon} alt={item.name} />
                      <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                        {item.name}
                      </h1>
                    </div>
                    <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                      <img
                        src="/images/arrowupright.svg"
                        alt="arrow-up"
                        className="md:scale-100 scale-50"
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
