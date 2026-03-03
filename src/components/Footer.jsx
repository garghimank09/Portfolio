import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <div className="w-full bg-black-300 py-10 md:py-12">
      <div className="container mx-auto md:px-0 px-5 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-0">
        <div className="md:ml-8">
          <h2 className="gradient-title font-semibold md:text-3xl text-2xl">
            Himank Garg
          </h2>
          <p className="text-white-50/80 md:text-lg text-sm mt-1">
            Ai &amp; Ml Engineer || Data Engineer
          </p>
        </div>
        <div className="flex items-center md:gap-12 gap-8 md:mr-12">
          {footerIconsList.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              {...(icon.name === "Download CV" && { download: "Himank_Garg_Resume.pdf" })}
              className="cursor-pointer hover:-translate-y-2 transition-all duration-300"
              aria-label={icon.name}
            >
              <img
                src={icon.icon}
                alt=""
                className="md:size-10 size-8"
              />
            </a>
          ))}
        </div>
      </div>
      <p className="font-regular md:text-base text-sm text-center text-white-50/60 mt-8">
        2026 © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
