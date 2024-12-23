import React from "react";
import { Logo } from "../Assets/images";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="max-w-[1366px] mx-auto w-full my-10 lg:px-3 px-1">
          <footer className="flex flex-col gap-4 w-full">
            <div className="flex items-center sm:gap-4 gap-0 flex-wrap">
              <img
                className="w-[5rem] h-[5rem] object-cover overflow-hidden"
                src={Logo}
                alt="Logo"
              />
              <span className="text-primary text-lg font-semibold tracking-wide">
                Danphe International Consultancy Pvt. Ltd.
              </span>
            </div>
            <div className="flex text-black flex-wrap sm:flex-nowrap">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold flex gap-2">
                  Find Us on:
                  <a href="#" className="flex items-center">
                    <FaFacebook />
                    &nbsp;
                    <FaInstagramSquare />
                  </a>
                </h1>
                <p className="text-lg text-primary max-w-80">
                  We are thrilled to have you. Just remember us every-time you
                  thinking about abroad trip.
                </p>
              </div>
              <div className="flex gap-4 md:ml-4 flex-wrap md:justify-around justify-start w-full">
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold underline text-black">
                    Social Media
                  </h2>
                  <div className="flex flex-col">
                    <a
                      href=""
                      className="hover:opacity-60 text-black hover:underline"
                    >
                      <span>Facebook</span>
                    </a>
                    <a
                      href=""
                      className="hover:opacity-60 text-black hover:underline"
                    >
                      <span>Instagram</span>
                    </a>
                    <a
                      href=""
                      className="hover:opacity-60 text-black hover:underline"
                    >
                      <span>TikTok</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold underline text-black">
                    Quick links
                  </h2>
                  <div className="flex flex-col">
                    <a
                      href=""
                      className="hover:opacity-60 text-black hover:underline"
                    >
                      <span>About</span>
                    </a>
                    <a
                      href=""
                      className="hover:opacity-60 text-black hover:underline"
                    >
                      <span>Contact</span>
                    </a>
                    <a
                      href=""
                      className="hover:opacity-60 text-black hover:underline"
                    >
                      <span>Terms of Condition</span>
                    </a>
                    <a
                      href=""
                      className="hover:opacity-60 text-black hover:underline"
                    >
                      <span>Privacy Policy</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-black underline">
                    Contact Us
                  </h2>
                  <div className="flex flex-col">
                    <div className="flex items-start gap-3">
                      {/* <Image
                        className="w-10 h-10 mt-3"
                        alt="Logo"
                        width={100}
                        height={100}
                        src="/images/danpheinternationallogo.jpg"
                      /> */}
                      <div className="flex flex-col">
                        {/* <span className="text-primary text-lg font-semibold tracking-wide">
                          Danphe International Consultancy Pvt. Ltd.
                        </span> */}
                        <div className="flex flex-col justify-start flex-wrap">
                          <div className="flex sm:gap-1 md:gap-5 flex-wrap">
                            <span className="text-black">
                              danphe2022@gmail.com
                            </span>
                            <span className="text-black">9860194329</span>
                          </div>
                          <span className="text-black">
                            Gyaneshwor-30, Kathmandu, Nepal <br /> Near Germany
                            Embassy
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
