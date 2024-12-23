import React from "react";
import { Consultancy } from "../Assets/images";

const Background = () => {
  return (
    <>
      <div className="flex relative w-full h-[500px] p-5 overflow-hidden">
        <div className="flex w-full h-full absolute left-0 top-0 bg-black opacity-40 z-20"></div>
        <div className="flex w-full h-full items-center">
          <img
            className="absolute top-0 left-0 object-cover w-full h-full shadow-lg shadow-black blur-md z-10 "
            alt="Image of Consultancy"
            src={Consultancy}
          />
          <div className="flex w-full max-w-[1366px] mx-auto">
            <div className="flex flex-col sm-w-full md-w-[70%] max-w-[55rem] z-30 gap-5">
              <p
                className="justify-center flex text-primary text-5xl font-bold w-fit ml-0 tracking-wider"
                style={{
                  textShadow: "2px 2px 1px black",
                }}
              >
                Danphe International Consultancy
              </p>
              <p className="text-lg text-white font-semibold tracking-wide">
                Consultants offer advice and expertise to client organisations
                to help them improve their business performance.
              </p>
              <button className="bg-primary text-white font-bold w-fit px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-red-600 transition duration-300 group">
                <span>Apply Now</span>
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
