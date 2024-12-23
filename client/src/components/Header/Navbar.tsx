import React from "react";

const Navbar = () => {
  const menuItems = ["HOME", "ABOUT", "SERVICES", "BLOGS", "CONTACT"];
  return (
    <>
      <div className="md:flex justify-around text-black font-semibold text-lg w-full hidden">
        {menuItems.map((item) => (
          <span key={item} className="relative group">
            <a
              href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="group-hover:text-gray-600"
            >
              {item}
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        ))}
      </div>
    </>
  );
};

export default Navbar;
