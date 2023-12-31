import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Team = () => {
  return (
    <div id="team">
      <div className="flex items-center justify-center text-center bg-gradient-to-r from-fuchsia-500 via-red-600 to-cyan-400 w-[100%]">
        <div className="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full w-full bg-white">
          <div className="flex flex-col p-2 m-2 w-full">
            <div className="text-xl md:text-3xl font-medium">Our Team</div>

            <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-4 p-2">
              <div className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
                <div className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
                  <img
                    // height={40}
                    // width={40}
                    alt="ecommerce"
                    src="https://source.unsplash.com/300x300/?girl"
                    className="object-cover object-center h-full w-full"
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Elena Gilbert
                </div>
                <div className="italic text-gray-500 text-sm">HR, Asikur</div>
                <div className="flex my-2">
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoTwitter className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-twitter"></IoLogoTwitter>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoInstagram className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-instagram"></IoLogoInstagram>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoFacebook className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-facebook"></IoLogoFacebook>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoLinkedin className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-linkedin"></IoLogoLinkedin>
                  </a>
                </div>
              </div>
              <div className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
                <div className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
                  <img
                    // height={40}
                    // width={40}
                    src="https://source.unsplash.com/300x300/?man,businessman"
                    alt=""
                    className="object-cover object-center h-full w-full"
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  John Doe
                </div>
                <div className="italic text-gray-500 text-sm">CEO, Asikur</div>
                <div className="flex my-2">
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoTwitter className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-twitter"></IoLogoTwitter>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoInstagram className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-instagram"></IoLogoInstagram>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoFacebook className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-facebook"></IoLogoFacebook>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoLinkedin className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-linkedin"></IoLogoLinkedin>
                  </a>
                </div>
              </div>
              <div className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
                <div className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
                  <img
                    // height={40}
                    // width={40}
                    src="https://source.unsplash.com/300x300/?girl,woman"
                    alt=""
                    className="object-cover object-center h-full w-full"
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Rebbeca
                </div>
                <div className="italic text-gray-500 text-sm">SEO Analyst</div>
                <div className="flex my-2">
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoTwitter className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-twitter"></IoLogoTwitter>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoInstagram className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-instagram"></IoLogoInstagram>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoFacebook className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-facebook"></IoLogoFacebook>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoLinkedin className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-linkedin"></IoLogoLinkedin>
                  </a>
                </div>
              </div>
              <div className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
                <div className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
                  <img
                    // height={40}
                    // width={40}

                    src="https://source.unsplash.com/300x300/?man,boy"
                    alt=""
                    className="object-cover object-center h-full w-full"
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Reacher
                </div>
                <div className="italic text-gray-500 text-sm">Manager</div>
                <div className="flex my-2">
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoTwitter className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-twitter"></IoLogoTwitter>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoInstagram className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-instagram"></IoLogoInstagram>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoFacebook className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-facebook"></IoLogoFacebook>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 flexCenter rounded-full border-cyan-500 border  hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <IoLogoLinkedin className="text-xl mx-auto text-gray-800 hover:text-white duration-300 mt-[-4px] text-center fa-linkedin"></IoLogoLinkedin>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
