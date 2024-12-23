import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Logo } from "../Assets/images";
import { Link } from "react-router-dom";

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="w-full bg-[white] px-2 py-3">
        <div className="w-100 justify-between flex gap-3 max-w-[1366px] mx-auto">
          <Link to="/">
            <img
              className="w-[5rem]"
              src={Logo}
              alt="Danphe International Logo"
            />
          </Link>
          <div className="flex flex-col w-[100%] items-end justify-around">
            <div className="flex gap-3 text-primary font-bold w-[fit-content] flex-wrap items-end justify-end">
              <p className="w-fit">
                <a href="mailto: danphe202x2@gmail.com">danphe2022@gmail.com</a>
              </p>
              <p className="w-fit">
                <a href="tel: 9841661139">9841661139</a>
              </p>
            </div>
            {/* <hr className="w-full h-[1px] bg-secondary border-none my-2" /> */}
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
