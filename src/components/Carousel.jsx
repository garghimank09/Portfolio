import { slides } from "../constants";

const ProjectCard = ({ slide, index }) => {
  const content = (
    <>
      <img
        src={slide.img}
        alt={slide.title}
        className="w-full h-full object-contain object-center bg-black-300"
      />
      <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300 bg-opacity-90 px-5">
        <div className="w-full h-full flex justify-between items-center">
          <div className="flex-center gap-2">
            <p className="md:text-2xl text-white-50 opacity-80">{index + 1}.</p>
            <p className="md:text-2xl text-white-50 opacity-80">{slide.title}</p>
          </div>
          <div className="flex-center gap-5">
            <p className="text-2xl hidden md:block text-white-50 opacity-80">
              Preview Project
            </p>
            <img
              src="/images/arrowupright.svg"
              alt="arrow"
              className="md:size-10 size-7"
            />
          </div>
        </div>
      </div>
    </>
  );

  const wrapperClass = "projects-marquee-item w-[60vw] lg:h-[60vh] md:h-[40vh] h-[60vh] flex-none relative block cursor-pointer hover:opacity-95 transition-opacity";

  if (slide.link) {
    return (
      <a
        href={slide.link}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
      >
        {content}
      </a>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
};

const Carousel = () => {
  return (
    <div className="relative">
      <div className="projects-marquee relative lg:h-[60vh] md:h-[40vh] h-[60vh]">
        <div className="carousel-gradient-left-box md:w-52 w-16 h-full absolute bottom-0 left-0 z-20 pointer-events-none"></div>
        <div className="carousel-gradient-right-box md:w-52 w-16 h-full absolute bottom-0 right-0 z-20 pointer-events-none"></div>
        <div className="projects-marquee-box flex items-center lg:h-[60vh] md:h-[40vh] h-[60vh] gap-[3vw]">
          {slides.map((slide, index) => (
            <ProjectCard key={`a-${index}`} slide={slide} index={index} />
          ))}
          {slides.map((slide, index) => (
            <ProjectCard key={`b-${index}`} slide={slide} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
