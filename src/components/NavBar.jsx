import { navItems } from "../constants";

const NavBar = () => {
  return (
    <div className="w-full flex-center fixed z-50 top-0 left-0 md:p-0 px-5">
      <div className="container md:my-10 my-5 flex items-center justify-between">
        <img
          src="/images/logo.png"
          alt="logo"
          className="md:size-12 size-10 object-cover object-center"
        />
        <div className="md:flex items-center gap-7 hidden">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <a className="gradient-title text-lg" href={item.href}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
