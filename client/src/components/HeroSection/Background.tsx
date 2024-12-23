import React from "react";
import { Consultancy } from "../Assets/images";

const Background: React.FC = () => {
  return (
    <div className="relative flex w-full h-[500px] p-5 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-20"></div>

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover shadow-lg shadow-black blur-md z-10"
        alt="Consultancy Background"
        src={Consultancy}
      />

      {/* Content */}
      <div className="relative z-30 flex w-full max-w-[1366px] mx-auto items-center">
        <div className="flex flex-col md:w-[70%] max-w-[55rem] gap-5">
          <p
            className="text-primary text-5xl font-bold tracking-wider text-center md:text-left"
            style={{
              textShadow: "2px 2px 1px black",
            }}
          >
            Danphe International Consultancy
          </p>
          <p className="text-lg text-white font-semibold tracking-wide">
            Consultants offer advice and expertise to client organisations to
            help them improve their business performance.
          </p>
          <button className="bg-primary text-white font-bold px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-red-600 transition duration-300 group">
            <span>Apply Now</span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Background;
