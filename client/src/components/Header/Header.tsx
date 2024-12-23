import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Logo } from "../Assets/images";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full bg-white px-2 py-3">
      <div className="flex justify-between gap-3 max-w-[1366px] mx-auto">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-[5rem]"
            src={Logo}
            alt="Danphe International Logo"
          />
        </Link>

        {/* Contact Info and Navbar */}
        <div className="flex flex-col w-full items-end justify-between">
          {/* Contact Info */}
          <div className="flex gap-3 text-primary font-bold flex-wrap justify-end">
            <p>
              <a href="mailto:danphe202x2@gmail.com">danphe2022@gmail.com</a>
            </p>
            <p>
              <a href="tel:9841661139">9841661139</a>
            </p>
          </div>

          {/* Navbar */}
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
